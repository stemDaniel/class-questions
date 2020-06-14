import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'

import Header from '../Header'
import globalStyles from '../global'

export default function SwitchUser(){
    
    const navigation = useNavigation()
    
    function navigateToStudent(){
        navigation.navigate('Student')
    }

    function navigateToSwitchTeacher(){
        navigation.navigate('SwitchTeacher')
    }

    return (
        <View style={globalStyles.app}>
            <Header arrow={false} />
            <View style={globalStyles.container}>
                <TouchableOpacity style={globalStyles.button} onPress={navigateToStudent} >
                    <Text style={globalStyles.buttonText}>Sou aluno!</Text>
                </TouchableOpacity>

                <TouchableOpacity style={globalStyles.button} onPress={navigateToSwitchTeacher} >
                    <Text style={globalStyles.buttonText}>Sou professor!</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}