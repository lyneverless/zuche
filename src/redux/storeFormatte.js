import chunjie from '../assets/750-410-chunjie-20181210-WAP.jpg';
import mian2 from '../assets/750-410-mian2-20180824-WAP.jpg';
import YX from '../assets/750-410-YX-20180821-WAP.jpg';
import zu3mian1 from '../assets/750-410-zu3mian1-181019-wap.jpg';
import guojizuche from '../assets/750x410-guojizuche-180201-app-wap.jpg';
import shouri0 from '../assets/750-410-shouri0-181108-wap.jpg';
import xifen from '../assets/750-410-xifen-20180629-WAP.jpg';
import YZTH from '../assets/750x410-YZTH-20181116-wap.jpg';


export const defaultState = {
    leftNav: {
        itemNames: ['钱包', '行程', '发票', '违章', '设置', '客服'],
        show: false
    },
    domestic: {
        carousel: {
            urls: [chunjie, mian2, shouri0, xifen, YX, zu3mian1, guojizuche, YZTH],
            interval: 5000
        },
        choose: {//todo geography API
            warningText: '温馨提示：请提前4个工作小时下单，即可尊享上门送/取车服务',
            from_city: '广州',
            from_location: '市桥店',
            from_way: '到店',
            from_time: 0,
            to_city: '北海',
            to_location: '火车站店',
            to_way: '到店',
            to_time: 0
        },
        links: ['超值套餐', '顺风车', '长租服务', '门店查询', '导航', '帮助中心']
    },
    selectCity: {
        cities: [],
        fetching: false
    }
};