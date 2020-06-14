import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

// Pages
import SwitchUser from './pages/SwitchUser'
import SwitchTeacher from './pages/SwitchTeacher'
import Student from './pages/Student'
import Questions from './pages/Questions'
import Teacher from './pages/Teacher'
import Room from './pages/Room'
import Stats from './pages/Stats'
import Answers from './pages/Answers'

export default function Routes(){
    return (
        <NavigationContainer>

            <AppStack.Navigator screenOptions={ {headerShown:false} }>
                <AppStack.Screen name="SwitchUser" component={SwitchUser} />
                <AppStack.Screen name="SwitchTeacher" component={SwitchTeacher} />
                <AppStack.Screen name="Student" component={Student} />
                <AppStack.Screen name="Questions" component={Questions} />
                <AppStack.Screen name="Teacher" component={Teacher} />
                <AppStack.Screen name="Room" component={Room} />
                <AppStack.Screen name="Stats" component={Stats} />
                <AppStack.Screen name="Answers" component={Answers} />
            </AppStack.Navigator>

        </NavigationContainer>
    )
}