import React from 'react';

class DefaultInput extends React.Component {
    constructor(){
        super();
        this.state = {
            text: ''
        }
        this.onChange = this.onChange.bind(this)
    }
    onChange(e){
        this.props.change(e)
        this.setState({
            text: e.target.value
        })
    }
    render() {
        const {type} = this.props
        const {text} = this.state
        return (
            <input type={type} value={text} onChange={this.onChange} placeholder="Enter the Action"/>
        )
    }
}

export default DefaultInput

