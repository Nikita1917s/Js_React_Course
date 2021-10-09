import React from "react";
import List from "./components/List"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            text: '',
            pass: ''
        }
        //this.changeText = this.changeText.bind(this)
    }

    changeText(e, key) {
        console.log(e.target.value)
        this.setState({
            [key]: e.target.value
        })
    }

    

    render() {
        // const { pass, text } = this.state
        return (
            <>
                <List />
            </>
        )
    }
}

export default App