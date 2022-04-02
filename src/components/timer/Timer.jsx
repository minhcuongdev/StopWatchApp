import { View, Text, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { runTime } from '../../redux/StopWatchSlice'

import { displayTime } from '../../Utils/FormatTime'
import { useRef } from 'react'

const Timer = () => {
    const isRunning = useSelector(state => state.stopWatch.running)
    const isReset = useSelector(state => state.stopWatch.isReset)

    const [timeElapsed, setTimeElapsed] = useState(0)
    const intervalId = useRef(null)
    const dispatch = useDispatch()


    const runTiming = () => {
        setTimeElapsed(pre => {
            dispatch(runTime(pre + 1))
            return pre + 1;
        })
    }

    useEffect(() => {
        if (isRunning) {
            const interval = setInterval(runTiming, 10);
            intervalId.current = interval;
        }
        else {
            if(isReset) setTimeElapsed(0)
            clearInterval(intervalId.current)
        }
    }, [isRunning,isReset])

    return (
        <View style={styles.container}>
            <Text style={styles.timer}>{displayTime(timeElapsed)}</Text>
        </View>
    )
}

export default Timer

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '30%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    timer: {
        fontSize: 50
    }
})