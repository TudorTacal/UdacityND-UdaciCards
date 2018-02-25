import React from 'react';
import { StyleSheet, Text, View,
    Dimensions, FlatList, AsyncStorage,
    TouchableOpacity, Button, Promise } from 'react-native';
import { white, black, gray }from "../utils/colors";
import * as api from "../models/api";
import { AppLoading } from 'expo';


class DeckView extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            deck: null, 
         };
         this.refreshFunction = this.refreshFunction.bind(this);
         this.addCard = this.addCard.bind(this);
    }

     refreshFunction = (title) => {
        api.getDecks()
            .then((data) => {
                deckObject = data.filter(deck => Object.keys(deck)[0] == title)[0];
                return this.setState({deck: deckObject[Object.keys(deckObject)[0]]})});
    }

    addCard = (title, card) => {
        let newDeck = this.state.deck;
        newDeck.questions.push(card);
        this.setState({deck: newDeck})
    }

    componentDidMount() {
        this.setState({deck: this.props.navigation.state.params.deck});
    }

    render() {
        let deck = this.state.deck || this.props.navigation.state.params.deck;
        return deck == null ?  
            <AppLoading/> :
            <View style={{justifyContent: 'space-around', flex: 1}}>
                <View style={styles.deck}>
                {console.log(deck)}
                    <Text style={{fontSize: 50, fontWeight: 'bold'}}>{deck.title.toLowerCase()}</Text>
                    <Text style={{fontSize: 35, color: gray}}>{deck.questions.length} cards</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity 
                        style={styles.addCardButton} 
                        onPress={() => this.props.navigation.navigate('NewQuestionView', { deck, refreshFunction: this.refreshFunction, addCard: this.addCard})
                    }>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.startQuizButton}
                        onPress={() => this.props.navigation.navigate('QuizView', 
                                        { deck, deleteNotification: this.deleteNotification })}
                    >
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: white}}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
            </View>
        
    }
}

const styles = StyleSheet.create({
    deck: {
        alignItems: 'center',
    },
    addCardButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: 220,
        backgroundColor: white,
        borderColor: black,
        borderWidth: 2,
        borderRadius: 7,
        marginBottom: 15,
    },
    startQuizButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: 220,
        backgroundColor: black,
        borderRadius: 7,
    },
  });

export default DeckView;