import React from "react"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationRoutes } from "../../App"
import { View, Text, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import ScreenBase from "../components/ScreenBase"

type DetailsUserScreenRouteProp = RouteProp<StackNavigationRoutes, "DetailsUser">

type DetailsUserScreenProps = {
    route: DetailsUserScreenRouteProp
}

type DetailsUserNavigationProp = StackNavigationProp<StackNavigationRoutes, "DetailsUser">

export const DetailsUser: React.FC<DetailsUserScreenProps> = ({ route }) => {
    const navigation = useNavigation<DetailsUserNavigationProp>() // Aqui tipamos a navegação corretamente

    return (
        <ScreenBase>
            <Text>DetailsUser SCREEN</Text>
        </ScreenBase>
    )
}