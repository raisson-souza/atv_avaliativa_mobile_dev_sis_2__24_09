import { createStackNavigator } from "@react-navigation/stack"
import { DetailsUser } from "../screens/DetailsUser"
import { EditUser } from "../screens/EditUser"
import { Home } from "../screens/Home"
import React from "react"

export type StackNavigationRoutes = {
    Home: undefined
    EditUser: { id: number }
    DetailsUser: { id: number }
}

const Stack = createStackNavigator<StackNavigationRoutes>()

export default function AuthRoutes() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="EditUser"
                component={EditUser}
                options={{ title: "Editar usuário" }}
            />
            <Stack.Screen
                name="DetailsUser"
                component={DetailsUser}
                options={{ title: "Usuário" }}
            />
        </Stack.Navigator>
    )
}
