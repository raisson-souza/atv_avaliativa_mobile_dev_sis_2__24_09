import { AddUser } from "../screens/AddUser"
import { createStackNavigator } from "@react-navigation/stack"
import React from "react"

export type StackNavigationRoutes = {
    AddUser: undefined
    Login: undefined
}

const Stack = createStackNavigator<StackNavigationRoutes>()

export default function AppRoutes() {
    return (
        <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
                name="AddUser"
                component={AddUser}
                options={{ title: "Cadastro" }}
            />
            <Stack.Screen
                name="Login"
                component={() => (<></>)}
                options={{ title: "Login" }}
            />
        </Stack.Navigator>
    )
}