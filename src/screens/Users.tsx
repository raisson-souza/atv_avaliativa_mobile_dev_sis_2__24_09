import React from "react"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationRoutes } from "../../App"
import { View, Text, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import ScreenBase from "../components/ScreenBase"

type UsersScreenRouteProp = RouteProp<StackNavigationRoutes, "Users">

type UsersScreenProps = {
    route: UsersScreenRouteProp
}

type UsersNavigationProp = StackNavigationProp<StackNavigationRoutes, "Users">

export const Users: React.FC<UsersScreenProps> = ({ route }) => {
    const navigation = useNavigation<UsersNavigationProp>() // Aqui tipamos a navegação corretamente

    return (
        <ScreenBase>
            <Text>Users SCREEN</Text>
        </ScreenBase>
    )
}