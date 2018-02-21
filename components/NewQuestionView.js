import React from 'react';
import { StyleSheet, Text, View,
    Dimensions, FlatList, AsyncStorage,
    TouchableOpacity, Button, TextInput } from 'react-native';
import { white, black, gray }from "../utils/colors";
import * as api from "../models/api";

class NewQuestionView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "Add question",
            answer: "Add answer"
         };
         this.addCardToDeckAsync = this.addCardToDeckAsync.bind(this);
    }

    addCardToDeckAsync = (title, card) => {
        api.addCardToDeck(title, card);
        this.props.navigation.state.params.addCard(title, card);
    }

    render() {
        let deckId = this.props.navigation.state.params.deck.title;
        let card = Object.assign({}, this.state);
        return (
            <View style={{flex: 1, alignItems: 'center'}}>
                <TextInput 
                    style={[styles.inputField, {marginTop: 25}]}
                    value={this.state.question} 
                    onChangeText={(question) => this.setState({question})}/>
                <TextInput 
                    style={styles.inputField}
                    value={this.state.answer}
                    onChangeText={(answer) => this.setState({answer})}/>
                <TouchableOpacity 
                    style={styles.submitButton}
                    onPress={()=> this.addCardToDeckAsync(deckId, card)}>
                    <Text style={{color: white, fontSize: 24}}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    inputField: {
        borderColor: black,
        borderWidth: 2,
        borderRadius: 5,
        height: 45,
        width: Dimensions.get('window').width / 1.1,
        marginBottom: 45,
        paddingLeft: 10
    },
    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 70,
        width: 180,
        backgroundColor: black,
        borderRadius: 7,
    },
  });
export default NewQuestionView;