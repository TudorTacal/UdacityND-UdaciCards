import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from "./components/DeckList";
import DeckView from "./components/DeckView";
import {
  StackNavigator,
} from 'react-navigation';


const MainNavigator = StackNavigator({
  Home: {
    screen: DeckList
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: {
      title: "udacicards",
      headerTitleStyle : {alignSelf: "flex-start", marginLeft: -10, fontSize: 20, fontWeight: 'bold',  },
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "black",
      }
    } 
  }
}, 
{
  headerMode: 'screen', 
  cardStyle: {backgroundColor: "white"}
})

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <MainNavigator style ={{backgroundColor: "white"}}/>
      </View>
    );
  }
}

