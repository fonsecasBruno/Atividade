import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Card, IconButton } from 'react-native-paper'

export default function Usuario(props) {

    const {usuario, setUsuario} = useState([])
    const usuarioId = props.route.params.id

    console.log(props)

    useEffect(() => {
        
        Api.get('/users/' + usuarioId)
        .then(response => {

            setUsuario(response.data)

        })

        .catch(error => {
            console.error('DEU ERRO AO BUSCAR USUARIOS', error)
        })

    })

  return (
    <View>
      <Card onPress={() => {
        navigation.navigate('Post', usuario)
      }}>

        title={usuario?.username}
        subtitle={usuario?.email}
        left={() => <Avatar.Image size={48} source={{uri: item.image}}/>}
        right={()=> <IconButton icon='chevron-right'/>}

      </Card>
        <Card.Cover source={{uri: usuario?.image}}/>
        <Card.Content>
            <View>
                <Text variant='titleLarge'>Name</Text>
                <Text variant='titleLarge'>{usuario?.firstname}{usuario?.lastname}</Text>
            </View>
        </Card.Content>

    </View>
  )
}

const styles = StyleSheet.create({})