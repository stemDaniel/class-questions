import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

export default StyleSheet.create({
    header: {
        paddingTop: Constants.statusBarHeight + 20,
        paddingBottom: 10,
        backgroundColor: '#04d361',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20
    },

    headerText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#13131a'
    },

    hide: {
        display: 'none'
    },

    show: {
        display: 'flex'
    }
})