import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Bio from './bio';
import Menu from './menu';
import './left-nav.css';
import createAction from '../redux/actions';


class LeftNav extends Component {
    render() {
        return (
            <div
                className={`mask ${this.props.show ? 'mask-show' : 'mask-hide'}`}
                onClick={this.props.maskClicked}>
                <div id="nav">
                    <Bio/>
                    <Menu/>
                    <Link className="invite" to="/invite">邀请好友&emsp;得奖励</Link>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        show: state.leftNavReducer.show
    }
};

const mapDispatchToProps = dispatch => {
    return {
        maskClicked: e => {
            if (Array.prototype.includes.call(e.target.classList, 'mask')) {
                dispatch(createAction('HIDE_LEFTNAV'))
            }
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(LeftNav);