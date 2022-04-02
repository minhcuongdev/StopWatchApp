import { View,Text, FlatList, StyleSheet } from 'react-native'
import React from 'react'

import Lap from '../lap/Lap'

import { useSelector } from 'react-redux'

const LapList = () => {
    const renderItems = ({item}) => (<Lap id={item.id} time={item.time} />)

    const Laps = useSelector(state => state.stopWatch.laps)

    return (
        <View style={styles.container}>
            <FlatList
                style={{width:'100%'}}
                data={Laps}
                renderItem={renderItems}
                keyExtractor={item => item.id}
      />
        </View>
    )
}

export default LapList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        marginTop: 40,
        paddingHorizontal: 25,
        alignItems:'center',
    }
})