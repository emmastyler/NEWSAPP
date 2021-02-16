import ViewPager from '@react-native-community/viewpager'
import React, { Fragment } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'


export default function scrollLinks() {
    return (

        <ScrollView pagingEnabled horizontal style={styles.scroll}>
            <Text style={styles.scrollelements}>
                HOME
            </Text >
            <Text style={styles.scrollelements}>
                FOR YOU
            </Text>
            <Text style={styles.scrollelements}>
                TRENDING
            </Text>
            <Text style={styles.scrollelements}>
                LOCAL
            </Text>
            <Text style={styles.scrollelements}>
                INTERNATIONAL
            </Text>
            <Text style={styles.scrollelements}>
                REMOVE ADS
            </Text>
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    scroll: {
        backgroundColor: 'darkgreen',
    },
    scrollelements: {
        color: 'white',
        paddingLeft: 20,
        paddingRight: 20,
        fontSize: 15,
    }
})
