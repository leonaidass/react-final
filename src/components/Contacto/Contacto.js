import { useState } from "react";

export const Contacto = ()=>{
    
    const handleSubmit = (e)=>{
        e.preventDefault()
    }
    const [values, setValues] = useState(
        {
            nombre:'',
            dni:''
        });

        const handleValues = (e)=>{
           console.log(e.target.name);
           setValues({
            ...values,
            [e.target.name]:e.target.value
           })
        } 
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleValues}
                    value={values.nombre}
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                />
                <input
                    onChange={handleValues}
                    value={values.dni}
                    name="dni"
                    type="number"
                    placeholder="Documento"
                />
                <input/>
                <button>enviar</button>
            </form>
        </div>
    )
}