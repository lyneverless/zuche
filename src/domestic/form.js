import React, {Component} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import moment from 'moment';
import createAction from '../redux/actions';
import InForm from './inForm';
import './form.css';


const FormatTime = ({time, className}) =>
    <em className={className}>
        {time.format('MM月DD日')}<br/>
        <span style={{color: '#999'}}>{time.format('周d HH:mm')}</span>
    </em>;

class Form extends Component {
    componentWillMount() {
        console.log('fetch cities now');
        axios('/api').then(response => {
            console.log(response);
        })
    }

    render() {
        const showWarning = this.props.from.way === '上门' || this.props.to.way === '上门';
        const [from, to] = [moment(this.props.from.time), moment(this.props.to.time)];
        return (
            <form className="form">
                <p className={'warning ' + (showWarning ? 'warning-show' : 'warning-hide')}>{this.props.warningText}</p>
                <InForm direction="from" data={this.props.from} hdClick={this.props.handleClicked}/>
                <InForm direction="to" data={this.props.to} hdClick={this.props.handleClicked}/>
                <div className="time">
                    <FormatTime className="time-from" time={from}/>
                    <span className="time-duration">{to.diff(from, 'days') + '天'}</span>
                    <FormatTime className="time-to" time={to}/>
                </div>
                <button type="submit">立即选车</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        warningText: state.domesticReducer._chooseReducer.warningText,
        from: state.domesticReducer._chooseReducer.from,
        to: state.domesticReducer._chooseReducer.to
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleClicked: (direction, key) => {
            dispatch(createAction('RECHOOSE', {direction, key}));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Form);