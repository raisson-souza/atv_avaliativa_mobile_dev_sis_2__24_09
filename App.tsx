import { AddUser } from "./src/screens/AddUser"
import { createStackNavigator } from "@react-navigation/stack"
import { DetailsUser } from "./src/screens/DetailsUser"
import { EditUser } from "./src/screens/EditUser"
import { Home } from "./src/screens/Home"
import { NavigationContainer } from "@react-navigation/native"
import React from "react"

export type StackNavigationRoutes = {
  Home: undefined
  AddUser: undefined
  EditUser: { id: number }
  DetailsUser: { id: number }
}

const Stack = createStackNavigator<StackNavigationRoutes>()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddUser"
          component={AddUser}
          options={{ title: "Criar usuário" }}
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
    </NavigationContainer>
  )
}