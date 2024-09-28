import React from "react"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationRoutes } from "../../App"
import { Text, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import ScreenBase from "../components/ScreenBase"

type HomeScreenRouteProp = RouteProp<StackNavigationRoutes, "Home">

type HomeScreenProps = {
    route: HomeScreenRouteProp
}

type HomeNavigationProp = StackNavigationProp<StackNavigationRoutes, "Home">

export const Home: React.FC<HomeScreenProps> = ({ route }) => {
    const navigation = useNavigation<HomeNavigationProp>() // Aqui tipamos a navegação corretamente

    return (
        <ScreenBase>
            <Text>HOME SCREEN</Text>
            <Button title="Criar usuário" onPress={() => navigation.navigate("AddUser")}></Button>
            <Button title="Visualizar usuários" onPress={() => navigation.navigate("Users")}></Button>
        </ScreenBase>
    )
}