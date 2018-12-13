import React, {Component} from 'react';


class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            curIndex: 0,
            timer: 0
        }
    }

    componentDidMount() {
        const interval = this.props.interval;
        const urlCount = this.props.urls.length;
        const slice = interval => {
            this.setState({
                curIndex: (this.state.curIndex + 1) % urlCount,
                timer: setTimeout(slice, interval, interval)
            });
        };
        this.setState({
            timer: setTimeout(slice, interval, interval)
        });
    }

    componentWillUnmount() {
        clearTimeout(this.state.timer);
    }

    render() {
        const url = `url("${this.props.urls[this.state.curIndex]}")`;
        return <div className="carousel" style={Object.assign({backgroundImage: url}, this.props.styleP)}></div>
    }
}


export default Carousel;