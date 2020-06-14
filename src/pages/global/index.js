import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: '#fafafa'
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 25
    },

    button: {
        backgroundColor: '#04d361',
        height: 75,
        width: 225,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 25
    },

    buttonText: {
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold'
    },

    codeInput: {
        fontSize: 30,
        color: '#13131a',
        marginBottom: 25,
        borderBottomWidth: 2,
        padding: 5,
        borderBottomColor: '#04d361',
        textAlign: 'center'
    },

    cardPanel: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 25,
        marginBottom: 25,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#13131a'
    },

    largeButton: {
        backgroundColor: '#04d361',
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginBottom: 25
    },

    largeButtonText: {
        color: '#fff',
        fontSize: 23,
        fontWeight: 'bold'
    },
})