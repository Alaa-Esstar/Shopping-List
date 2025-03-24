import { ThemedText } from "@/components/ThemedText";
import { emojies } from "@/constants/Colors";
import { useListCreation } from "@/context/ListCreationContext";
import { useRouter } from "expo-router";
import { FlatList, Pressable, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EmojiPickerScreen() {
    const { setSelectedEmoji } = useListCreation();
    const router = useRouter()

    const handleEmojiSelect = (emoji: string) => {
        setSelectedEmoji(emoji);
        router.back()
    }
    return (
        <SafeAreaView>
            <ThemedText style={{
                fontSize: 20,
                fontWeight: 500,
                textAlign: 'center',
                padding: 16
            }}>
                Choose an Emoji
            </ThemedText>
            <FlatList
                data={emojies}
                renderItem={({ item }) => (
                    <Pressable onPress={() => handleEmojiSelect(item)}
                        style={{
                            flex: 1,
                            justifyContent: "center",
                            alignItems: "center"
                        }}
                    >
                        <Text style={{ fontSize: 40 }}>{item}</Text>
                    </Pressable>
                )}
                numColumns={5}
                keyExtractor={(item) => item}
                automaticallyAdjustKeyboardInsets
                contentInsetAdjustmentBehavior="automatic"
                contentContainerStyle={{
                    padding: 16,
                    paddingBottom: 150
                }}
            />
        </SafeAreaView>
    )
}