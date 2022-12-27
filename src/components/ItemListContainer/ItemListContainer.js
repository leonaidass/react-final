import stock from "../../data/MOCK_DATA.json"
export const ItemListContainer = ({greeting})=>{
    const getData = ()=>{
        return new Promise((resolve, reject)=>{
           setTimeout(()=>{ resolve(stock)},3000)

        })
    }
    getData().then((res)=>{console.log("datossss",res)})
    return(
        <div>{
            
            stock.map((elem)=>(<div key={elem.id} ><h2>{elem.nombre}</h2></div>))
        }</div>
    )
}