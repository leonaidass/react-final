import { createContext,useState } from "react";

const MOCK_USERS=[{
    usuario:'leonardo',
    pass:'123'
},{
    usuario:'juan',
    pass:'1234'
},{
    usuario:'mateo',
    pass:'12345'
}]
export const LoginContext = createContext()

export const LoginProvider = ({children})=>{
    const [user, setUser] = useState({
        user:null,
        logged:false,
        err:null
    });
    console.log(user);

    const login = (user)=>{
        const match = MOCK_USERS.find((elem)=> elem.usuario === user.nombre && elem.pass === user.pass)
        console.log("match",match);
        if(match){
            setUser({
                user:match.usuario,
                logged:true,
                err:null
            })
            console.log("entroooo");
        }else{
            console.log("nooo entroooo");

            setUser({
                user:null,
                logged:false,
                err:'error de datos'
            })
        }

    }
    const logout = ()=>{
        setUser({
            user:null,
            logged:false,
            err:null
        })
    }
  return (
    <LoginContext.Provider value={{user,login,logout}}>
        {children}
    </LoginContext.Provider>
  )
}