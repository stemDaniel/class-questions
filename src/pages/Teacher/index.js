import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'

import Header from '../Header'
import globalStyles from '../global'

import api from '../../services/api'

export default function SwitchUser(){

    const [teacherCode, setTeacherCode] = useState('')
    
    const navigation = useNavigation() 

    async function navigateToStats(){
        await api.post('stats', {teacherCode})
            .then(res => {
                navigation.navigate('Stats', res.data)
            })
            .catch(err => {
                Alert.alert('Erro:', err.response.data,
                    [{ text: 'OK', onPress: () => {} }])
            })
    }

    return (
        <View style={globalStyles.app}>
            <Header arrow={true} route={'SwitchTeacher'} />
            <View style={globalStyles.container}>
                <TextInput onChangeText={teacherCode => setTeacherCode(teacherCode)} value={teacherCode}
                    placeholder="Código de professor" style={globalStyles.codeInput} multiline={true}></TextInput>
                    <TouchableOpacity onPress={navigateToStats} style={[globalStyles.button]}>
                    <Text style={globalStyles.buttonText}>Acessar sala</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}