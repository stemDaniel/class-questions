import React, { useState, useEffect } from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TouchableOpacity, FlatList, Picker, Alert } from 'react-native'

import globalStyles from '../global'
import styles from './styles'

import api from '../../services/api'

export default function SwitchUser(){

    const [answers, setAnswers] = useState({})

    const navigation = useNavigation()
    const route = useRoute()
    const questions = route.params

    function sendAnswers(){
        const questionsNumber = Object.entries(answers).length
        let count = 0
        Object.entries(answers).forEach(async (answer, index) => {
            await api.post('answer', { questionId: answer[0], alternative: answer[1] })
                .then(res => {
                    ++count
                    if(count === questionsNumber){
                        Alert.alert(
                            'Resposta enviada com sucesso!',
                            '',
                            [
                                { text: 'OK', onPress: () => {} }
                            ],
                        )
                        navigation.navigate('SwitchUser')
                    }
                })
                .catch(err => {
                    Alert.alert(
                        'Erro:',
                        `Questão ${index+1}: ${err.response.data}`,
                        [
                            { text: 'OK', onPress: () => {} }
                        ],
                    )
                })
        })        
    }

    function changeAnswer(alternative, questionId){
        const answersArray = {...answers}
        answersArray[questionId] = alternative
        setAnswers(answersArray)
    }

    useEffect(()=>{
        const answersArray = {}
        questions.forEach(question => {
            answersArray[question.id] = null
        })
        setAnswers({...answersArray})
    },[])

    return (
        <View style={styles.app}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Responda às questões</Text>
            </View>
            <View style={styles.container}>
                <FlatList
                    data={questions}
                    style={styles.questionsList}
                    keyExtractor={question => String(question.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: question }) => (
                        <View style={[globalStyles.cardPanel, styles.question]}>
                            <Text style={styles.content}>{question.content}</Text>
                            <Picker
                                selectedValue={answers[question.id]}
                                style={styles.alternatives}
                                mode="dropdown"
                                onValueChange={(itemValue, itemIndex) => changeAnswer(itemValue, question.id)}
                            >
                                <Picker.Item label="Sua resposta" value={null} />
                                <Picker.Item label={question.alternativeA} value="a" />
                                <Picker.Item label={question.alternativeB} value="b" />
                                <Picker.Item label={question.alternativeC} value="c" />
                                <Picker.Item label={question.alternativeD} value="d" />
                            </Picker>
                        </View>
                    )}
                />
                <TouchableOpacity style={globalStyles.largeButton} onPress={sendAnswers}>
                    <Text style={globalStyles.largeButtonText}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}