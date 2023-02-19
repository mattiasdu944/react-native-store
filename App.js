import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import { HomeScreen } from './src/screens'

const App = () => {
    return (
        <SafeAreaView style={{ flex:1, paddingTop:50, paddingHorizontal:15 }}>
            <HomeScreen/>
        </SafeAreaView>
    )
}

export default App