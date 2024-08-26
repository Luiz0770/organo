import './DropDown.css'

function DropDown({label, itens, obrigatorio, aoAlterar}) {
    // console.log(itens)

    return (
        <div className='lista-suspensa'>
            <label>{label}</label>
            <select required={obrigatorio} onChange={aoAlterar}>
                {itens.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    );
}

export default DropDown;
