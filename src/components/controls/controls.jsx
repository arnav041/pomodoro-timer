import React from 'react';
import './controls.scss';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import RefreshIcon from '@material-ui/icons/Refresh';
import { connect } from 'react-redux';
import { togglePlayPause } from '../../redux/action';
import { resetTimer } from '../../redux/action'

const Controls = ({ togglePlayPause, isTimerRunning, resetTimer }) => {
    return (
        <div className="controls_wrap">
            <button onClick={togglePlayPause} > {!isTimerRunning ? <PlayArrowIcon /> : <PauseIcon />} </button>
            <button onClick={resetTimer} ><RefreshIcon /></button>
        </div>
    )
}

const mapStateToProps = state => ({
    isTimerRunning: state.isTimerRunning
})

const mapDispatchToProps = dispatch => ({
    togglePlayPause: () => dispatch(togglePlayPause()),
    resetTimer: () => dispatch(resetTimer())
})

export default connect(mapStateToProps, mapDispatchToProps)(Controls);