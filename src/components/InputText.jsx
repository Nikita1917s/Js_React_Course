const InputText = ({value, change}) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => change(e.target.value)}
        />
    );
}

export default InputText;