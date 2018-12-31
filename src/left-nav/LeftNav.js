import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {CSSTransition} from 'react-transition-group';
import Bio from './bio';
import Menu from './menu';
import './left-nav.css';
import createAction from '../redux/actions';


class LeftNav extends Component {
    render() {
        return (
            <CSSTransition
                className="mask"
                in={this.props.show}
                timeout={200}
                classNames="mask">
                <div onClick={this.props.maskClicked}>
                    <div id="nav">
                        <Bio/>
                        <Menu/>
                        <Link className="invite" to="/invite">邀请好友&emsp;得奖励</Link>
                    </div>
                </div>
            </CSSTransition>
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
            const className = e.target.className;
            if (className.includes('-enter')) {//enter enter-active enter-done
                dispatch(createAction('HIDE_LEFTNAV'))
            }
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(LeftNav);