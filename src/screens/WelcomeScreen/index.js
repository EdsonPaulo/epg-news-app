import React, { Component } from 'react'
import { Text, View, StatusBar,  } from 'react-native'
import { general } from '../../constants';
import { Actions } from 'react-native-router-flux';

import {Button} from 'react-native-elements';


export default class index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogged: false,
            allowContinue: true,
        };
      } 
    
    render() {
        return (
            
            <View style={general.background}>
               
               
                <Text> WELCOME </Text>
                <Button buttonStyle={{borderRadius: 10, margin: 20, backgroundColor: 'green'}}  onPress={() => { Actions.push('main') }} title='ENTRAR' />
                <Button buttonStyle={{borderRadius: 10, margin: 20, borderColor:'green', borderWidth: 2, backgroundColor: 'transparent'}}  title='ENTRAR' />
                {
                    /*
                    (this.state.isLogged == false && this.state.allowContinue) ? (
                        <>
                        <Stack.Screen name="SignIn" component={SignInScreen} />
                        <Stack.Screen name="SignUp" component={SignUpScreen} />
                        <Stack.Screen name="ResetPassword" component={ResetPassword} />
                        </>
                        ) : (
                        <>
                        <Stack.Screen name="Home" component={HomeScreen} />
                        <Stack.Screen name="Profile" component={ProfileScreen} />
                        </>
                    );
                     */
                }
            </View>
        )
    }
}

