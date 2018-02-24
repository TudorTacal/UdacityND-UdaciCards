import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import DeckList from "./components/DeckList";
import DeckView from "./components/DeckView";
import NewDeckView from "./components/NewDeckView";
import NewQuestionView from "./components/NewQuestionView";
import QuizView from "./components/QuizView";
import {
  StackNavigator,
} from 'react-navigation';
import  Icon from 'react-native-vector-icons/MaterialIcons';
import { white, black } from "./utils/colors";
import { decks } from './models/api';

AsyncStorage.setItem("decks", JSON.stringify(decks));

const createArrowBack = (navigation) => {
  return (
    <Icon.Button name="arrow-back" size={28} backgroundColor={black} 
      onPress={() =>  navigation.goBack(null)}/>
  )
}

const createArrowBackDeckView = (navigation) => {
  return (
    <Icon.Button name="arrow-back" size={28} backgroundColor={black} 
      onPress={() =>  navigation.navigate("DeckView")}/>
  )
}

const createArrowBackMain = (navigation) => {
  return (
    <Icon.Button name="arrow-back" size={28} backgroundColor={black} 
      onPress={() => {
       return navigation.navigate("Home")}} />
  )
}

const MainNavigator = StackNavigator({
  Home: {
    screen: DeckList,
    navigationOptions: ({navigation}) => {
      return {
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "white",
        },
      }
    } 
  },
  DeckView: {
    screen: DeckView,
    navigationOptions: ({navigation}) => {
      return {
        title: "udacicards",
        headerTitleStyle : {alignSelf: "flex-start", marginLeft: -10, fontSize: 20, fontWeight: 'bold',  },
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "black",
        },
        headerLeft: createArrowBackMain(navigation)
      }
    } 
  },
  NewQuestionView: {
    screen: NewQuestionView,
    navigationOptions: ({navigation}) => {
      return {
        title: "Add Card",
        headerTitleStyle : {alignSelf: "flex-start", marginLeft: -10, fontSize: 20, fontWeight: 'bold',  },
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "black",
        },
        headerLeft: createArrowBack(navigation)
      } 
     } 
  },
  QuizView: {
    screen: QuizView,
    navigationOptions: ({navigation}) => {
      return {
        title: "Quiz",
        headerTitleStyle : {alignSelf: "flex-start", marginLeft: -10, fontSize: 20, fontWeight: 'bold',  },
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "black",
        },
        headerLeft: createArrowBack(navigation)
      } 
     } 
  },
  NewDeckView: {
    screen: NewDeckView,
    navigationOptions: ({navigation}) => {
      return {
        title: "decks",
        headerTitleStyle : {alignSelf: "flex-start", marginLeft: -10, fontSize: 20, fontWeight: 'bold',  },
        headerTintColor: "white",
        headerStyle: {
          backgroundColor: "black",
        },
        headerLeft: createArrowBackMain(navigation)
      }
    } 
  },
}, 
{
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

