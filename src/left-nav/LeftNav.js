import React, {Component} from 'react';
import {connect} from 'react-redux';
import Bio from './bio';
import Menu from './menu';
import Invite from './invite';
import './left-nav.css';
import createAction from '../redux/actions';


class LeftNav extends Component {
    render() {
        return (
            <div
                className={`mask ${this.props.show ? 'mask-show' : 'mask-hide'}`}
                onClick={e => {
                    if (Array.prototype.includes.call(e.target.classList, 'mask')) {
                        this.props.maskClicked();
                    }
                }}>
                <div id="nav">
                    <Bio/>
                    <Menu/>
                    <Invite/>
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
        maskClicked: () => dispatch(createAction('HIDE_LEFTNAV'))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(LeftNav);