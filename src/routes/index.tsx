import { AuthContext } from "../context/auth"
import { View, ActivityIndicator } from "react-native"
import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"
import React, { useContext } from "react"

function Routes() {
    const { signed, loading } = useContext(AuthContext)

    if (loading) {
        return (
        <View
            style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#F0F4FF",
            }}
        >
            <ActivityIndicator size="large" color="#131313" />
        </View>
        )
    }

    return signed ? <AppRoutes /> : <AuthRoutes />
}

export default Routes
