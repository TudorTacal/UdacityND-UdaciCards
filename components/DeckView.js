import React from 'react';
import { StyleSheet, Text, View,
    Dimensions, FlatList, AsyncStorage,
    TouchableOpacity, Button } from 'react-native';
import { white, black, gray }from "../utils/colors";

class DeckView extends React.Component{
    render() {
        let deck = this.props.navigation.state.params.deck;
        return(
            <View style={{justifyContent: 'space-around', flex: 1}}>
                <View style={styles.deck}>
                    <Text style={{fontSize: 50, fontWeight: 'bold'}}>{deck.title.toLowerCase()}</Text>
                    <Text style={{fontSize: 35, color: gray}}>{deck.questions.length} cards</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity 
                        style={styles.addCardButton} 
                        onPress={() => this.props.navigation.navigate('NewQuestionView', { deck })
                    }>
                        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Add Card</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.startQuizButton}>
                        <Text style={{fontSize: 20, fontWeight: 'bold', color: white}}>Start Quiz</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
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
        borderRadius: 7
    },
  });

export default DeckView;