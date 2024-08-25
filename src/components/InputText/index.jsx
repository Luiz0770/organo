import './InputText.css'

function InputText({ label, obrigatorio, placeholder, aoDigitar, valor}) {

    return (
        <div className="inputText">
            <label>
                {label}
            </label>
            <input
                onChange={aoDigitar}
                value={valor}
                required={obrigatorio}
                placeholder={placeholder}
            />
        </div>
    );
}

export default InputText;