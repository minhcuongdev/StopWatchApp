import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { startPress, lapPress, clearTime } from '../../redux/StopWatchSlice'

const ButtonCustom = ({ title, color, onPressButton }) => {
    return (
        <TouchableHighlight activeOpacity={0.5} underlayColor="#DDDDDD" onPress={() => onPressButton()} style={[styles.button, { borderColor: color }]}>
            <Text style={[styles.title, { color: color }]}>{title}</Text>
        </TouchableHighlight>
    )
}

const ButtonStopWatch = () => {
    const dispatch = useDispatch();
    const isRunning = useSelector(state => state.stopWatch.running)

    const handlePress = () => {
        dispatch(startPress())
    }


    const handleLapPress = () => {
        if (isRunning) {
            dispatch(lapPress())
        } else dispatch(clearTime())
    }

    return (
        <View style={styles.container}>
            <ButtonCustom title='Lap' onPressButton={handleLapPress} />
            <ButtonCustom title={isRunning ? 'Stop' : 'Start'} color={isRunning ? 'red' : 'green'} onPressButton={handlePress} /> 
        </View>
    )
}

export default ButtonStopWatch

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    button: {
        width: 120,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'grey',
        borderRadius: 60,
    },
    title: {
        fontSize: 20
    }
})