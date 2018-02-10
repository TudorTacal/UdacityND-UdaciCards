import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList } from 'react-native';
import { decks } from '../models/dataRepository';

function mapKeyToDeck(decks) {
    let data = [];
    decks.forEach(deck => {
        data.push({key: deck[Object.keys(deck)[0]]});
    })
    return data;
}

class DeckList extends React.Component {
    render () {
        return (
            <View>
                <View style={styles.blackLine}/>
                <View style={styles.deckHeader}>
                    <Text style={{fontSize: 18, padding: 20}}>DECKS</Text>
                </View>
                <View style={{}}>
                    <FlatList data={mapKeyToDeck(decks)} keyExtractor={(item, index) => Math.random()+index} 
                        renderItem={({item}, index) => 
                            <React.Fragment>
                                <View style={styles.deck}>
                                    <Text style={{fontSize: 40}}>{item.key.title.toLowerCase()}</Text>
                                    <Text style={{fontSize: 30, color: 'grey'}}>{item.key.questions.length} cards</Text>
                                </View>
                                <View style={styles.blackLine}/>
                            </React.Fragment>
                    }/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    blackLine: {
        borderTopColor: 'black',
        borderTopWidth: 1,
        marginTop: 40
    },
    deckHeader: {
        width: Dimensions.get('window').width / 2,
        borderBottomColor: '#FFFF00',
        borderBottomWidth: 3,
        alignItems: 'center',
    },
    deck: {
        alignItems: 'center',
        marginTop: 40
    }
  });

export default DeckList;