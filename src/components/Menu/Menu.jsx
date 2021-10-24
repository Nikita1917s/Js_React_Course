import React from "react";
import './menu.css'
// import logo from '../../assets/images/1.png'

class Menu extends React.Component {
    render() {
        const { menuItem } = this.props
        const { item, available } = menuItem
        return (
            <li>
                <a href="#">{item}</a>
                {available && <span>{available}</span>}
            </li>
            
        )
    }
} 

export default Menu