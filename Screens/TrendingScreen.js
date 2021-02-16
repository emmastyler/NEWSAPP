import React from 'react'
import { View, Text, processColor } from 'react-native'
import { ARTICLE_URL } from 'react-native-dotenv'

function TrendingScreen() {
    return (
        <View>
            <Text>
                This is the url {ARTICLE_URL}
            </Text>
        </View>
    )
}

export default TrendingScreen