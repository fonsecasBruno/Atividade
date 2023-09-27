import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, Avatar, IconButton } from 'react-native-paper'

import Api from '../../../services/Api'
import { FlatList } from 'react-native-gesture-handler'

export default function Home(props) {

    const navigation = props.navigation

    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {

        Api.get('/users')

            .then(response => {
                
                console.log(response.data.users)

                setUsuarios(response.data.users)

            })
            .catch(error => {
                console.error('DEU ERRO AO BUSCAR USUARIOS')
            })

    }, [])

  return (
    <View>
      
        <FlatList
        
            data={usuarios}

            renderItem={({ item }) => {
                return (  
                <Card onPress={ () => {
                    navigation.navigate('Usuario', {id: item. id})}}>
                    <Card.Title
                        left={() => <Avatar.Image size={48} source={{uri: item.image}}/>}
                        right={() => <IconButton icon="chevron-right"/>}
                        title={item.username}
                        subtitle={item.email}
                    />
                </Card>
                )
            }}
        
        />

    </View>
  )
}

const styles = StyleSheet.create({})