import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

import {Config} from './Config'

export default () => (
    <SafeAreaView style={style.App}>
        <Text> 
            Bem vindo ao {Config.title}
            {'\n'}
            Author: {Config.author}
            {'\n'}
            Description: {Config.description}
        </Text>
    </SafeAreaView>
)

const style = StyleSheet.create({
    App: {
        backgroundColor: '#ccc',
        padding: '20px',
    },
})
