import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import headphone from "../assets/headphone.png";
import { CardMedia, Typography } from "@mui/material";

export default function CardComponent({image, follwers, title}) {
  return (
    <div style={{ maxWidth: "159px" }}>
      <Card sx={{ maxWidth: 159 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={image}
          title="green iguana"
        />
        <CardContent style={{ display: "flex", justifyContent: "left" }}>
          <Typography gutterBottom variant="h5" component="div">
            {follwers}
          </Typography>
        </CardContent>
      </Card>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
    </div>
  );
}
