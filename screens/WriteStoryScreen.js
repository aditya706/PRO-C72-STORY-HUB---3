import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  KeyboardAvoidingView,
} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../config';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      author: '',
      storyText: '',
    }
  }

  submitStory = ()=>{
        db.collection("stories").add({
            title: this.state.title,
            author: this.state.author,
            storyText: this.state.storyText,
            //date: firebase.firestore.FieldValue.serverTimestamp().now().toDate()
        })
        this.setState({
            title: '',
            author: '',
            storyText: ''
        })
        ToastAndroid.show('Your story is sumitted', ToastAndroid.SHORT)
    }
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behaviour="padding" enabled>
        <View style={styles.allText}>
          <TouchableOpacity style={styles.header}>
            <Text style={styles.headerText}>StoryHub</Text>
          </TouchableOpacity>

          <TextInput
            style={styles.titleBox}
            placeholder="Write the title of the story here"
            onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
                    value={this.state.title}
          />

          <TextInput
            style={styles.authorBox}
            placeholder="Write the name of the author here"
            onChangeText= {(text)=>{
                        this.setState({
                            author: text
                        })
                    }}
                    value={this.state.author}
          />

          <TextInput
            style={styles.storyBox}
            placeholder="Write your story here"
            onChangeText= {(text)=>{
                        this.setState({
                            storyText: text
                        })
                    }}
                    value={this.state.storyText}
                    multiline={true}
          />

          <TouchableOpacity style={styles.submitButton}>
            <Text style={styles.buttonText} onPress={this.submitStory}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
      flex: 1,
      
    },
  allText: {
    
    flex: 1,
  },
  header: {
    backgroundColor: '#ef7b64',
  },
  headerText: {
    fontFamily: 'Century Gothic',
    fontSize: 35,
    textAlign: 'center',
    padding: 5,
  },
  titleBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'Century Gothic',
    borderRadius: 15,
    borderWidth: 1,
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  authorBox: {
    width: '90%',
    height: 20,
    backgroundColor: 'white',
    fontFamily: 'Century Gothic',
    borderRadius: 15,
    borderWidth: 1,
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  storyBox: {
    width: '90%',
    height: '40%',
    backgroundColor: 'white',
    fontFamily: 'Century Gothic',
    borderRadius: 15,
    borderWidth: 1,
    padding: 17,
    marginLeft: 20,
    marginTop: 10,
    color: 'black',
    fontSize: 15,
  },
  submitButton: {
    backgroundColor: '#ef7b64',
    width: '50%',
    height: 40,
    borderRadius: 15,
    borderWidth: 1,
    marginTop: 10,
    padding: 5,
    marginLeft: 80,
  },
  buttonText: {
    fontFamily: 'Century Gothic',
    textAlign: 'center',
    fontSize: 25,
  },
});
