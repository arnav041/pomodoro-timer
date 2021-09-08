import React from 'react';
import './break.scss';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import actionTypes from '../../redux/action.types';
import { connect } from 'react-redux';


const Break = ({ incrementValue, decrementValue, breakValue, isTimerRunning }) => {

    return (
        <div className="break">
            <span>Break Length</span>
            <div className="buttons" >
                <button
                    type="button"
                    onClick={decrementValue}
                    disabled={isTimerRunning || breakValue <= 1} ><RemoveIcon /></button>

                <p>{breakValue}</p>

                <button
                    type="button"
                    onClick={incrementValue}
                    disabled={isTimerRunning || breakValue >= 59} ><AddIcon /></button>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    isTimerRunning: state.isTimerRunning,
    breakValue: state.breakValue
})

const mapDispatchToProps = (dispatch) => ({
    incrementValue: () => dispatch({ type: actionTypes.INCREASE_BREAK_VALUE }),
    decrementValue: () => dispatch({ type: actionTypes.DECREASE_BREAK_VALUE })
})

export default connect(mapStateToProps, mapDispatchToProps)(Break);