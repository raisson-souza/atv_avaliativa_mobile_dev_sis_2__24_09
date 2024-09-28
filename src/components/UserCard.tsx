import { HomeNavigationProp } from "../screens/Home"
import { useNavigation } from "@react-navigation/native"
import { UserOutput } from "../types/user"
import { View, Text, StyleSheet, Button } from "react-native"

type UserCardProps = {
    user: UserOutput
}

export default function UserCard({ user }: UserCardProps) {
    const navigation = useNavigation<HomeNavigationProp>()
    const goToUserDetails = () => navigation.navigate("DetailsUser", { id: user.id })

    return (
        <View
            style={ styles.container }
        >
            <Text onPress={ goToUserDetails }>Id: { user.id }</Text>
            <Text onPress={ goToUserDetails }>Nome: { user.name }</Text>
            <Text onPress={ goToUserDetails }>Email: { user.email }</Text>
            <Text onPress={ goToUserDetails }>Login: { user.login }</Text>
            <Text onPress={ goToUserDetails }>Senha: { user.password }</Text>
            <Text onPress={ goToUserDetails }>Cidade: { user.city }</Text>
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