import React from "react";
// import Test from "./components/Test/Test"
// import Block from "./componentsOLD/Block/Block"
// import About from "./components/About/About"


class Work extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 0,
            move: 0,
            step: 10,
            text: '',
            pass: ''
        }
        this.changeLikes = this.changeLikes.bind(this)
        this.onMove = this.onMove.bind(this)
        this.changeText = this.changeText.bind(this)
    }

    changeLikes(step) {
        this.setState({
            likes: this.state.likes += step
        })
    }

    onMove() {
        const { move, step } = this.state
        this.setState({
            move: move + step
        })
    }

    changeText(e, key){
        this.setState({
            [key]: e.target.value
        })
    }

    render() {
        // const users = [{ name: 'test1', info: 'sad', title: 'prof' }, { name: 'test2', age: 2, title: "doctor" }, { name: 'test3', age: 3, info: 'happy' }]
        const {likes, move , text, pass} = this.state;


        return (
            <>
                {/* <input type="text" value={text} onChange={(e, key) => this.changeText(e, 'text')}/>
                <input type="password" value={pass} onChange={(e, key) => this.changeText(e, 'pass')}/> */}


                {/* <Block move={move}/> */}
                {/* <div className='block' style={{left: move}}></div>
                <p className={`text ${likes > 30 ? 'red' : 'green'} ${positionLeft}`}>{likes}</p> */}
                <button onClick={this.onMove}>Touch me</button>
                {/* <Header />
                <div className='main'>
                </div>
                {users?.map((user) =>
                    <About
                        user={user}
                    />
                )} */}

            </>
        )
    }
}

export default Work