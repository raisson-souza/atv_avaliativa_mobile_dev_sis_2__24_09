import React from "react"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationRoutes } from "../../App"
import { View, Text, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import ScreenBase from "../components/ScreenBase"

type AddUserScreenRouteProp = RouteProp<StackNavigationRoutes, "AddUser">

type AddUserScreenProps = {
    route: AddUserScreenRouteProp
}

type AddUserNavigationProp = StackNavigationProp<StackNavigationRoutes, "AddUser">

export const AddUser: React.FC<AddUserScreenProps> = ({ route }) => {
    const navigation = useNavigation<AddUserNavigationProp>() // Aqui tipamos a navegação corretamente

    return (
        <ScreenBase>
            <Text>AddUser SCREEN</Text>
        </ScreenBase>
    )
}