import React, {Component} from "react";
// import './invite.css';

class Invite extends Component {
    render() {
        const style = {textAlign: 'center'}
        return (
            <a className="invite" href="javascript:void(0)" style={style}>邀请好友&emsp;得奖励</a>
        )
    }
}

export default Invite;