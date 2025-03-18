import React from 'react'
import { Redirect, Stack } from 'expo-router'
import { useAuth } from '@clerk/clerk-expo'

const AuthRoutesLayout = () => {
    const { isLoaded, isSignedIn } = useAuth()
    if (!isLoaded) return null
    if (isSignedIn) return <Redirect href={("/(index)")} />
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerTitle: "Sign In" }} />
            <Stack.Screen name='sign-up' options={{ headerTitle: "Sign Up" }} />
            <Stack.Screen name='reset-password' options={{ headerTitle: "Reset Password" }} />
        </Stack>
    )
}

export default AuthRoutesLayout