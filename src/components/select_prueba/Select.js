

export const Select = ({talles})=>{
    console.log(talles);
    const chang=(e)=>{
     console.log(e)
    }
    return(
        <div>
            <select onChange={chang}> {talles.map((elem)=><option value={elem.value}>{elem.talle}</option>)}</select>
        </div>
    )
}