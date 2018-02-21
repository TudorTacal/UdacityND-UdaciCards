import React from 'react';
import { StyleSheet, Text, View,
    Dimensions, FlatList, AsyncStorage,
    TouchableOpacity, Button } from 'react-native';
import { white, black, gray, red, green }from "../utils/colors";

class QuizView extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        let deck = this.props.navigation.state.params.deck;
        let cards = deck.questions;
        let cardInPlay = deck.questions[1];
        return (
            <View style={{flex: 1}}>
                <View>
                    <Text style={{padding: 10, fontWeight: "bold"}}>
                        {cards.indexOf(cardInPlay)+1}/{cards.length}
                    </Text>
                </View>
                <View style={styles.question}>
                    <Text style={styles.questionText}>
                        {cardInPlay.question}
                    </Text>
                    <TouchableOpacity 
                            style={styles.answerButton}
                            onPress={() => {}}>
                        <Text style={{marginTop: 5, fontSize: 16, fontWeight: 'bold', color: red}}>
                            Answer
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{alignItems: "center", }}>
                    <TouchableOpacity 
                            style={styles.selectButton}
                            onPress={() => {}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: white}}>
                            Incorrect
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                            style={[styles.selectButton, {backgroundColor: "green"}]}
                            onPress={() => {}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: white}}>
                            Correct
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )  
    }
}

const styles = StyleSheet.create({
    question: {
        justifyContent: "center",
        alignItems: "center",
        marginTop: 90,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 180
    },
    questionText: {
        fontSize: 45,
        fontWeight: "bold",
        textAlign: "center"
    },
    selectButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 220,
        backgroundColor: red,
        borderRadius: 7,
        marginBottom: 7
    },
    answerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        width: 60,
    }
})

export default QuizView;