import {combineReducers} from 'redux';
import {defaultState} from './storeFormatte';


const leftNavReducer = (state = defaultState.leftNav, action) => {
    switch (action.type) {
        case 'SHOW_LEFTNAV':
            return {
                itemNames: state.itemNames,
                show: true
            };
        case 'HIDE_LEFTNAV':
            return Object.assign({}, state, {show: false});
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
        return {
            urls: state.urls.concat([last]),
            interval: state.interval
        }
    }
    return state;
};

const _chooseReducer = (state = defaultState.domestic.choose, action) => {
    if (action.type === 'RECHOOSE') {
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

const domesticReducer = combineReducers({_carouselReducer, _chooseReducer, _linksReducer});


export default combineReducers({leftNavReducer, topNavReducer, domesticReducer});