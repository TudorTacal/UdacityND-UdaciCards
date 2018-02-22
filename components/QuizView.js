import React from 'react';
import { StyleSheet, Text, View,
    Dimensions, FlatList, AsyncStorage,
    TouchableOpacity, Button } from 'react-native';
import { white, black, gray, red, green }from "../utils/colors";

class QuizView extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            deck: this.props.navigation.state.params.deck,
            showQuestion: true,
            showAnswer: false,
            correctAnswers: 0,
            incorrectAnswers: 0,
            cardInPlay: this.props.navigation.state.params.deck.questions[0]
        }

        this.showAnswer = this.showAnswer.bind(this);
        this.showQuestion = this.showQuestion.bind(this);
    }

    showAnswer = () => {
        this.setState({showAnswer: true, showQuestion: false});
    }

    showQuestion = () => {
        this.setState({showAnswer: false, showQuestion: true});
    }

    trackScoreAndDisplayNextCard = (status) => {
        let nextCardIndex = this.state.deck.questions.indexOf(this.state.cardInPlay)+1;
        status == "correct" ? this.setState({correctAnswers: this.state.correctAnswers+1}) :
            this.setState({incorrectAnswers: this.state.incorrectAnswers+1})
        this.setState({cardInPlay: this.state.deck.questions[nextCardIndex], 
            showQuestion: true, showAnswer: false});
    }

    render() {
        console.log([this.state.correctAnswers]);
        let deck = this.state.deck;
        let cards = deck.questions;
        let cardInPlay = this.state.cardInPlay;
        return (
            <View style={{flex: 1, justifyContent: 'space-between'}}>
                <View>
                    <Text style={{padding: 10, fontWeight: "bold"}}>
                        {cards.indexOf(cardInPlay)+1}/{cards.length}
                    </Text>
                </View>
                <View style={styles.question}>
                    {
                        this.state.showQuestion && 
                        <View style={{alignItems: "center"}}>
                            <Text style={styles.questionText}>
                                {cardInPlay.question}
                            </Text>
                            <TouchableOpacity 
                                    style={styles.questionAnswerButton}
                                    onPress={() => this.showAnswer()}>
                                <Text style={{marginTop: 5, fontSize: 16, fontWeight: 'bold', color: red}}>
                                    Answer
                                </Text>
                            </TouchableOpacity>
                        </View>
                    }
                    {
                        this.state.showAnswer && 
                        <View style={[{alignItems: "center"}]}>
                            <Text style={styles.questionText}>
                                {cardInPlay.answer}
                            </Text>
                            <TouchableOpacity 
                                    style={styles.questionAnswerButton}
                                    onPress={() => this.showQuestion()}>
                                <Text style={{marginTop: 5, fontSize: 16, fontWeight: 'bold', color: red}}>
                                    Question
                                </Text>
                            </TouchableOpacity>
                        </View>
                    }
                </View>
                <View style={{alignItems: "center", }}>
                    <TouchableOpacity 
                            style={[styles.decisionButton, {backgroundColor: red}, {marginBottom: 10}]}
                            onPress={() => {this.trackScoreAndDisplayNextCard("incorrect")}}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: white}}>
                            Incorrect
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                            style={[styles.decisionButton, {backgroundColor: green}, {marginBottom: 90}]}
                            onPress={() => {this.trackScoreAndDisplayNextCard("correct")}}>
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
        marginLeft: 30,
        marginRight: 30,
    },
    questionText: {
        fontSize: 45,
        fontWeight: "bold",
        textAlign: "center"
    },
    decisionButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 220,
        borderRadius: 7,
    },
    questionAnswerButton: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 20,
        width: 70,
    }
})

export default QuizView;