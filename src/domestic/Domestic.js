import React, {Component} from 'react';
import Carousel from './Carousel';
import Form from './form';
import './Domestic.css';
import chunjie from '../assets/750-410-chunjie-20181210-WAP.jpg';
import mian2 from '../assets/750-410-mian2-20180824-WAP.jpg';
import YX from '../assets/750-410-YX-20180821-WAP.jpg';
import zu3mian1 from '../assets/750-410-zu3mian1-181019-wap.jpg';
import guojizuche from '../assets/750x410-guojizuche-180201-app-wap.jpg';
import shouri0 from '../assets/750-410-shouri0-181108-wap.jpg';
import xifen from '../assets/750-410-xifen-20180629-WAP.jpg';
import YZTH from '../assets/750x410-YZTH-20181116-wap.jpg';


class Domestic extends Component {
    render() {
        const urls = [chunjie, mian2, shouri0, xifen, YX, zu3mian1, guojizuche, YZTH];
        return (
            <div>
                <Carousel interval={4000}
                          urls={urls}
                          styleP={{height: '7rem', backgroundSize: '100% 100%'}}>
                </Carousel>
                <Form style={{height: '14rem'}}>
                </Form>
                <nav>
                    <ul className="navs">
                        <li>超值套餐</li>
                        <li>顺风车</li>
                        <li>长租服务</li>
                        <li>门店查询</li>
                        <li>导航</li>
                        <li>帮助中心</li>
                    </ul>
                </nav>
                <div className="recommend">
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}


export default Domestic;