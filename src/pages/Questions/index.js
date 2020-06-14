import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { View, Text, TextInput, Picker, TouchableOpacity, ScrollView, Alert } from 'react-native'

import globalStyles from '../global'
import styles from './styles'

import api from '../../services/api'

export default function SwitchUser(){

    const [questions, setQuestions] = useState([])
    const [content, setContent] = useState('')
    const [alternativeA, setAlternativeA] = useState('')
    const [alternativeB, setAlternativeB] = useState('')
    const [alternativeC, setAlternativeC] = useState('')
    const [alternativeD, setAlternativeD] = useState('')
    const [correct, setCorrect] = useState(false);

    const navigation = useNavigation()

    async function createRoom(){

        if(questions.length > 0){

            const room = await api.post('/room')

            if(room){
                questions.forEach(async question => {
                    await api.post('/question', {
                        roomId: room.data.roomId,
                        ...question
                    })
                })
                navigation.navigate('SwitchUser')
                navigation.navigate('Room', {
                    teacherCode: room.data.teacherCode,
                    studentCode: room.data.studentCode
                })
            }
        }
        setQuestions([])
        setContent('')
        setAlternativeA('')
        setAlternativeB('')
        setAlternativeC('')
        setAlternativeD('')
        setCorrect(false)
    }

    async function createQuestion(){
        const questionsArray = [...questions]

        if
        (
            content &&
            alternativeA &&
            alternativeB &&
            alternativeC &&
            alternativeD &&
            correct
        )
        {
            questionsArray.push({
                content,
                alternativeA,
                alternativeB,
                alternativeC,
                alternativeD,
                correct
            })
            Alert.alert('Questão criada com sucesso!', '',
                    [{ text: 'OK', onPress: () => {} }])
            setQuestions(questionsArray)
            setContent('')
            setAlternativeA('')
            setAlternativeB('')
            setAlternativeC('')
            setAlternativeD('')
            setCorrect(false)
        }else{
            Alert.alert('Erro:', 'Preencha todos os campos!',
                    [{ text: 'OK', onPress: () => {} }])
        }
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Crie suas questões</Text>
            </View>
            
            <View style={styles.question}>
                <TextInput onChangeText={content => setContent(content)} value={content}
                 placeholder="Questão" style={styles.input} multiline={true}></TextInput>
                <TextInput onChangeText={alternativeA => setAlternativeA(alternativeA)} value={alternativeA}
                 placeholder="Alternativa a" style={styles.input}></TextInput>
                <TextInput onChangeText={alternativeB => setAlternativeB(alternativeB)} value={alternativeB}
                 placeholder="Alternativa b" style={styles.input}></TextInput>
                <TextInput onChangeText={alternativeC => setAlternativeC(alternativeC)} value={alternativeC}
                 placeholder="Alternativa c" style={styles.input}></TextInput>
                <TextInput onChangeText={alternativeD => setAlternativeD(alternativeD)} value={alternativeD}
                 placeholder="Alternativa d" style={styles.input}></TextInput>
            
                <Picker
                    selectedValue={correct}
                    style={styles.picker}
                    mode="dropdown"
                    onValueChange={(itemValue, itemIndex) => setCorrect(itemValue)}
                >
                    <Picker.Item label="Alternativa correta" value={false} />
                    <Picker.Item label="Alternativa a" value="a" />
                    <Picker.Item label="Alternativa b" value="b" />
                    <Picker.Item label="Alternativa c" value="c" />
                    <Picker.Item label="Alternativa d" value="d" />
                </Picker>
                
                <TouchableOpacity onPress={() => createQuestion()} style={globalStyles.largeButton}>
                    <Text style={globalStyles.largeButtonText}>Criar questão</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => createRoom()} style={[globalStyles.largeButton, {backgroundColor: '#13131a'}]}>
                    <Text style={globalStyles.largeButtonText}>Finalizar questionário</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}