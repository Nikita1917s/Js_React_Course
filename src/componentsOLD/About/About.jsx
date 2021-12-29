import React from "react";

class About extends React.Component{
    render() {
        const {user} = this.props
        const {info} = user
        return (
            <div>
               {info && <p>{info}</p>}
            </div>
        )
    }
}

export default About