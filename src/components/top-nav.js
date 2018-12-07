import React, {Component} from 'react';
import './top-nav.css';


class TopNav extends Component {
    constructor(props) {
        super(props);
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem(name) {
        const className = `item${this.props.active === name ? ' active' : ''}`;
        return (
            <li className={className} key={name}><a>{name}</a></li>
        )
    }


    render() {
        return (
            <div className="top-nav">
                <div className="info">
                    <button className="user" onClick={this.props.userClicked}>&nbsp;</button>
                    <h3 className="title">神州租车</h3>
                </div>
                <ul className="list" onClick={this.props.navClicked}>
                    {this.renderItem('国内租')}
                    {this.renderItem('分时共享')}
                    {this.renderItem('全球租')}
                    {this.renderItem('专车')}
                </ul>
            </div>
        )
    }
}

export default TopNav;