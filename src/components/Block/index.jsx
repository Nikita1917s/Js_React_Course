import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Work from './Work'


class Block extends React.Component {
    render() {
const {move} = this.props

        return (
            <div style={{ left: move }} className="block"></div>
        )
    }
}

export default Block

