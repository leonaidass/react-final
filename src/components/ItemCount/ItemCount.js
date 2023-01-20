

export const ItemCount = ({max,setCantidad,cantidad, onAdd})=>{
   
   const handleSumar = ()=>{
    cantidad < max && setCantidad(cantidad+1)
       console.log(max)
   }
   const handleRestar = ()=>{
        cantidad > 1 && setCantidad(cantidad-1)
   }
    return (
        <div>
            <button onClick={handleRestar}>-</button>
            <span>{cantidad}</span>
            <button onClick={handleSumar}>+</button>
            <button onClick={onAdd}>agregar carrito</button>

        </div>
    )
}