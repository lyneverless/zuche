import React, {Component} from 'react';
import Form from './form';
import './Domestic.css';

class Domestic extends Component {
    render() {
        //url("https://fimg.zuchecdn.com/upload/wap/HomePage/HeadFigure/2018/750x410-YZTH-20181116-wap.jpg")
        //url("https://fimg.zuchecdn.com/upload/wap/HomePage/HeadFigure/2018/750-410-shouri0-181108-wap.jpg")
        //url("https://fimg.zuchecdn.com/upload/wap/HomePage/HeadFigure/2018/750-410-zu3mian1-181019-wap.jpg")
        //url("https://fimg.zuchecdn.com/upload/wap/HomePage/HeadFigure/2018/750-410-YX-20180821-wap.jpg")
        //url("https://fimg.zuchecdn.com/upload/wap/HomePage/HeadFigure/2018/750-410-mian2-20180824-wap.jpg")
        //url("https://fimg.zuchecdn.com/upload/wap/HomePage/HeadFigure/2018/750x410-guojizuche-180201-wap.jpg")
        //url("https://fimg.zuchecdn.com/upload/app/HomePage/HeadFigure/2018/750-410-xifen-20180629-WAP.jpg")
        //https://fimg.zuchecdn.com/upload/web/modepic/87.jpg
        return (
            <div>
                <div className="carousel"></div>
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