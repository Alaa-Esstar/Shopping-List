import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import Button from '@/components/ui/Button'
import { useClerk } from '@clerk/clerk-expo'
import { BodyScrollView } from '@/components/ui/BodyScrollView'

const HomeScreen = () => {
    const { signOut } = useClerk();
    return (
        <BodyScrollView contentContainerStyle={{ padding: 16 }}>
            <ThemedText type='title'>HomeScreen</ThemedText>
            <Button onPress={signOut}>Sign Out</Button>
        </BodyScrollView >
    )
}

export default HomeScreen