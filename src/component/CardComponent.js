import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import headphone from "../assets/headphone.png";
import { CardMedia, Typography } from "@mui/material";

export default function CardComponent({ image, followers, title ,ifSong}) {
  return (
    <div style={{ maxWidth: "159px" }}>
      <Card sx={{ maxWidth: 159 }}>
        <CardMedia sx={{ height: 160 }} image={image} title="green iguana" />
        <CardContent
          style={{ display: "flex", justifyContent: "left", padding: "0.5rem" }}
        >
          <Typography
            style={{
              borderRadius: "20px",
              backgroundColor: "#121212",
              color: "#fff",
              padding: "0.5rem",
              fontSize: "12px",
            }}
          >
            {followers}{ifSong?' Likes':' follows'}
          </Typography>
        </CardContent>
      </Card>
      <Typography style={{display:'flex', justifyContent:'left',textAlign:'left'}}>{title}</Typography>
    </div>
  );
}
