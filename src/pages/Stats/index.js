import React from 'react'
import { useRoute }  from '@react-navigation/native'
import { View, Text, FlatList } from 'react-native'

import Header from '../Header'
import styles from './styles'
import globalStyles from '../global'

export default function Stats(){

    const route = useRoute()
    const questions = route.params

    return (
        <View style={globalStyles.app}>
            <Header arrow={true} route={'Teacher'} />
            <View style={globalStyles.container}>
                <FlatList
                    data={questions}
                    style={styles.questionList}
                    keyExtractor={question => String(question.id)}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item: question }) => (
                        <View style={[globalStyles.cardPanel, styles.question]}>
                            <Text style={styles.questionContent}>{question.content}</Text>
                            <Text style={[styles.questionData, question.correct === 'a' ? styles.questionCorrect : styles.questionWrong]}>
                                a) {question.alternativeA}
                            </Text>
                            <Text style={[styles.questionData, question.correct === 'b' ? styles.questionCorrect : styles.questionWrong]}>
                                b) {question.alternativeB}
                            </Text>
                            <Text style={[styles.questionData, question.correct === 'c' ? styles.questionCorrect : styles.questionWrong]}>
                                c) {question.alternativeC}
                            </Text>
                            <Text style={[styles.questionData, question.correct === 'd' ? styles.questionCorrect : styles.questionWrong]}>
                                d) {question.alternativeD}
                            </Text>
                            <Text style={styles.questionData}>{question.answersNumber} respostas.</Text>
                            <Text style={styles.questionData}>{question.correctsNumber} corretas.</Text>
                            <Text style={styles.questionData}>{question.percentNumber ? question.percentNumber.toFixed(2) : 0}% de acertos.</Text>
                        </View>
                    )}
                />
            </View>
        </View>
    )
}