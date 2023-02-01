import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Item = ({ nombre, image, precio, descripcion, stock,id }) => {
  const navegar =useNavigate()
  const verMas = ()=>{
    navegar(`/detalle/${id}`)
  }
  return (
    <Grid item xs={12} sm={4} lg={3}>
      <Card sx={{ height: 460 }} >
        <CardMedia sx={{ height: 250 }} image={image} className="contentImgCard"/>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {nombre}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {descripcion}
          </Typography>
          <Typography  variant="body2" color="text.secondary">
            <span>
              Stock: <strong>{stock}</strong>{" "}
            </span>
          </Typography>

          <Typography component={'p'}  variant="body2" color="text.secondary">
            
              precio:
              {new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(precio)}
           
          </Typography>
          {/* <Link to={`/detalle/${id}`}> ver mas</Link> */}
        </CardContent>
        <CardActions>
        
          <Button size="small" onClick={verMas}>Ver Mas</Button>  
        </CardActions>
      </Card>
    </Grid>
  );
};
