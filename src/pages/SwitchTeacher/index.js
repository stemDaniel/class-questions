import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'

import Header from '../Header'
import globalStyles from '../global'

export default function SwitchUser(){
    
    const navigation = useNavigation()
    
    function navigateToQuestions(){
        navigation.navigate('Questions')
    }

    function navigateToTeacher(){
        navigation.navigate('Teacher')
    }

    return (
        <View style={globalStyles.app}>
            <Header arrow={true} route={'SwitchUser'} />
            <View style={globalStyles.container}>

                <TouchableOpacity style={globalStyles.button} onPress={navigateToQuestions} >
                    <Text style={globalStyles.buttonText}>Criar sala</Text>
                </TouchableOpacity>

                <TouchableOpacity style={globalStyles.button} onPress={navigateToTeacher} >
                    <Text style={globalStyles.buttonText}>Acessar sala</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}