import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';


const FormatTime = props => {
    console.log('7-render formattime now');
    console.log(props.time);
    return (
        <em className={'time-' + props.direction}>
            {moment(props.time).format('MM月DD日')}<br/>
            <span style={{color: '#999'}}>{moment(props.time).format('周d HH:mm')}</span>
        </em>
    );
};

const mapStateToProps = (state, props) => {
    return {
        time: state.domesticReducer._chooseReducer[props.direction + '_time']
    }
};


export default connect(mapStateToProps)(FormatTime);