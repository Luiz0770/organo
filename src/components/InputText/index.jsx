import './InputText.css'

function InputText({ label, obrigatorio, placeholder, aoAlterar, valor}) {
    return (
        <div className="inputText">
            <label>
                {label}
            </label>
            <input
                onChange={aoAlterar}
                value={valor}
                required={obrigatorio}
                placeholder={placeholder}
            />
        </div>
    );
}

export default InputText;