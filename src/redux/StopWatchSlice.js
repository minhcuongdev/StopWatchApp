import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    running: false,
    time: 0,
    isReset: false,
    laps: []
}

export const stopWatchSlice = createSlice({
    name: 'stopWatch',
    initialState,
    reducers: {
        startPress: (state) => {
            state.isReset = false
            state.running = !state.running
        },
        lapPress: (state) => {
            state.laps = [{
                id: state.laps.length + 1,
                time: state.time
            }, ...state.laps]
        },
        runTime: (state, actions) => {
            state.time = actions.payload
        },
        clearTime: (state) => {
            state.isReset = true
            state.time = 0
            state.laps = []
        }
    },
})

// Action creators are generated for each case reducer function
export const { startPress, lapPress, runTime, clearTime } = stopWatchSlice.actions

export default stopWatchSlice.reducer