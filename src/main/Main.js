import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import LeftNav from '../left-nav/LeftNav';
import TopNav from './top-nav';
import Domestic from '../domestic/Domestic';
import Sharing from '../sharing/Sharing';
import International from '../international/International';
import Special from '../special/Special';
import './main.css';


class Main extends Component {
    render() {
        return (
            <div className="main">
                <LeftNav/>
                <TopNav/>
                <div className="main-content">
                    <Route path="" exact component={Domestic}></Route>
                    <Route path="/domestic" component={Domestic}></Route>
                    <Route path="/sharing" component={Sharing}></Route>
                    <Route path="/international" component={International}></Route>
                    <Route path="/special" component={Special}></Route>
                </div>
            </div>
        );
    }
}


export default Main;
