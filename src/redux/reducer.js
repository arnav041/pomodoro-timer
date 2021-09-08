import actionTypes from "./action.types";

export const initialState = {
    timerValue: 1500,
    timerLabel: 'Session',
    sessionValue: 25,
    breakValue: 5,
    isTimerRunning: false,
};


const reducer = (state = initialState, action) => {
    const { isTimerRunning, breakValue, sessionValue } = state;

    switch (action.type) {
        case actionTypes.START_TIMER:
            return {
                ...state,
                timerValue: action.payload
            }

        case actionTypes.TOGGLE_PLAY_PAUSE:
            return {
                ...state,
                isTimerRunning: !isTimerRunning
            }

        case actionTypes.INCREASE_BREAK_VALUE:
            return {
                ...state,
                breakValue: breakValue + 1
            }

        case actionTypes.DECREASE_BREAK_VALUE:
            return {
                ...state,
                breakValue: breakValue - 1
            }

        case actionTypes.INCREASE_SESSION_VALUE:
            return {
                ...state,
                sessionValue: sessionValue + 1,
                timerValue: (sessionValue + 1) * 60
            }

        case actionTypes.DECREASE_SESSION_VALUE:
            return {
                ...state,
                sessionValue: sessionValue - 1,
                timerValue: (sessionValue - 1) * 60
            }

        case actionTypes.TOGGLE_TIMER_LABEL:
            return {
                ...state,
                timerLabel: action.payload
            }

        case actionTypes.RESET_TIMER:
            return initialState;

        default:
            return state;
    }
}

export default reducer;