import React, {Component} from 'react';
import {connect} from 'react-redux';
import Carousel from './Carousel';
import Form from './form';
import createAction from '../redux/actions';
import './Domestic.css';


class Domestic extends Component {
    constructor(props) {
        super(props);
        this.props.refreshTime();
    }

    render() {
        console.log('16-domestic render now');
        return (
            <div>
                <Carousel
                    styleP={{height: '7rem', backgroundSize: '100% 100%'}}>
                </Carousel>
                <Form>
                </Form>
                <nav>
                    <ul className="navs">
                        {this.props.links.map(item => <li key={item}>{item}</li>)}
                    </ul>
                </nav>
                <div className="recommend">
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        links: state.domesticReducer._linksReducer
    }
};

const mapDispatchToProps = function (dispatch) {
    return {
        refreshTime: () => dispatch(createAction('REFRESH_TIME'))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Domestic);