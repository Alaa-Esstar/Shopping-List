import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import Button from '@/components/ui/Button'
import { useClerk } from '@clerk/clerk-expo'
import { BodyScrollView } from '@/components/ui/BodyScrollView'
import { Stack, useRouter } from 'expo-router'
import { Pressable, TouchableOpacity, View } from 'react-native'
import { IconSymbol } from '@/components/ui/IconSymbol'
import { appleBlue } from '@/constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'

const HomeScreen = () => {
    const router = useRouter()
    const { signOut } = useClerk();

    const renderHeaderRight = () => (
        <TouchableOpacity
            onPress={() => router.push("/list/new")}
            hitSlop={{ top: 15, bottom: 15, left: 15, right: 15 }}
            style={{ padding: 20 }}>
            <IconSymbol name='plus' color={appleBlue} />
        </TouchableOpacity>
    );
    const renderHeaderLeft = () => (
        <TouchableOpacity
            onPress={() => router.push("/profile")} style={{ padding: 20 }}>
            <IconSymbol name='gear' color={appleBlue} />
        </TouchableOpacity>
    );

    return (
        <SafeAreaView>
            <Stack.Screen options={{
                headerRight: renderHeaderRight,
                headerLeft: renderHeaderLeft,
                headerShown: false
            }} />
            <View style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <View style={{
                    display: "flex",
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <Pressable
                        onPress={() => router.push("/profile")} style={{ padding: 20 }}>
                        <IconSymbol name='gear' color={appleBlue} />
                    </Pressable>
                    <ThemedText>Shopping List</ThemedText>
                </View>
                <Pressable
                    onPress={() => router.push("/list/new")}
                    style={{ padding: 20 }}>
                    <IconSymbol name='plus' color={appleBlue} />
                </Pressable>
            </View>

            <BodyScrollView contentContainerStyle={{ padding: 16 }}>
                <ThemedText type='title'>HomeScreen</ThemedText>
                {/* <Button onPress={signOut}>Sign Out</Button> */}
            </BodyScrollView >
        </SafeAreaView>
    )
}

export default HomeScreen