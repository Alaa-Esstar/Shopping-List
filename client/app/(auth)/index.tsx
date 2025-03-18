import { View } from 'react-native'
import { useState } from 'react'
import { ThemedText } from '@/components/ThemedText'
import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import Button from '@/components/ui/Button'

const SignInScreen = () => {
    const { signIn, setActive, isLoaded } = useSignIn();
    const router = useRouter();

    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    return (
        <View>
            <ThemedText type='title'>SignInScreen</ThemedText>
            <Link href={"/sign-up"}>
                <ThemedText> Go to Sing Up </ThemedText>
            </Link>
            <Button>Hello</Button>
        </View>
    )
}

export default SignInScreen