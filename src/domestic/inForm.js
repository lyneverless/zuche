import React, {Component} from 'react';
import './inform.css';


class InForm extends Component {
    render() {
        return (
            <div className="inform">
                <div className="city">{this.props.fuck.city}</div>
                <div className="location">{this.props.fuck.location}</div>
                <div className="way">
                    <span className={this.props.fuck.way === '上门' ? 'active' : ''}>上门</span>
                    <span className={this.props.fuck.way === '到店' ? 'active' : ''}>到店</span>
                </div>
            </div>
        )
    }
}


export default InForm;