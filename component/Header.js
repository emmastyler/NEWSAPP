import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    TextInput,
} from 'react-native'
import { SearchBar } from 'react-native-elements'
import { Ionicons } from '@expo/vector-icons';
import Searchbar from './SearchBar'


const Header = ({ navigation }) => {

    return (

        <View style={styles.container}>

            <Ionicons name='menu' size={40} style={styles.text1} color='white' onPress={() => {
                navigation.openDrawer()
            }} />
            <Ionicons name='search' size={30} style={styles.text2} color='white' />


        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'darkgreen',

    },
    text1: {
        flex: 1,
    },

    text2: {
        flex: 0,
        marginTop: 6,
        marginRight: 7
    },
    text3: {
        flex: 0,

    },

})

export default Header