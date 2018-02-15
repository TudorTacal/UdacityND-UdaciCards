import React from 'react';
import { StyleSheet, Text, View,
    Dimensions, FlatList, AsyncStorage,
    TouchableOpacity, Button } from 'react-native';
import { white, black, gray }from "../utils/colors";

class QuizView extends React.Component {
    render() {
        return (
            <View>
                <TextInput>Insert card name</TextInput>
            </View>
        )
    }
}

export default QuizView;