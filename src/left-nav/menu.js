import React, {Component} from "react";
import './menu.css';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: ['钱包', '行程', '发票', '违章', '设置', '客服']
        }
    }

    render() {
        return (
            <ul className="lists">
                {this.state.lists.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        )
    }
}

export default Menu;