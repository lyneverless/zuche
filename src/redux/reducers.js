import {combineReducers} from 'redux';
import moment from 'moment';
import {defaultState} from './storeFormatte';


const leftNavReducer = (state = defaultState.leftNav, action) => {
    switch (action.type) {
        case 'SHOW_LEFTNAV':
            return Object.assign(
                {},
                state,
                {show: true}
            );
        case 'HIDE_LEFTNAV':
            return Object.assign(
                {},
                state,
                {show: false}
            );
        default:
            return state;
    }
};

const topNavReducer = (state = defaultState.topNav, action) => {
    return Object.assign({}, state);
};


const _carouselReducer = (state = defaultState.domestic.carousel, action) => {
    if (action.type === 'SLIDE_CAROUSEL') {
        const last = state.urls.shift();
        return Object.assign(
            {},
            state,
            {urls: state.urls.concat([last])}
        );
    }
    return state;
};

const _chooseReducer = (state = defaultState.domestic.choose, action) => {
    if (action.type === 'REFRESH_TIME') {
        const fromTime = _reduceTime();
        const toTime = moment(fromTime).add(2, 'days').valueOf();
        state.from = Object.assign(
            {},
            state.from,
            {time: fromTime}
        );
        state.to = Object.assign(
            {},
            state.to,
            {time: toTime}
        );
    } else if (action.type === 'RECHOOSE') {
        if (action.key === 'way') {
            const old = Object.assign({}, state[action.direction]);
            const oldWay = old.way;
            old.way = oldWay === '到店' ? '上门' : '到店';
            state[action.direction] = old;//todo   this is fucking dirty
        } else if (action.key === 'city' && action.name) {
            const old = Object.assign({}, state[action.direction]);
            old.city = action.name;
            state[action.direction] = old;
        }
        return state;
    }
    return state;
};

const _linksReducer = (state = defaultState.domestic.links, action) => {
    return state;
};

const _reduceTime = () => {
    //20:25=>20:30
    let now = moment();
    const minutesForNow = now.minutes();
    if (minutesForNow < 30) {
        return now.minutes(30).valueOf();
    }
    return now.minutes(60).valueOf();
};

const domesticReducer = combineReducers({_carouselReducer, _chooseReducer, _linksReducer});


const selectCityReducer = (state = defaultState.selectCity, action) => {
    switch (action.type) {
        case 'REQUEST':
            return Object.assign({}, state, {fetching: true});
        case 'RESPONSE':
            return {
                cities: action.value,
                fetching: false
            };
        case 'ONERROR':
            return state;//todo
        default:
            return state;
    }
};


export default combineReducers({leftNavReducer, topNavReducer, domesticReducer, selectCityReducer});