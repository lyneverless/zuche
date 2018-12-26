import React from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import createAction from '../redux/actions';
import './select.css';


class SelectCity extends React.Component {
    componentDidMount() {
        this.props.onRequest();
        axios('/api/cities').then(this.props.onResponse, this.props.onError)
    }

    render() {
        return (
            <div className="cities" onClick={this.props.handleClick}>
                {this.props.cities.map(item =>
                    <Link to='/domestic' className="item" key={item.name}>{item.name}</Link>
                )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        cities: state.selectCityReducer.cities
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onRequest: () => {
            dispatch(createAction('REQUEST'))
        },
        onResponse: response => {
            dispatch({type: 'RESPONSE', value: response.data})
        },
        onError: () => {
            dispatch(createAction('ONERROR'))
        },
        handleClick: e => {
            const text = e.target.innerText;
            if (text) {
                dispatch(createAction('RECHOOSE', {
                    direction: sessionStorage.currentDirection || 'from',
                    key: 'city',
                    name: text
                }))
            }

        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(SelectCity);