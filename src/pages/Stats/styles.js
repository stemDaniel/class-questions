import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    questionList: {
        width: '100%'
    },

    question: {
        alignItems: 'flex-start'
    },

    questionContent: {
        fontSize: 20,
        color: '#13131a',
        fontWeight: 'bold'
    },

    questionCorrect: {
        color: '#04d361'
    },

    questionWrong: {
        color: '#f44336'
    },

    questionData: {
        color: '#13131a',
        fontSize: 20,
        marginTop: 5,
    }
})