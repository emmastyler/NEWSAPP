import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { FlatLists } from '../component/FlatList';



function HomeScreen({ navigation }) {
    return (
        <View>
            <FlatLists />
        </View>
    )
}


export default HomeScreen
