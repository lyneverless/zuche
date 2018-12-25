import chunjie from '../assets/750-410-chunjie-20181210-WAP.jpg';
import mian2 from '../assets/750-410-mian2-20180824-WAP.jpg';
import YX from '../assets/750-410-YX-20180821-WAP.jpg';
import zu3mian1 from '../assets/750-410-zu3mian1-181019-wap.jpg';
import guojizuche from '../assets/750x410-guojizuche-180201-app-wap.jpg';
import shouri0 from '../assets/750-410-shouri0-181108-wap.jpg';
import xifen from '../assets/750-410-xifen-20180629-WAP.jpg';
import YZTH from '../assets/750x410-YZTH-20181116-wap.jpg';
import moment from 'moment';

const now = Date.now();//todo

export const defaultState = {
    leftNav: {
        itemNames: ['钱包', '行程', '发票', '违章', '设置', '客服'],
        show: false
    },
    topNav: {
        items: [{
            cn: '国内租',
            en: 'domestic'
        }, {
            cn: '分时共享',
            en: 'sharing'
        }, {
            cn: '全球租',
            en: 'international'
        }, {
            cn: '专车',
            en: 'special'
        },]
    },
    domestic: {
        carousel: {
            urls: [chunjie, mian2, shouri0, xifen, YX, zu3mian1, guojizuche, YZTH],
            interval: 3000
        },
        choose: {//todo how to initialize???
            warningText: '温馨提示：请提前4个工作小时下单，即可尊享上门送/取车服务',
            from: {
                city: '广州',
                location: '市桥店',
                way: '到店',
                time: now
            },
            to: {
                city: '广州',
                location: '市桥店',
                way: '到店',
                time: moment(now).add(2, 'days').valueOf()
            }
        },
        links: ['超值套餐', '顺风车', '长租服务', '门店查询', '导航', '帮助中心']
    }
};