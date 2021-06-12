import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ToastAndroid,
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <AppContainer />;
    </View>
  );
}

const TabNavigator = createBottomTabNavigator(
  {
    'Write A Story': { screen: WriteStoryScreen },
    'Read A Story': { screen: ReadStoryScreen },
  },

  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        const routeName = navigation.state.routeName;
        console.log(routeName);
        if (routeName === 'Read A Story') {
          return (
            <Image
              source={require('./StoryHubAssets/read.png')}
              style={{ width: 40, height: 40 }}
            />
          );
        } else if (routeName === 'Write A Story') {
          return (
            <Image
              source={require('./StoryHubAssets/write.png')}
              style={{ width: 45, height: 40 }}
            />
          );
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
