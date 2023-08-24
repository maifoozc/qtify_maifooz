import { Typography } from "@material-ui/core";
import headphone from '../assets/headphone.png';
import './Hero.css'

export default function Hero() {
  return (
    <div className="hero">
      <Typography>
        100 Thousand Songs, ad-free
        <br />
        Over thousands podcast episodes
      </Typography>
      <img src={headphone} alt="headphone" />
    </div>
  );
}
