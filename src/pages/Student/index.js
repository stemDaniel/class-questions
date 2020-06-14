import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'

import Header from '../Header'
import globalStyles from '../global'

import api from '../../services/api'

export default function SwitchUser(){

    const [studentCode, setStudentCode] = useState('')
    
    const navigation = useNavigation() 

    async function navigateToAnswers(){
        await api.post('enjoy', {studentCode})
            .then(res => {
                navigation.navigate('Answers', res.data)
            })
            .catch(err => {
                Alert.alert('Erro:', err.response.data,
                    [{ text: 'OK', onPress: () => {} }])
            })
    }

    return (
        <View style={globalStyles.app}>
            <Header arrow={true} route={'SwitchUser'} />
            <View style={globalStyles.container}>
                <TextInput onChangeText={studentCode => setStudentCode(studentCode)} value={studentCode}
                    placeholder="Código de aluno" style={globalStyles.codeInput} multiline={true}></TextInput>
                    <TouchableOpacity onPress={navigateToAnswers} style={[globalStyles.button]}>
                    <Text style={globalStyles.buttonText}>Acessar sala</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}