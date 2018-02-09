import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class DeckList extends React.Component {
    render () {
        return (
            <View style={styles.container}>
                <Text>Mobile flash cards</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

export default DeckList;