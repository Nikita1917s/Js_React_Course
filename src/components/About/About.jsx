import React from "react";

class About extends React.Component {
    render() {
        const { user } = this.props
        const { name, age, title, info } = user
        return (
                <div>
                    <h1 className='title'>{name}</h1>
                    {age && <p>{age}</p>}
                    {title && <p>{title}</p>}
                    {info && <p>{info}</p>}
                </div>
        )
    }
}

export default About