import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Feather } from '@expo/vector-icons'
import { View, Text, TouchableOpacity } from 'react-native'

import styles from './styles'

export default function Header(props){

    const navigation = useNavigation()

    function goBack(){
        navigation.navigate(props.route)
    }

    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>Entendeu?</Text>
            <TouchableOpacity onPress={goBack} style={!props.arrow ? styles.hide : styles.show}> 
                <Feather name="arrow-left" size={25} color="#13131a" />
            </TouchableOpacity>
        </View>
    )
}