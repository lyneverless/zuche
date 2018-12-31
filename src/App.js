import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Main from './main/Main';
import SelectCity from './select-city/SelectCity';


class App extends React.Component {
    constructor(props) {
        super(props);
        console.log('try to get geolocation now');
        navigator.geolocation.watchPosition(({coords}) => {
            localStorage.setItem('geolocation', JSON.stringify(coords));
        }, err => {
            console.error('failed to get geolocation!');
            console.warn(err);
        }, {
            enableHighAccuracy: true
        });
    }

    render() {
        const mains = new Set(['/', '/domestic', '/international', '/sharing', '/special']);
        return (
            <BrowserRouter>
                <Route render={({location: {pathname}}) => {
                    if (mains.has(pathname)) {
                        return <Main/>
                    }
                    if (pathname === '/select_city') {
                        return <SelectCity/>
                    }
                    return <div>30-not match page!</div>
                }}/>
            </BrowserRouter>
        )
    }
}


export default App;