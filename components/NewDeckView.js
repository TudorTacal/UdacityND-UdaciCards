import React from 'react';
import { StyleSheet, Text, View,
    Dimensions, FlatList, AsyncStorage,
    TouchableOpacity, Button, TextInput } from 'react-native';
import { white, black, gray }from "../utils/colors";
import * as api from "../models/api";
import { getDecks } from '../models/api';

class NewDeckView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            deckTitle: "Deck",
            deck: null
         };
         this.createNewDeckAsync = this.createNewDeckAsync.bind(this);
    }

    createNewDeckAsync = async (deckTitle) => {
        await api.saveDeckTitle(deckTitle, () => {
            this.props.navigation.navigate('DeckView', 
            { title: deckTitle});
        });
    }
    

    render() {
        return (
            <React.Fragment>
                <View style={{alignItems: 'flex-end', marginBottom: 50}}>
                    <View style={[styles.deckHeader]}>
                        <Text style={{fontSize: 18, padding: 20}}>NEW DECK</Text>
                    </View>
                </View>
                <View style={{alignItems: 'center', marginBottom: 25}}>
                    <Text style={{fontSize: 50, fontWeight: 'bold', textAlign: "center"}}>
                        What is the title of your new deck?
                    </Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                    <TextInput 
                        style={[styles.inputField, {marginTop: 25}]}
                        value={this.state.deckTitle}
                        onChangeText={(deckTitle) => {this.setState({deckTitle})}}/>
                    <TouchableOpacity 
                        style={styles.submitButton}
                        onPress={()=> {this.createNewDeckAsync(this.state.deckTitle);
                        }}>
                        <Text style={{color: white, fontSize: 24}}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </React.Fragment>
        )
    }
}

const styles = StyleSheet.create({
    deckHeader: {
        width: Dimensions.get('window').width / 2,
        borderBottomColor: '#FFFF00',
        borderBottomWidth: 3,
        alignItems: 'center',
    },
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

export default NewDeckView;