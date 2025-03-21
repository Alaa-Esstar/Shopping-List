import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import Button from '@/components/ui/Button'
import { useClerk } from '@clerk/clerk-expo'
import { BodyScrollView } from '@/components/ui/BodyScrollView'
import { Stack, useRouter } from 'expo-router'
import { Pressable } from 'react-native'
import { IconSymbol } from '@/components/ui/IconSymbol'
import { appleBlue } from '@/constants/Colors'

const HomeScreen = () => {
    const router = useRouter()
    const { signOut } = useClerk();

    const renderHeaderRight = () => {
        return (
            <Pressable onPress={() => { }}>
                <IconSymbol name='plus' color={appleBlue} />
            </Pressable>
        )
    }
    const renderHeaderLeft = () => {
        return (
            <Pressable onPress={() => { }}>
                <IconSymbol name='gear' color={appleBlue} />
            </Pressable>
        )
    }
    return (
        <>
            <Stack.Screen options={{
                headerRight: renderHeaderRight,
                headerLeft: renderHeaderLeft
            }} />
            <BodyScrollView contentContainerStyle={{ padding: 16 }}>
                <ThemedText type='title'>HomeScreen</ThemedText>
                <Button onPress={signOut}>Sign Out</Button>
            </BodyScrollView >
        </>
    )
}

export default HomeScreen