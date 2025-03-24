import React from 'react'
import { BodyScrollView } from '@/components/ui/BodyScrollView'
import { ThemedText } from '@/components/ThemedText'
import { Stack, useRouter } from 'expo-router'
import { View } from 'react-native'
import Button from '@/components/ui/Button'

const ScanScreen = () => {
    const router = useRouter();
    return (
        <BodyScrollView>
            <Stack.Screen options={{
                headerShown: false
            }} />
            <View style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 16
            }}>
                <Button variant='ghost' onPress={() => router.back()}>
                    Cancel
                </Button>
                <ThemedText type='subtitle'>Scan QR code</ThemedText>
            </View>
            <ThemedText>ScanScreen</ThemedText>
        </BodyScrollView>
    )
}

export default ScanScreen