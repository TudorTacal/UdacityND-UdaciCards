import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DeckList from "./components/DeckList";
import DeckView from "./components/DeckView";
import NewQuestionView from "./components/NewQuestionView";
import QuizView from "./components/QuizView";
import {
  StackNavigator,
} from 'react-navigation';
import  Icon from 'react-native-vector-icons/MaterialIcons';
import { white, black } from "./utils/colors";

const createArrowBack = (navigation) => {
  return (
    <Icon.Button name="arrow-back" size={28} backgroundColor={black} 
      onPress={() => navigation.goBack(null)}/>
  )
}

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
  }
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

