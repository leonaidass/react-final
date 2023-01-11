import stock from "../data/MOCK_DATA.json"

export const getData = ()=>{
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{ resolve(stock)},1000)

    })
}
 
export const getDataId = (id) =>{
    console.log("el id desde getdata",id)
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const data=stock.find((elem)=>elem.id===id) 
            console.log("del data",data)
            if(data === undefined){
                reject("no se encotro el producto")
            }else{
                resolve(data)
            } },1000)
       
     })
 }