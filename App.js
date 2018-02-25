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
import { decks, setLocalNotification, clearLocalNotification } from './models/api';


const createArrowBack = (navigation, screen) => {
  return (
    <Icon.Button name="arrow-back" size={28} backgroundColor={black} 
      onPress={() =>  screen ? 
        navigation.navigate(screen) : navigation.goBack(null)}/>
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
        headerLeft: createArrowBack(navigation, "Home")
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
        headerLeft: createArrowBack(navigation, "Home")
      }
    } 
  },
}, 
{
  cardStyle: {backgroundColor: "white"}
})

export default class App extends React.Component {
  componentDidMount() {
    AsyncStorage.setItem("decks", JSON.stringify(decks));
    setLocalNotification();
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <MainNavigator style ={{backgroundColor: "white"}}/>
      </View>
    );
  }
}

