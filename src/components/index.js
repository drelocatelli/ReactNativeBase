import React, { Component } from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';

import {Config} from './Config'

export default () => (
    <SafeAreaView>
        <Text style={style.Header}> 
            Bem vindo ao {Config.title}
            <br />
            Author: {Config.author}
            <br />
            Description: {Config.description}
        </Text>
    </SafeAreaView>
)

const style = StyleSheet.create({
 
})