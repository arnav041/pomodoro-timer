import React from 'react';
import './session.scss';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import actionTypes from '../../redux/action.types';
import { connect } from 'react-redux';



const Session = ({ incrementValue, decrementValue, sessionValue, isTimerRunning }) => {
    return (
        <div className="session">
            <span>Session Length</span>
            <div className="buttons">
                <button onClick={decrementValue}
                    disabled={isTimerRunning || sessionValue <= 1} ><RemoveIcon /></button>

                <p>{sessionValue}</p>

                <button onClick={incrementValue} 
                disabled={isTimerRunning || sessionValue >= 59} ><AddIcon /></button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isTimerRunning: state.isTimerRunning,
    sessionValue: state.sessionValue
})

const mapDispatchToProps = (dispatch) => ({
    decrementValue: () => dispatch({ type: actionTypes.DECREASE_SESSION_VALUE }),
    incrementValue: () => dispatch({ type: actionTypes.INCREASE_SESSION_VALUE })
})

export default connect(mapStateToProps, mapDispatchToProps)(Session);