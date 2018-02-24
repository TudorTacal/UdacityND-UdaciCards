import React from 'react';
import { StyleSheet, Text, View,
    Dimensions, FlatList, AsyncStorage,
    TouchableOpacity, Button, TextInput } from 'react-native';
import { white, black, gray }from "../utils/colors";
import * as api from "../models/api";

class NewDeckView extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <View style={styles.blackLine}/>
                    <View style={[styles.deckHeader]}>
                        <Text style={{fontSize: 18, padding: 20}}>NEW DECK</Text>
                    </View>
                </View>
            </View>
        )
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
        alignItems: 'flex-end',
    },
  });

export default NewDeckView;