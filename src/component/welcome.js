import '../App.css';
import {Timeline} from 'antd';
import React from 'react'

import {urlList, lines} from './data'

class Welcome extends React.Component {
    openUrl = url => {
        return () => {
            window.open(url)
        }
    }
    Interval = null
    state = {index: 0}

    componentDidMount() {
        this.Interval = setInterval(() => {
            let index = this.state.index + 1
            if (index > lines.length - 1) index = 0
            this.setState({index})
        }, 5000)
    }

    componentWillUnmount() {
        clearInterval(this.Interval)
    }

    render() {
        return (
            <div className="App">
                <h1 className={'header'}>{lines[this.state.index]}</h1>
                <Timeline>
                    {urlList.map(
                        (item, index) =>
                            <Timeline.Item key={index} onClick={this.openUrl(item.url)}>{item.name}</Timeline.Item>
                    )}
                </Timeline>
            </div>
        )

    }

}

export default Welcome;
