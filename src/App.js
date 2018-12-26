import React from 'react';
import Main from './main/Main';
import SelectCity from './select-city/SelectCity';


const App = ({location}) =>
    location.pathname === '/select_city' ? <SelectCity/> : <Main/>;


export default App;