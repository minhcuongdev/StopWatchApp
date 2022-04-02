import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import { displayTime } from '../../Utils/FormatTime'

const Lap = ({ id, time }) => {
    return (
        <View style={styles.container}>
            <Text >Lap #{id}</Text>
            <Text>{displayTime(time)}</Text>
        </View>
    )
}

export default Lap

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#DDDDDD',
        height: 50,
        marginBottom: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
    }
})