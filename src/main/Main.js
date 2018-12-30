import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import Loadable from 'react-loadable';
import LeftNav from '../left-nav/LeftNav';
import TopNav from './top-nav';
import Domestic from '../domestic/Domestic';
import Loading from '../otherComponents/Loading';
import './main.css';


const LazySharing = Loadable({
    loader: () => import('../sharing/Sharing'),
    loading: Loading
});
const LazyInternational = Loadable({
    loader: () => import('../international/International'),
    loading: Loading
});
const LazySpecial = Loadable({
    loader: () => import('../special/Special'),
    loading: Loading
});

class Main extends Component {
    render() {
        return (
            <div className="main">
                <LeftNav/>
                <TopNav/>
                <div className="main-content">
                    <Switch>
                        <Redirect exact from="" to="/domestic"/>
                        <Route path="/domestic" component={Domestic}/>
                    </Switch>
                    <Route path="/sharing" component={LazySharing}/>
                    <Route path="/international" component={LazyInternational}/>
                    <Route path="/special" component={LazySpecial}/>
                </div>
            </div>
        );
    }
}


export default Main;
