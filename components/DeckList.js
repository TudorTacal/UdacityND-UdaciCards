import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, AsyncStorage } from 'react-native';
import { startingDecks, getDecks } from '../models/api';
import { AppLoading } from 'expo';

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

        this.getDecksAsync = this.getDecksAsync.bind(this);

        this.state = {
            decks: null,
        }
    }
    getDecksAsync() {
        return getDecks();
    }

    componentDidMount() {
        AsyncStorage.setItem("decks", JSON.stringify(startingDecks));
        this.getDecksAsync().then((data) => this.setState({decks: data}));
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
                            <View style={styles.deck}>
                                <Text style={{fontSize: 40}}>{item.key.title.toLowerCase()}</Text>
                                <Text style={{fontSize: 30, color: 'grey'}}>{item.key.questions.length} cards</Text>
                            </View>
                            <View style={styles.blackLine}/>
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