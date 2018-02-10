import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

class DeckList extends React.Component {
    render () {
        return (
            <View>
                <View style={{borderTopColor: 'black', borderTopWidth: 1, marginTop: 40}}/>
                <View style={styles.deckHeader}>
                    <Text style={{fontSize: 20, padding: 20}}>DECKS</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deckHeader: {
        width: Dimensions.get('window').width / 2,
        borderBottomColor: '#FFFF00',
        borderBottomWidth: 3,
        alignItems: 'center',
    }
  });

export default DeckList;