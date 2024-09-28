import { HomeNavigationProp } from "../screens/Home"
import { useNavigation } from "@react-navigation/native"
import { UserOutput } from "../types/user"
import { View, Text, StyleSheet, Button } from "react-native"

type UserCardProps = {
    user: UserOutput
}

export default function UserCard({ user }: UserCardProps) {
    const navigation = useNavigation<HomeNavigationProp>()
    return (
        <View
            style={ styles.container }
            onTouchEnd={ () => navigation.navigate("DetailsUser", { id: user.id })}
        >
            <Text>Id: { user.id }</Text>
            <Text>Nome: { user.name }</Text>
            <Text>Email: { user.email }</Text>
            <Text>Login: { user.login }</Text>
            <Text>Senha: { user.password }</Text>
            <Text>Cidade: { user.city }</Text>
            <Button title="Editar" onPress={ () => navigation.navigate("EditUser", { id: user.id })} />
            <Button title="Excluir" />
        </View>
    )
} // TODO: modal de confirmação de exclusao

const styles = StyleSheet.create({
    container: {
        borderColor: "black",
        borderWidth: 1,
    },
    input: {
        width: 50,
    }
})