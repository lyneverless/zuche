import React, {Component} from 'react';
import {connect} from 'react-redux';
import createAction from '../redux/actions';


class Carousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: undefined
        }
    }

    componentDidMount() {
        const interval = this.props.interval;
        const poll = interval => {
            this.props.needToUpdate();
            this.setState({
                timer: setTimeout(poll, interval, interval)
            });
        };
        this.setState({
            timer: setTimeout(poll, interval, interval)
        });
    }

    componentWillUnmount() {
        clearTimeout(this.state.timer);
    }

    render() {
        return (
            <div
                className="carousel"
                style={Object.assign({backgroundImage: `url("${this.props.imgSrc}")`}, this.props.styleP)}
            >
                <link rel="prefetch" href={this.props.preSrc} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    const s = state.domesticReducer._carouselReducer;
    return {
        interval: s.interval,
        imgSrc: s.urls[0],
        preSrc: s.urls[1]
    }
};

const mapDispatchToProps = dispatch => {
    return {
        needToUpdate: () => dispatch(createAction('SLIDE_CAROUSEL'))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Carousel);