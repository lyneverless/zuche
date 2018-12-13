import React, {Component} from 'react';
import Bio from './bio';
import Menu from './menu';
import Invite from './invite';
import './navigator.css';


class Navigator extends Component {
    constructor(props) {
        super(props);
    }

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

export default Navigator;