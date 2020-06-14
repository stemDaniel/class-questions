import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },

    header: {
        paddingTop: Constants.statusBarHeight + 20,
        paddingBottom: 10,
        backgroundColor: '#04d361',
        justifyContent: 'center',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#13131a'
    },

    question: {
        marginHorizontal: 25,
        marginVertical: 25
    },

    input: {
        fontSize: 20,
        color: '#13131a',
        marginBottom: 25,
        borderBottomWidth: 2,
        padding: 5,
        borderBottomColor: '#04d361'
    },

    picker: {
        marginBottom: 40
    }
})