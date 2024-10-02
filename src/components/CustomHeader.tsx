import { View, StyleSheet, Text } from "react-native"

type CustomHeaderProps = {
    marginTop: number
}

export default function CustomHeader({ marginTop = 0 } : CustomHeaderProps) {
    return (
        <View style={ {...styles.container, marginTop: marginTop } }>
            <Text style={ styles.text }>Atividade Avaliativa - DEV SIS 2</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "stretch",
        backgroundColor: "#1b2838",
        height: 90,
        gap: 10,
    },
    text: {
        color: "white",
    },
})