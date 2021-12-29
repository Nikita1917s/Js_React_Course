import InputText from "./InputText";
import {useEffect, useState} from "react";
import Footer from "./Footer";
import Header from "./Header";

const Example = ({text = "text", test, children, footer, addFooter, addHeader}) => {
    const [stateBtn, changeStateBtn] = useState(test)
    const [timer, changeTimer] = useState(0)
    useEffect(() => {
        let time = timer
        if (timer < 5){
            time = setInterval(() => changeTimer(timer+1), 1000)
        }
        return () => clearInterval(time)
    }, [timer])
    const [login, seLogin] = useState('test');
    console.log(timer)
    return (
        <div className="example">
            <Header add={addHeader}/>
            {stateBtn && <h1>{text}</h1>}
            {children()}
            <InputText value={login} change={seLogin}/>
            <Footer add={addFooter}>
                {/*{footer}*/}
            </Footer>
            <input type="button" onClick={() => changeStateBtn(!stateBtn)}/>
        </div>
    );
}

export default Example;