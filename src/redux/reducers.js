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


export default combineReducers({leftNavReducer, topNavReducer, domesticReducer});