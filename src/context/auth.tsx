import { Alert } from "react-native"
import { useNavigation, NavigationProp } from "@react-navigation/native"
import { UserInput } from "../types/user"
import AsyncStorage from "@react-native-async-storage/async-storage"
import React, { createContext, useState, useEffect, ReactNode } from "react"
import Service from "../services/Service"

// Tipos para os dados do usuário e o contexto
interface User {
    email: string;
}

interface AuthContextData {
    signed: boolean
    user: User | null
    signIn: (email: string, password: string) => Promise<void>
    signOut: () => void
    signUp: (userModel: UserInput) => Promise<void>
    loadingAuth: boolean
    loading: boolean
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

interface AuthProviderProps {
    children: ReactNode
}

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [ user, setUser ] = useState<User | null>(null)
    const [ loadingAuth, setLoadingAuth ] = useState(false)
    const [ loading, setLoading ] = useState(true)

    const navigation = useNavigation<NavigationProp<any>>()

    useEffect(() => {
        async function loadStorage() {
            const storageUser = await AsyncStorage.getItem("@authToken")
            const storedUserString = await AsyncStorage.getItem("@user")

            if (storageUser && storedUserString) {
                setUser(JSON.parse(storedUserString))
                setLoading(false)
            } else {
                setLoading(false)
            }
        }

        setLoading(true)
        loadStorage()
    }, [])

    async function signIn(email: string, password: string) {
        setLoadingAuth(true)
        try {
            const { token } = await Service.Login(email, password)
            const user = { email }

            await AsyncStorage.setItem("@authToken", token)
            await AsyncStorage.setItem("@user", JSON.stringify(user))
            setUser(user)

            setLoadingAuth(false)
        } catch (err) {
            Alert.alert("E-mail ou senha incorretos!")
            setLoadingAuth(false)
        }
    }

    async function signUp(userModel: UserInput) {
        setLoadingAuth(true)
        try {
            await Service.AddUser(userModel)
            Alert.alert("Usuário registrado com sucesso!")
            setLoadingAuth(false)
            navigation.navigate("SignIn")
        } catch (err) {
            Alert.alert("Erro ao registrar o usuário!")
            setLoadingAuth(false)
        }
    }

    async function signOut() {
        await AsyncStorage.clear().then(() => {
            setUser(null)
            navigation.navigate("SignIn")
        })
    }

    return (
        <AuthContext.Provider
            value={{
                signed: !!user,
                user,
                signIn,
                signOut,
                signUp,
                loadingAuth,
                loading,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProvider }
