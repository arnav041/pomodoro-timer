import actionTypes from './action.types'

export const startTimer = (value) => ({
    type: actionTypes.START_TIMER, 
    payload: value
})

export const toggleTimerLabel = (label) => ({
    type: actionTypes.TOGGLE_TIMER_LABEL,
    payload: label
})

export const togglePlayPause = () => ({
    type: actionTypes.TOGGLE_PLAY_PAUSE,
})

export const resetTimer = () => ({
    type: actionTypes.RESET_TIMER
})

