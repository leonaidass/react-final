import { Item } from "../Item/Item"

export const ItemList = ( {productos} )=> {
    
    return(<div>
        <h2>Nuestros Productos</h2>
        <hr/>
        <section>
        <div>{
            
            productos.map((elem)=><Item key={elem.id} {...elem}/>)
        }</div>
        </section>
    </div>)
}