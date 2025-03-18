import { View } from 'react-native'
import { useState } from 'react'
import { ThemedText } from '@/components/ThemedText'
import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import Button from '@/components/ui/Button'
import TextInput from '@/components/ui/TextInput'
import { BodyScrollView } from '@/components/ui/BodyScrollView'

const SignInScreen = () => {
    const { signIn, setActive, isLoaded } = useSignIn();
    const router = useRouter();

    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)

    const onSignInPress = () => {

    }

    return (
        <BodyScrollView
            contentContainerStyle={{
                paddingHorizontal: 16,
            }}>
            <TextInput label='Email' value={emailAddress} placeholder='Enter email' autoCapitalize='none' keyboardType='email-address' onChangeText={setEmailAddress} />
            <TextInput label='Password' placeholder='Enter password' secureTextEntry={true} onChangeText={(password) => setPassword(password)} />
            <Button onPress={onSignInPress} loading={isSigningIn} disabled={!emailAddress || !password || isSigningIn}>Sign In</Button>
            <View style={{
                marginTop: 16,
                alignItems: 'center'
            }}>
                <ThemedText>Don't have an account?</ThemedText>
                <Button variant='ghost' onPress={() => router.push("/sign-up")}>Sign Up</Button>
            </View>
            <View style={{
                marginTop: 16,
                alignItems: 'center'
            }}>
                <ThemedText>Forget Password?</ThemedText>
                <Button variant='ghost' onPress={() => router.push("/reset-password")}>Reset password</Button>
            </View>
        </BodyScrollView>
    )
}

export default SignInScreen