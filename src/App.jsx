import React, { useEffect, useRef } from 'react';
import './App.scss';
import Break from './components/break/break';
import Controls from './components/controls/controls';
import Session from './components/session/session';
import { connect } from 'react-redux';
import { startTimer } from './redux/action'
import { resetTimer } from './redux/action'
import { toggleTimerLabel } from './redux/action'

const App = (props) => {

    const { timerValue, startTimer, isTimerRunning, breakValue, sessionValue, timerLabel, toggleTimerLabel } = props;
    const timeUpSound = "https://www.soundjay.com/misc/bell-ringing-05.mp3";
    const audioRef = useRef();

    const Clockified = () => {
        let minutes = Math.floor(timerValue / 60);
        let seconds = timerValue - (minutes * 60);

        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        return `${minutes}:${seconds}`
    }

    const clockifiedValue = Clockified();
    
    const handleCount = () => {
        startTimer(timerValue - 1);

        if (timerValue <= 0) {
            audioRef.current.play();

            if (timerLabel === 'Session') {
                toggleTimerLabel('Break')
                startTimer((breakValue * 60) - 1)
            } else {
                toggleTimerLabel('Session')
                startTimer((sessionValue * 60) - 1)
            }
        };

    }

    useEffect(() => {
        if (isTimerRunning) {
            let timeInterval = setInterval(() => {
                handleCount();
            }, 1000);

            return () => clearInterval(timeInterval)
        }
    })

    return (
        <div className="timer" >
            <h2 className="timer_label">{timerLabel}</h2>
            <h1 className="timer_value time" >{clockifiedValue}</h1>
            <Controls />
            <div className="timer_controllers" >
                <Break />
                <Session />
            </div>
            <audio src={timeUpSound} ref={audioRef} />
        </div>
    )
}

const mapStateToProps = ({ isTimerRunning, timerValue, breakValue, sessionValue, timerLabel }) => ({
    isTimerRunning,
    timerValue,
    breakValue,
    sessionValue,
    timerLabel
})

const mapDispatchToProps = dispatch => ({
    startTimer: (value) => dispatch(startTimer(value)),
    toggleTimerLabel: (label) => dispatch(toggleTimerLabel(label)),
    resetTimer: () => dispatch(resetTimer()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);