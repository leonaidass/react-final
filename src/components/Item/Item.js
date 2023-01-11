import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

export const Item = ({ nombre, image, precio, descripcion, stock }) => {
  return (
    <Grid item xs={12} sm={4} lg={3}>
      <Card sx={{ height: 430 }} >
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
        </CardContent>
        {/* <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions> */}
      </Card>
    </Grid>
  );
};
