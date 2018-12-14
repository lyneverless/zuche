import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Navigator from '../left-nav/navigator';
import TopNav from './top-nav';
import Domestic from '../domestic/Domestic';
import Sharing from './Sharing';
import International from './International';
import Special from './Special';
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
                            <Route path="/国内租" component={Domestic}></Route>
                            <Route path="/分时共享" component={Sharing}></Route>
                            <Route path="/全球租" component={International}></Route>
                            <Route path="/专车" component={Special}></Route>
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}


export default App;
