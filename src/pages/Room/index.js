import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity } from 'react-native'

import Header from '../Header'
import globalStyles from '../global'
import styles from './styles'

export default function Room(){

    const navigator = useNavigation()
    const route = useRoute()
    const teacherCode = route.params.teacherCode
    const studentCode = route.params.studentCode

    function navigateToSwitchTeacher(){
        navigator.navigate('SwitchTeacher')
    }

    return (
        <View style={globalStyles.app}>
            <Header />
            <View style={globalStyles.container}>
                <View style={globalStyles.cardPanel}>
                    <Text style={styles.codeLabel}>O seu código de acesso é:</Text>
                    <Text style={styles.code}>{teacherCode}</Text>
                </View>
                <View style={globalStyles.cardPanel}>
                    <Text style={styles.codeLabel}>O código de acesso dos seus alunos é:</Text>
                    <Text style={styles.code}>{studentCode}</Text>
                </View>
                <TouchableOpacity style={globalStyles.largeButton} onPress={navigateToSwitchTeacher}>
                    <Text style={globalStyles.largeButtonText}>Ok</Text>
                </TouchableOpacity>
                <Text style={styles.warn}>Dica: salve uma captura de tela!</Text>
            </View>
        </View>
    )
}