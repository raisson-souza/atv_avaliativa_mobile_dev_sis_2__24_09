import { UserOutput } from "../types/user"
import { View, Text, StyleSheet } from "react-native"

type UserCardProps = {
    user: UserOutput
}

export default function UserCard({ user }: UserCardProps) {
    return (
        <View style={ styles.container }>
            <Text>Id: { user.id }</Text>
            <Text>Nome: { user.name }</Text>
            <Text>Email: { user.email }</Text>
            <Text>Login: { user.login }</Text>
            <Text>Senha: { user.password }</Text>
            <Text>Cidade: { user.city }</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderColor: "black",
        borderWidth: 1,
    },
})