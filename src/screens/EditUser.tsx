import React from "react"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationRoutes } from "../../App"
import { View, Text, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import ScreenBase from "../components/ScreenBase"

type EditUserScreenRouteProp = RouteProp<StackNavigationRoutes, "EditUser">

type EditUserScreenProps = {
    route: EditUserScreenRouteProp
}

type EditUserNavigationProp = StackNavigationProp<StackNavigationRoutes, "EditUser">

export const EditUser: React.FC<EditUserScreenProps> = ({ route }) => {
    const navigation = useNavigation<EditUserNavigationProp>() // Aqui tipamos a navegação corretamente

    return (
        <ScreenBase>
            <Text>EditUser SCREEN</Text>
        </ScreenBase>
    )
}