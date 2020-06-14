import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#fafafa'
    },

    container: {
        flex: 1,
        paddingHorizontal: 20
    },

    header: {
        paddingTop: Constants.statusBarHeight + 20,
        paddingBottom: 10,
        backgroundColor: '#04d361',
        justifyContent: 'center',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#13131a'
    },

    questionsList: {
        marginTop: 20,
    },

    question: {
        alignItems: 'flex-start',
    },

    content: {
        fontSize: 20,
        marginBottom: 20
    },

    alternatives: {
        width: '100%'
    }
})