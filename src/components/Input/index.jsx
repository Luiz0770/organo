import './Input.css'

function Input({ type='text' ,label, obrigatorio, placeholder, aoAlterar, valor}) {
    return (
        <div className={`input type-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                onChange={aoAlterar}
                value={valor}
                required={obrigatorio}
                placeholder={placeholder}
            />
        </div>
    );
}

export default Input;