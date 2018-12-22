import React, {Component} from 'react';
import {connect} from 'react-redux';
import Carousel from './Carousel';
import Form from './form';
import './Domestic.css';


class Domestic extends Component {
    render() {
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
        links: state.domesticReducer.links
    }
};


export default connect(mapStateToProps)(Domestic);