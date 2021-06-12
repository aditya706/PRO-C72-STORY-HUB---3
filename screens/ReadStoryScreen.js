import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {SearchBar} from 'react-native-elements';
import db from '../config'

export default class ReadStoryScreen extends React.Component{
  constructor(){
    super();
    this.state={
      allStories:[],
      dataSource:[],
      search:''
    }
  }
  componentDidMount(){
    this.retriveStories()
  }

  updateSearch = search => {
    this.setState({ search });
  }

  retriveStories = () => {
    try{
      var allStories = []
      var stories = db.collection("stories").get().then((querySnapshot)=> {
        querySnapshot.forEach((doc)=>{
          allStories.push(doc.data())
        })
        this.setState({allStories})
      })
    }
    catch(error){
      console.log(error);
    }
  };

  SearchFilterFunction(text){
    const newData = this.state.allStories.filter((item)=>{
      const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
      const textData = text.toUpperCase();
      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      dataSource: newData,
      search: text,
    });
  }

  render(){
    return(
      <View style={styles.allText}>
      <TouchableOpacity style={styles.header}>
            <Text style={styles.headerText}>StoryHub</Text>
          </TouchableOpacity>
          <View style={{height:20, width:'100%'}}>
          <SearchBar
          placeholder="Search"
          onChangeText={text => this.SearchFilterFunction(text)}
          onClear={text => this.SearchFilterFunction('')}
          value={this.state.search}/>
          </View>
          <FlatList
          data={this.state.search === "" ? this.state.allStories:this.state.dataSource}
          renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.T}> Title : {item.title}</Text>
                    <Text style={styles.T}> Author: {item.author}</Text>
                    <Text style={styles.T}> Story: {item.storyText}</Text>
          </View>
          )}
          keyExtractor={(item, index) => index.toString()}
          />
          </View>
    )
  }
}

const styles = StyleSheet.create({
  allText: {
    backgroundColor: '#ef7b64',
    flex: 1,
    fontFamily: 'Century Gothic',
  },
  header: {
    backgroundColor: '#38b29b',
  },
  headerText: {
    fontFamily: 'Century Gothic',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  displayText: {
    fontFamily: 'Century Gothic',
    fontSize: 20,
    padding: 15,
  },
  itemContainer: {
    height: 80,
    width:'100%',
    borderWidth: 2,
    borderLeftWidth:0,
    borderRightWidth:0,
    borderTopWidth:0,
    borderColor: 'black',
    justifyContent:'center',
    alignSelf: 'center',
    marginTop:10
  },
  T: {
    fontFamily: 'Century Gothic',
    fontSize: 17,
  }
});