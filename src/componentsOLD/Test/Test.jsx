import React from "react";
import './style.css'
import logo from '../../assets/images/1.png'

class Test extends React.Component {
    render() {
        const { user } = this.props
        const { name, age } = user
        return (
            <div>
                <h1 className='title'>{name}</h1>
                {age && <p>{age}</p>}
                <img src={logo} alt="11" />
            </div>
        )
    }
}

export default Test