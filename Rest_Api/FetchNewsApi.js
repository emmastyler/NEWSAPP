import { articleUri, apiKey, countryCode } from './NewsApiConstants'

import React from 'react'

export async function FetchNewsApi() {

    try {
        let article = await fetch(`${articleUri}?country=${countryCode}&apiKey=${apiKey}`)
        let result = await article.json()
        return result.articles
    } catch (error) {
        throw error
    }
}


