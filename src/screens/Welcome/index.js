import React, { Component } from 'react'
import { Text, View } from 'react-native'


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
            <View>
                <Text> WELCOME </Text>
                {
                    /**
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

