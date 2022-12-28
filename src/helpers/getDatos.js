import stock from "../data/MOCK_DATA.json"

export const getData = ()=>{
    return new Promise((resolve, reject)=>{
       setTimeout(()=>{ resolve(stock)},3000)

    })
} 