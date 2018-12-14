import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import createAction from '../redux/actions';
import './top-nav.css';


class TopNav extends Component {
    render() {
        return (
            <div className="top-nav">
                <div className="info">
                    <button className="user" onClick={this.props.userClicked}>&nbsp;</button>
                    <h3 className="title">神州租车</h3>
                </div>
                <nav>
                    <ul className="list" onClick={this.props.navClicked}>
                        {this.props.items.map(item => {
                            let className = 'item';
                            if (this.props.active === item) {
                                className += ' active';
                            }
                            return (
                                <li className={className} key={item}><Link to={'/' + item}>{item}</Link></li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        items: state.topNavReducer.itemNames,
        active: state.topNavReducer.active
    }
};

const mapDispatchToProps = dispatch => {
    return {
        userClicked: () => dispatch(createAction('SHOW_LEFTNAV')),
        navClicked: e => {
            const item = e.target.innerText;
            if (item) {
                dispatch(createAction('ROUTE_TOPNAV', item))
            }
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(TopNav);