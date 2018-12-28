import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import createAction from '../redux/actions';
import InForm from './inForm';
import FormatTime from './FormatTime';
import './form.css';


class Form extends Component {
    render() {
        console.log('12-form render now');
        return (
            <form className="form">
                <p className={'warning ' + (this.props.showWarning ? 'warning-show' : 'warning-hide')}>{this.props.warningText}</p>
                <InForm direction="from"/>
                <InForm direction="to"/>
                <div className="time">
                    <FormatTime direction="from"/>
                    <span className="time-duration">{this.props.duration + 'd'}</span>
                    <FormatTime direction="to"/>
                </div>
                <button type="submit">立即选车</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    const s = state.domesticReducer._chooseReducer;
    const showWarning = s.from_way === '上门' || s.to_way === '上门';
    return {
        warningText: s.warningText,
        showWarning: showWarning,
        duration: moment.duration(s.to_time - s.from_time).as('days')
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