import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"
import { Home } from "./src/screens/Home"
import { AddUser } from "./src/screens/AddUser"
import { EditUser } from "./src/screens/EditUser"
import { DetailsUser } from "./src/screens/DetailsUser"
import { Users } from "./src/screens/Users"

export type StackNavigationRoutes = {
  Home: undefined
  AddUser: undefined
  EditUser: { id: number }
  DetailsUser: { id: number }
  Users: undefined
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
        <Stack.Screen
          name="Users"
          component={Users}
          options={{ title: "Usuários" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}