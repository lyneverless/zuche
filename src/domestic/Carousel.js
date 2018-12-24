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
        const url = `url("${this.props.urls[0]}")`;
        return <div className="carousel" style={Object.assign({backgroundImage: url}, this.props.styleP)}></div>
    }
}

const mapStateToProps = state => Object.assign(state.domesticReducer._carouselReducer);

const mapDispatchToProps = dispatch => {
    return {
        needToUpdate: () => dispatch(createAction('SLIDE_CAROUSEL'))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Carousel);