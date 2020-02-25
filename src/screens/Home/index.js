import React, { Component } from 'react'
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

import styles from './styles'
import { StatusBar } from 'react-native';

export default class index extends Component {
    render() {
        return (
            <Container style={{paddingTop: StatusBar.currentHeight}}>
            
            </Container>
        )
    }
}

