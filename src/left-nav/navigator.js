import React, {Component} from 'react';
import Bio from './bio';
import Menu from './menu';
import Invite from './invite';
import './navigator.css';


class Navigator extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);////////////////what the fuck
    }

    handleClick(e) {
        if (Array.prototype.includes.call(e.target.classList, 'mask')) {
            this.props.maskClicked();
        }
    }

    render() {
        const className = `mask ${this.props.show ? 'mask-show' : 'mask-hide'}`;
        return (
            <div className={className} onClick={this.handleClick}>
                <div id="nav">
                    <Bio/>
                    <Menu/>
                    <Invite/>
                </div>
            </div>
        )
    }
}

export default Navigator;