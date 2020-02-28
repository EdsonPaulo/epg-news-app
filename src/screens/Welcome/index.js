import React, { Component } from 'react'
import { Text, View, StatusBar, Button } from 'react-native'
import { general } from '../../constants';
import { Actions } from 'react-native-router-flux';


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
                <Button color={'red'} onPress={() => {
                    Actions.push('home')
                }} title='IR PARA A HOME' />
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

