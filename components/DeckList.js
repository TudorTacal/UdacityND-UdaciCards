import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, AsyncStorage, TouchableOpacity } from 'react-native';
import { decks, getDecks, getDeck } from '../models/api';
import { AppLoading } from 'expo';
import { DeckView } from './DeckView';

function mapKeyToDeck(decks) {
    let data = [];
    decks.forEach(deck => {
        data.push({key: deck[Object.keys(deck)[0]]});
    })
    return data;
}

class DeckList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            decks: null,
        }
    }

    componentDidMount() {
        getDecks().then((data) => this.setState({decks: data}));
    }

    render () {
        return this.state.decks == null ?  
            <AppLoading/> :
            <View>
                <View style={styles.blackLine}/>
                <View style={styles.deckHeader}>
                    <Text style={{fontSize: 18, padding: 20}}>DECKS</Text>
                </View>
                <View>
                    <FlatList data={mapKeyToDeck(this.state.decks)} keyExtractor={(item, index) => Math.random()+index} 
                    renderItem={({item}, index) => 
                        <React.Fragment>
                            <TouchableOpacity    
                                onPress={() => this.props.navigation.navigate(
                                'DeckView', 
                                { 
                                    deck: item.key,
                                    refreshFunction: this.refreshFunction
                                }
                            )}>
                                <View style={styles.deck}>
                                    <Text style={{fontSize: 40}}>{item.key.title.toLowerCase()}</Text>
                                    <Text style={{fontSize: 30, color: 'grey'}}>{item.key.questions.length} cards</Text>
                                </View>
                                <View style={styles.blackLine}/>
                            </TouchableOpacity>
                        </React.Fragment>
                       }/> 
                </View>
            </View> 
        
    }
}

const styles = StyleSheet.create({
    blackLine: {
        borderTopColor: 'black',
        borderTopWidth: 1,
    },
    deckHeader: {
        width: Dimensions.get('window').width / 2,
        borderBottomColor: '#FFFF00',
        borderBottomWidth: 3,
        alignItems: 'center',
    },
    deck: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 40
    }
  });

export default DeckList;