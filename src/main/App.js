import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navigator from '../left-nav/navigator';
import TopNav from './top-nav';
import Domestic from '../domestic/Domestic';
import Sharing from '../sharing/Sharing';
import International from '../international/International';
import Special from '../special/Special';
import './App.css';


class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigator/>
                <BrowserRouter>
                    <div>
                        <TopNav/>
                        <div className="main-content">
                            <Route path="" exact component={Domestic}></Route>
                            <Route path="/domestic" component={Domestic}></Route>
                            <Route path="/sharing" component={Sharing}></Route>
                            <Route path="/international" component={International}></Route>
                            <Route path="/special" component={Special}></Route>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


export default App;
