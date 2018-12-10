import React, {Component} from 'react';
import './bio.css';


class Bio extends Component {
    render() {
        return (
            <div className="bio">
                <div className="avatar"></div>
                <div className="bio-right">
                    <h4>万向阳</h4>
                    <div>金卡会员</div>
                </div>
            </div>
        )
    }
}

export default Bio;