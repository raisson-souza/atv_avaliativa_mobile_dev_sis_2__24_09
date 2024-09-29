import { Button, Modal, ScrollView, StyleSheet, Text, View } from "react-native"
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

export type UserInfoToDelete = {
    id: number
    name: string
}

export const Home: React.FC<HomeScreenProps> = ({ route }) => {
    const [ users, setUsers ] = useState<UserOutput[]>([])
    const [ openModal, setOpenModal ] = useState<boolean>(false)
    const [ userInfoToDelete, setUserInfoToDelete ] = useState<UserInfoToDelete | null>(null)

    const navigation = useNavigation<HomeNavigationProp>()

    useEffect(() => {
        const fetchUsers = async () => {
            await Service.ListUsers()
                .then(result => {
                    setUsers(result)
                })
        }
        fetchUsers()
    }, [openModal, route])

    const deleteUser = async (id: number) => {
        const message = await Service.DeleteUser(id)
        window.alert(message)
        setOpenModal(false)
        window.location.reload()
    }

    return (
        <ScreenBase>
            <Modal
                visible={ openModal }
                animationType="fade"
                transparent
                onRequestClose={ () => setOpenModal(false) }
            >
                <View style={ styles.modal }>
                    <Text>Você têm certeza que deseja deletar o usuário { userInfoToDelete?.name ?? "..." }?</Text>
                    {
                        userInfoToDelete
                            ? <>
                                <Button title="Sim" onPress={ () => deleteUser(userInfoToDelete.id) }/>
                                <Button title="Não" onPress={ () => setOpenModal(false) }/>
                            </>
                            : <></>
                    }
                </View>
            </Modal>
            <ScrollView style={ styles.users }>
                {
                    users.length > 0
                        ? (
                            users.map((user, i) => (
                                <UserCard
                                    user={ user }
                                    key={ i }
                                    setOpenModal={ setOpenModal }
                                    openModal
                                    setUserInfoToDelete={ setUserInfoToDelete }
                                />
                            ))
                        )
                        : <>
                            <Text>Nenhum usuário cadastrado</Text>
                        </>
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
    modal: {
        flex: 0,
        justifyContent: "center",
        // alignItems: "center",
        alignContent: "center",
        alignSelf: "center",
        verticalAlign: "bottom",
        gap: 5,
        backgroundColor: "grey",
        width: 200,
        padding: 15
    },
})