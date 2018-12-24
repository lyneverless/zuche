import React, {Component} from 'react';
import './inform.css';


class InForm extends Component {
    render() {
        const direction = this.props.direction;
        const handleClick = this.props.hdClick;
        return (
            <div className="inform">
                <div className="city" onClick={handleClick.bind(this, direction, 'city')}>
                    {this.props.data.city}
                </div>
                <div className="location" onClick={handleClick.bind(this, direction, 'location')}>
                    {this.props.data.location}
                </div>
                <div className="way" onClick={handleClick.bind(this, direction, 'way')}>
                    <span className={this.props.data.way === '上门' ? 'active' : ''}>上门</span>
                    <span className={this.props.data.way === '到店' ? 'active' : ''}>到店</span>
                </div>
            </div>
        )
    }
}


export default InForm;