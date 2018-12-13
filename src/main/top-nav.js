import React, {Component} from 'react';
import {Link} from 'react-router-dom';
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

export default TopNav;