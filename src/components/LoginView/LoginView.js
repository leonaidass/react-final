import { useState,useContext } from "react";
import { LoginContext } from "../../context/LoginContext";

export const LoginView = ()=>{
    const {login} = useContext(LoginContext);
    const [values, setValues] = useState({nombre:'',pass:''});
    const handleInputChange = (e)=>{
        setValues({
            ...values,
            [e.target.name] : e.target.value
        })

    }
    const handleEnviar = (e)=>{
      e.preventDefault()
      console.log(values);
      login(values)

    }
    return (
        <div>
        <h2>Login</h2>
          <form onSubmit={handleEnviar}>
          <input type="text"
                 name="nombre"
                 value={values.nombre}
                 onChange={handleInputChange}
                           />
        <input type="password"
                 name="pass"
                 value={values.pass}
                 onChange={handleInputChange}
                           />
         <button>enviar</button>

          </form>
          
        </div>
    )
}