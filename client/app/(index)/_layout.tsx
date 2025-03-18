import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const HomeRoutesLayout = () => {
    return (
        <Stack
            screenOptions={{
                ...(process.env.EXPO_OS !== "ios"
                    ? {}
                    : {
                        headerLargeTitle: true,
                        headerTransparent: true,
                        headerBlurEffect: "systemChromeMaterial",
                        headerLargeTitleShadowVisible: false,
                        headerShadowVisible: true,
                        headerLargeStyle: {
                            // NEW: Make the large title transparent to match the background.
                            backgroundColor: "transparent",
                        },
                    }),
            }}>
            <Stack.Screen name='index' />
        </Stack>
    )
}

export default HomeRoutesLayout