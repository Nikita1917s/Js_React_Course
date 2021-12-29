import React from "react";
import Menu from "./components/Menu/Menu"
import Header from "./components/Header/Header"
import About from "./components/About/About"


class Work extends React.Component {
    render() {
        const users = [{ name: 'User1', info: 'sad', title: 'prof' }, { name: 'User2', age: 2, title: "doctor" }, { name: 'User3', age: 3, info: 'happy' }]
        const menuItems = [{ item: "about", available: true }, { item: "Job title" }, { item: "Contcats", available: false },]
        return (
            <>
                <Header />
                <div className='main'>
                </div>
                <div className='general'>
                    <div className='menu'>
                        <ul>
                            {menuItems?.map((menuItem) =>
                                <Menu
                                    menuItem={menuItem}
                                />
                            )}
                        </ul>
                    </div>
                    <div className="content">
                        {users?.map((user) =>
                            <About
                                user={user}
                            />
                        )}
                    </div>
                </div>
            </>
        )
    }
}

export default Work