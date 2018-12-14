import {combineReducers} from 'redux';
import chunjie from '../assets/750-410-chunjie-20181210-WAP.jpg';
import mian2 from '../assets/750-410-mian2-20180824-WAP.jpg';
import YX from '../assets/750-410-YX-20180821-WAP.jpg';
import zu3mian1 from '../assets/750-410-zu3mian1-181019-wap.jpg';
import guojizuche from '../assets/750x410-guojizuche-180201-app-wap.jpg';
import shouri0 from '../assets/750-410-shouri0-181108-wap.jpg';
import xifen from '../assets/750-410-xifen-20180629-WAP.jpg';
import YZTH from '../assets/750x410-YZTH-20181116-wap.jpg';


const leftNavReducer = (state = {
    itemNames: ['钱包', '行程', '发票', '违章', '设置', '客服'],
    show: false
}, action) => {
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

const topNavReducer = (state = {
    itemNames: ['国内租', '分时共享', '全球租', '专车'],
    active: '国内租'
}, action) => {
    if (action.type === 'ROUTE_TOPNAV') {
        return {
            itemNames: state.itemNames,
            active: action.value
        }
    }
    return state;
};

const domesticReducer = (state = {
    carousel: {
        urls: [chunjie, mian2, shouri0, xifen, YX, zu3mian1, guojizuche, YZTH],
        interval: 3000
    },
    links: ['超值套餐', '顺风车', '长租服务', '门店查询', '导航', '帮助中心']
}, action) => {
    switch (action.type) {
        case 'SLIDE_CAROUSEL':
            const last = state.carousel.urls.shift();
            return {
                links: state.links.slice(),
                carousel: {
                    urls: state.carousel.urls.concat([last]),
                    interval: 3000
                }
            };
        default:
            return state;
    }
};


export default combineReducers({leftNavReducer, topNavReducer, domesticReducer});