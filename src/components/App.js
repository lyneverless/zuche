import React, {Component} from 'react';
import Navigator from './navigator';
import TopNav from './top-nav';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLeftNav: false,
            topNav: '国内租'//['国内租', '分时共享', '全球租', '专车']
        };
        this.handleUserClicked = this.handleUserClicked.bind(this);
        this.handleMaskClicked = this.handleMaskClicked.bind(this);
        this.handleTopNavClicked = this.handleTopNavClicked.bind(this);
    }

    handleUserClicked() {
        this.setState({
            showLeftNav: true
        })
    }

    handleMaskClicked() {
        this.setState({
            showLeftNav: false
        })
    }

    handleTopNavClicked(e) {
        const item = e.target.innerText;
        if (item) {
            this.setState({
                topNav: item
            })
        }
    }

    render() {
        return (
            <div className="App">
                <Navigator show={this.state.showLeftNav} maskClicked={this.handleMaskClicked}/>
                <TopNav
                    active={this.state.topNav}
                    userClicked={this.handleUserClicked}
                    navClicked={this.handleTopNavClicked}
                />
                <div className="main-content">此处应显示路由为 {this.state.topNav} 时对应的内容</div>
            </div>
        );
    }
}

export default App;
