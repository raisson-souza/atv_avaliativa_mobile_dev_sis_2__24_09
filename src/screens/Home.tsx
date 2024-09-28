import { Button, ScrollView, StyleSheet } from "react-native"
import { RouteProp } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { StackNavigationRoutes } from "../../App"
import { useNavigation } from "@react-navigation/native"
import { UserOutput } from "../types/user"
import React, { useEffect, useState } from "react"
import ScreenBase from "../components/ScreenBase"
import Service from "../services/Service"
import UserCard from "../components/UserCard"

type HomeScreenRouteProp = RouteProp<StackNavigationRoutes, "Home">

type HomeScreenProps = {
    route: HomeScreenRouteProp
}

export type HomeNavigationProp = StackNavigationProp<StackNavigationRoutes, "Home">

export const Home: React.FC<HomeScreenProps> = ({ route }) => {
    const [ users, setUsers ] = useState<UserOutput[]>([])
    const navigation = useNavigation<HomeNavigationProp>()

    useEffect(() => {
        const fetchUsers = async () => {
            await Service.ListUsers()
                .then(result => {
                    setUsers(result)
                })
        }
        fetchUsers()
    }, [])

    return (
        <ScreenBase>
            <ScrollView style={ styles.users }>
                {
                    users.map((user, i) => (
                        <UserCard
                            user={ user }
                            key={ i }
                        />
                    ))
                }
            </ScrollView>
            <Button title="Criar usuário" onPress={() => navigation.navigate("AddUser")}></Button>
        </ScreenBase>
    )
}

const styles = StyleSheet.create({
    users: {
        paddingTop: 50,
        alignSelf: "stretch",
    },
})