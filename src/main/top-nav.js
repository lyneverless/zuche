import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import createAction from '../redux/actions';
import './top-nav.css';


class TopNav extends Component {
    static items = [{
        cn: '国内租',
        en: 'domestic'
    }, {
        cn: '分时共享',
        en: 'sharing'
    }, {
        cn: '全球租',
        en: 'international'
    }, {
        cn: '专车',
        en: 'special'
    }];

    render() {
        return (
            <header className="top-nav">
                <div className="info">
                    <button className="user" onClick={this.props.userClicked}>&nbsp;</button>
                    <h3 className="title">神州租车</h3>
                </div>
                <nav>
                    <ul className="list">
                        {TopNav.items.map(item =>
                            <li className="item" key={item.en}>
                                <NavLink to={'/' + item.en}>{item.cn}</NavLink>
                            </li>
                        )}
                    </ul>
                </nav>
            </header>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        userClicked: () => dispatch(createAction('SHOW_LEFTNAV'))
    }
};


export default withRouter(connect(undefined, mapDispatchToProps)(TopNav));