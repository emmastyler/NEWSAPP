import React, { useState, useEffect, Fragment } from 'react'
import { Alert } from 'react-native'
import { ActivityIndicator } from 'react-native'
import { Text, View } from 'react-native'
import { FlatList } from 'react-native'
import { FetchNewsApi } from '../Rest_Api/FetchNewsApi'
import ActivityIndicators from './ActivityIndicator'

export const FlatLists = () => {

    const initialState = {
        loading: true,
        data: null
    }
    const [getArticle, setGetArticle] = useState(initialState)

    useEffect(() => {
        FetchNewsApi().then((data) => {
            setGetArticle({
                loading: false,
                data: data
            })
        }, error => {
            Alert.alert('Error', 'Something went wrong')
        })

    })



    return (
        <Fragment>

            {getArticle.loading === true ? <ActivityIndicators /> : (
                <FlatList
                    data={getArticle.data}
                    keyExtractor={getArticle.data.Key}
                    renderItem={({ item }) => {
                        return (
                            <Text style={{ borderBottomWidth: 1 }}>
                                {item.title}
                            </Text>
                        )
                    }}

                />
            )}


        </Fragment>
    )
}

