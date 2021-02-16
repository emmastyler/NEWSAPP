import React from 'react'
import { ScrollView, Image } from 'react-native'

export default function ImageSlider() {
    return (
        <ScrollView style={styles.imagescroll}>
            <Image source={'assets\music_app_image1.jpg'} />
            <Image source={'assets\music_app_image1.jpg'} />
        </ScrollView>
    )
}
const styles = {
    imagescroll: {
        paddingRight: 10
    }
}