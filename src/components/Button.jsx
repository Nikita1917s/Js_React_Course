import { Button } from 'antd';
import constants from "../modules/constants";
import addToDoItem from './addToDoItem';

const ButtonTest = ({ classAdd, reset, value, addTo, addHow }) => {
    return (value && <Button type="primary"
        onClick={() => (addHow([
            ...addTo, {
                id: Date.now(),
                checked: false,
                text: value
            }
        ]), reset(''))}
    >
        {constants.button.title}</Button>)
}

export default ButtonTest;