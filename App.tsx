import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"


type StackNavigationRoutes = {
  Home: undefined
  AddUser: undefined
  EditUser: { id: number }
  DetailsUser: { id: number }
  Users: undefined
}

const Stack = createStackNavigator<StackNavigationRoutes>()

const MockComponent = () => {
  return <View><Text>Home</Text></View>
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={MockComponent}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AddUser"
          component={MockComponent}
          options={{ title: "Detalhes do usuário" }}
        />
        <Stack.Screen
          name="EditUser"
          component={MockComponent}
          options={{ title: "Editar usuário" }}
        />
        <Stack.Screen
          name="DetailsUser"
          component={MockComponent}
          options={{ title: "Usuário" }}
        />
        <Stack.Screen
          name="Users"
          component={MockComponent}
          options={{ title: "Usuários" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "red",
  },
});