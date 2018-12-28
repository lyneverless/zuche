import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import {connect} from 'react-redux';
import createAction from '../redux/actions';
import './inform.css';


class InForm extends Component {
    render() {
        console.log('10-render inform now');
        return (
            <div className="inform" onClick={() => {
                sessionStorage.currentDirection = this.props.direction;
            }}>
                <NavLink to={'/select_city'} className="city">
                    {this.props.city || '我家'}
                </NavLink>
                <div className="location">
                    {this.props.location || '请选择地点'}
                </div>
                <div className="way" onClick={this.props.toggleWay}>
                    <span className={this.props.way === '上门' ? 'active' : ''}>上门</span>
                    <span className={this.props.way === '到店' ? 'active' : ''}>到店</span>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    const s = state.domesticReducer._chooseReducer;
    return {
        city: s[props.direction + '_city'],
        location: s[props.direction + '_location'],
        way: s[props.direction + '_way'],
    }
};

const mapDispatchToProps = (dispatch, props) => {
    return {
        toggleWay: () => dispatch(createAction('RECHOOSE', {direction: props.direction, key: 'way'}))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(InForm);