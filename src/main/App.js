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
    constructor(props) {
        super(props);
        this.state = {
            showLeftNav: false,
            topNav: '国内租'//['国内租', '分时共享', '全球租', '专车']
        };
    }

    handleClicked(name, event) {
        switch (name) {
            case 'user':
                this.setState({
                    showLeftNav: true
                });
                break;
            case 'mask':
                this.setState({
                    showLeftNav: false
                });
                break;
            case 'top-nav':
                const item = event.target.innerText;
                if (item) {
                    this.setState({
                        topNav: item
                    })
                }
                break;
            default:
                console.warn(`${name} unmatched-61`);
                return;
        }
    }

    render() {
        return (
            <div className="App">
                <Navigator show={this.state.showLeftNav} maskClicked={this.handleClicked.bind(this, 'mask')}/>
                <BrowserRouter>
                    <div>
                        <TopNav
                            items={['国内租', '分时共享', '全球租', '专车']}
                            active={this.state.topNav}
                            userClicked={this.handleClicked.bind(this, 'user')}
                            navClicked={this.handleClicked.bind(this, 'top-nav')}
                        />
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
