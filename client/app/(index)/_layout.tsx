import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const HomeRoutesLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' />
        </Stack>
    )
}

export default HomeRoutesLayout