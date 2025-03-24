import { createContext, ReactNode, useContext, useState } from "react";

type ListCreationContextType = {
    selectedEmoji: string;
    selectedColor: string;
    setSelectedEmoji: (emoji: string) => void;
    setSelectedColor: (color: string) => void;
};

const ListCreationContext = createContext<ListCreationContextType | undefined>(undefined);

export function ListCreationProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [selectedEmoji, setSelectedEmoji] = useState("🛒"); // Default emoji
    const [selectedColor, setSelectedColor] = useState("#9CCAFF"); // Default color

    return (
        <ListCreationContext.Provider value={{
            selectedColor,
            selectedEmoji,
            setSelectedColor,
            setSelectedEmoji
        }}>
            {children}
        </ListCreationContext.Provider>
    )
}

export function useListCreation() {
    const context = useContext(ListCreationContext);

    if (context === undefined) {
        throw new Error("Please wrap the component with ListCreationProvider")
    }

    return context;
}