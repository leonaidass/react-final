import { useEffect } from "react"

export const Nosotros = ()=>{
    const clickear=(event)=>{
        console.log(">>>>",event);
    }
    useEffect(()=>{
        window.addEventListener('click',clickear)
        return ()=>{
            window.removeEventListener('click',clickear)
        }
    },[])
    return(
        <div> 
        <h2>Nosotros</h2>
        <button onClick={clickear}>botn</button></div>
    )
}