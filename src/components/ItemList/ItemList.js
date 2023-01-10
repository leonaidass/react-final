import { Grid } from "@mui/material"
import { Item } from "../Item/Item"

export const ItemList = ( {productos} )=> {
    
    return(<div>
        <h2>Nuestros Productos</h2>
        <hr/>
          <Grid container spacing={4}>
          {
            
            productos.map((elem)=><Item key={elem.id} {...elem}/>)
        }
          </Grid>
        
        
    </div>)
}