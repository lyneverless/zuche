import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import App from "./App";


const Index = () => <h2>home</h2>;
const About = () => <h2>about</h2>;
const Users = () => <h2>users</h2>;

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <nav>
                <ul>
                    <li><Link to="/"> home</Link></li>
                    <li><Link to="/about/">about</Link></li>
                    <li><Link to="/users/">users</Link></li>
                </ul>
            </nav>
            <Route path="/" exact component={Index}></Route>
            <Route path="/about/" component={About}></Route>
            <Route path="/users/" component={Users}></Route>
        </div>
    </BrowserRouter>
);

export default AppRouter;