import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';


export class TimerComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            seconds: this.props.seconds - 1,
            repetitions: this.props.repetitions,
            finishedHandle: this.props.onFinished,
            
        }
    }

    countdown = () => {
        if (this.state.seconds == 0) {
            this.setState({ seconds: this.props.seconds })
            if (this.state.repetitions > 0) {
                this.setState({repetitions: this.state.repetitions - 1})
                this.state.finishedHandle()
            }
        }
        this.setState({ seconds: this.state.seconds - 1 })
    }

    componentDidMount() {
        setInterval(this.countdown, 1000)
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