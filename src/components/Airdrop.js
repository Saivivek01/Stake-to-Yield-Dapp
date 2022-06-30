import React, {Component} from "react";


class Airdrop extends Component {
    // Airdrop to have a timer that counts down
    // initialize the countdown after our customers have staked a certain amount.. 50
    // timer functionality, countdown, startTimer, state - for time to work..

    constructor() {
        super()
        this.state = {time: {}, seconds: 30}
        this.timer = 0
        //this.startTime = this.startTime.bind(this);
        this.countDown = this.countDown.bind(this);
    }
    
    startTimer() {
        if(this.timer === 0 && this.state.seconds > 0) {
            this.timer = setInterval(this.countDown, 1000)
        }
    }

    countDown() {
        // countdown 1 sec at a time
        let seconds = this.state.seconds - 1
        this.setState({
            time: this.secondsToTime(seconds),
            seconds: seconds
        })

        //stop when reaches 0
        if(seconds === 0) {
            clearInterval(this.timer)
        }
    }

    secondsToTime(secs) {
        let hours, seconds, minutes
        hours = Math.floor(secs / (60*60))

        let divisor_for_minutes = secs % (60*60)
        minutes = Math.floor(divisor_for_minutes/60)

        seconds = secs - (hours*60*60 + minutes*60)

        let obj = {
            'h': hours,
            'm': minutes,
            's': seconds
        }
        return obj
    }

    componentDidMount() {
        let timeLeftVar = this.secondsToTime(this.state.seconds)
        this.setState({time: timeLeftVar})
    }

    airDropRealeaseTokens() {
        let stakingB = this.props.stakingBalance
        if(stakingB >= '50000000000000000000') {
            this.startTimer()
        }
    }

    render() {
        this.airDropRealeaseTokens()
        return(
            <div style={{color:'white'}}>{this.state.time.m}:{this.state.time.s}
            {this.startTimer()}

            </div>
        )
    }
}

export default Airdrop;