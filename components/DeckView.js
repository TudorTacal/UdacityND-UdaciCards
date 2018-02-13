import React from 'react';
import { StyleSheet, Text, View, Dimensions, FlatList, AsyncStorage, TouchableOpacity } from 'react-native';

class DeckView extends React.Component{
    render() {
        let deck = this.props.navigation.state.params.deck;
        return(
            <View style={styles.deck}>
                <Text style={{fontSize: 50, fontWeight: 'bold'}}>{deck.title.toLowerCase()}</Text>
                <Text style={{fontSize: 35, color: 'grey'}}>{deck.questions.length} cards</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    deck: {
        alignItems: 'center',
        marginTop: 100,
    }
  });

export default DeckView;