import "./Navbar.css";
import Logo from '../assets/Logo.png';
import { Button, IconButton, TextField } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";


export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navabar_content">
        <img src={Logo} alt='logo'/>
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
          <TextField
            variant="outlined"
            size="small"
            placeholder="Search a song of your choice"
            style={{ width: "20rem" }}
          />
          <IconButton variant="outlined">
            <SearchIcon />
          </IconButton>
        </div>

        <Button
          variant="contained"
          style={{
            textTransform: "none",
            backgroundColor: "#121212",
            color: "#34C94B",
          }}
          size="small"
        >
          Give FeedBack
        </Button>
      </div>
    </div>
  );
}
