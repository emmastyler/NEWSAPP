import React from 'react'
import { Text } from 'react-native'
import { FlatList } from 'react-native'

export const FlatLists = () => {

    const item = [
        { name: 'Item 1', Key: 1 },
    ]
    return (
        <FlatList
            data={item}
            keyExtractor={item => item.Key}
            renderItem={({ item }) => {
                return (
                    <Text style={{ borderBottomWidth: 1 }}>
                        {item.name}
                    </Text>
                )
            }}

        />
    )
}

