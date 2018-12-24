import React, {Component} from 'react';
import {connect} from 'react-redux';
import createAction from '../redux/actions';
import InForm from './inForm';
import './form.css';


class Form extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <form className="form">
                <InForm direction="from" data={this.props.from} hdClick={this.props.handleClicked}/>
                <InForm direction="to" data={this.props.to} hdClick={this.props.handleClicked}/>
                <button type="submit">立即选车</button>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {
        from: state.domesticReducer._chooseReducer.from,
        to: state.domesticReducer._chooseReducer.to
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleClicked: (direction, key) => {
            dispatch(createAction('RECHOOSE', {direction, key}));
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(Form);