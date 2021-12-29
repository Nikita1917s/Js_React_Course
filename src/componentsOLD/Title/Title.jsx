import React from "react";

class Title extends React.Component{
    render() {
        const {user} = this.props
        const {title} = user
        return (
            <div>
               {title && <p>{title}</p>}
            </div>
        )
    }
}

export default Title