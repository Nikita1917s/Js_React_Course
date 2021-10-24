import React from "react";
import './header.css'

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <ul>
                    <li><a href="#">Header item</a></li>
                    <li><a href="#">Header item</a></li>
                    <li><a href="#">Header item</a></li>
                    <li><a href="#">Header item</a></li>
                </ul>
            </div>
        )
    }
}

export default Header

// changePosition(step) {
//     this.setState( {
//         positionLeft: this.state.positionLeft += step
//     })