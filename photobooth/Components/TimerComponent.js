import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';


export class TimerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: this.props.seconds,
            repetitions: this.props.repetitions,
            finishedHandle: this.props.onFinished,
            countdownHandle: this.props.onCountdown
        }
    }

    countdown = () => {
        if (this.state.seconds == 1) {
            this.setState({ seconds: this.props.seconds})
            this.state.countdownHandle()
        }
        else
        this.setState({ seconds: this.state.seconds - 1 })
    }

    componentDidMount() {
        let countdowns = this.state.repetitions * this.state.seconds
        for(let i = 1; i <= countdowns; i++){
            setTimeout(this.countdown, 1000 * i)
        }
        setTimeout(this.props.onFinished, 1000 * (countdowns + 1))
    }

    componentWillUnmount() {
        clearInterval(this.countdown)
    }

    render() {
        return (
            <View style={styles.counter}>
                <Text style={styles.counterText}>{this.state.seconds}</Text>
            </View>
        );
    }
}
export default TimerComponent;

const styles = StyleSheet.create( {
    counter: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        alignItems: 'center',
        width: '100%',
        opacity: 0.8,
    },
    counterText: {
        fontSize: 100,
        color: 'white',
        
    },
});