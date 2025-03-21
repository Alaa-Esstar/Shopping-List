import { StyleSheet, View } from 'react-native'
import { useCallback, useState } from 'react'
import { ThemedText } from '@/components/ThemedText'
import { isClerkAPIResponseError, useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import Button from '@/components/ui/Button'
import TextInput from '@/components/ui/TextInput'
import { BodyScrollView } from '@/components/ui/BodyScrollView'
import { ClerkAPIError } from '@clerk/types'

const SignInScreen = () => {
    const { signIn, setActive, isLoaded } = useSignIn();
    const router = useRouter();

    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errors, setErrors] = useState<ClerkAPIError[]>([]);

    const onSignInPress = useCallback(async () => {
        if (!isLoaded) return;

        setIsSigningIn(true);
        setErrors([]);

        // Start the sign-in process using the email and password provided
        try {
            const signInAttempt = await signIn.create({
                identifier: emailAddress,
                password,
            });

            // If sign-in process is complete, set the created session as active
            // and redirect the user
            if (signInAttempt.status === "complete") {
                await setActive({ session: signInAttempt.createdSessionId });
                router.replace("/(index)");
            } else {
                // If the status isn't complete, check why. User might need to
                // complete further steps.
                console.error(JSON.stringify(signInAttempt, null, 2));
            }
        } catch (err) {
            // See https://clerk.com/docs/custom-flows/error-handling
            // for more info on error handling
            if (isClerkAPIResponseError(err)) setErrors(err.errors);
            console.error(JSON.stringify(err, null, 2));
        } finally {
            setIsSigningIn(false);
        }
    }, [isLoaded, signIn, emailAddress, password, setActive]);

    return (
        <BodyScrollView contentContainerStyle={styles.container}>
            <View style={styles.formSection}>
                <TextInput
                    autoCapitalize="none"
                    value={emailAddress}
                    label="Email"
                    keyboardType="email-address"
                    placeholder="Enter your email"
                    onChangeText={setEmailAddress}
                />
                <TextInput
                    value={password}
                    label="Password"
                    placeholder="Enter your password"
                    secureTextEntry={true}
                    onChangeText={setPassword}
                />

                {errors.map((error) => (
                    <ThemedText key={error.longMessage} style={styles.errorText}>
                        {error.longMessage}
                    </ThemedText>
                ))}

                <Button
                    onPress={onSignInPress}
                    loading={isSigningIn}
                    disabled={!emailAddress || !password || isSigningIn}
                    style={styles.signInButton}
                >
                    Sign in
                </Button>
            </View>

            <View style={styles.footer}>
                <View style={styles.footerSection}>
                    <ThemedText style={styles.footerText}>
                        Don't have an account?
                    </ThemedText>
                    <Button onPress={() => router.push("/sign-up")} variant="ghost">
                        Sign up
                    </Button>
                </View>

                <View style={styles.footerSection}>
                    <ThemedText style={styles.footerText}>Forgot password?</ThemedText>
                    <Button
                        onPress={() => router.push("/reset-password")}
                        variant="ghost"
                    >
                        Reset password
                    </Button>
                </View>
            </View>
        </BodyScrollView>
    )
}

export default SignInScreen

const styles = StyleSheet.create({
    container: {
        padding: 24,
        gap: 32,
    },
    formSection: {
        gap: 16,
    },
    errorText: {
        color: "red",
        marginBottom: 8,
    },
    signInButton: {
        marginTop: 8,
    },
    footer: {
        gap: 24,
    },
    footerSection: {
        alignItems: "center",
    },
    footerText: {
        color: "gray",
    },
});