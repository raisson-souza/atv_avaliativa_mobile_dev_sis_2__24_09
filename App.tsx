import "react-native-gesture-handler"
import { AuthProvider } from "./src/context/auth"
import { NavigationContainer } from "@react-navigation/native"
import { StatusBar } from "react-native"
import React from "react"
import Routes from "./src/routes"

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#F0F4FF" barStyle="dark-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}