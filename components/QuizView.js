import React from 'react';
import { StyleSheet, Text, View,
    Dimensions, FlatList, AsyncStorage,
    TouchableOpacity, Button } from 'react-native';
import { white, black, gray, red, green }from "../utils/colors";
import * as api from "../models/api";

const quizResults = "quiz results";

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
        this.calcultateResultsAndClearNotifications = this.calcultateResultsAndClearNotifications.bind(this);
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
        this.state.deck.questions[nextCardIndex] ? this.setState({cardInPlay: this.state.deck.questions[nextCardIndex], 
            showQuestion: true, showAnswer: false}) :
            this.setState({cardInPlay: quizResults});
    }

    calcultateResultsAndClearNotifications = () => {
        api.clearLocalNotification()
            .then(api.setLocalNotification);
        this.props.navigation.state.params.deleteNotification();
        let numberOfQuestions = this.state.deck.questions.length;
        return `${(this.state.correctAnswers/numberOfQuestions*100)}%`;
    }

    render() {
         let deck = this.state.deck;
        let cards = deck.questions;
        let cardInPlay = this.state.cardInPlay;
        return (
            cardInPlay == quizResults ? 
            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                <View>
                    <Text 
                        style={{fontSize: 50, paddingLeft: 30, paddingRight: 30, fontWeight: "bold", marginTop: -90}}>
                        You got {this.calcultateResultsAndClearNotifications()} of questions correct
                    </Text>
                </View>
                <View style={{alignItems: 'center', marginTop: 100}}>
                    <TouchableOpacity 
                            style={styles.addCardButton} 
                            onPress={() => 
                                this.setState({cardInPlay: this.props.navigation.state.params.deck.questions[0]})}>
                            <Text style={{fontSize: 20, fontWeight: 'bold'}}>Restart Quiz</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.startQuizButton}
                            onPress={() => this.props.navigation.goBack(null)}>
                            <Text style={{fontSize: 20, fontWeight: 'bold', color: white}}>Back to Deck</Text>
                        </TouchableOpacity>
                    </View>
            </View> 
            :
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
})

export default QuizView;