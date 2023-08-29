import "./Navbar.css";
import Logo from "../assets/Logo.png";
import { Button, IconButton, TextField } from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import Autocomplete from "@mui/material/Autocomplete";
import axios from "axios";
import { useEffect, useState } from "react";
import { Box, Modal, Typography } from "@mui/material";

export default function Navbar() {
  const albumApi = "https://qtify-backend-labs.crio.do/songs";

  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const responseSongs = await axios.get(albumApi);
      setData(responseSongs.data);
      console.log(responseSongs.data);
    } catch (err) {
      console.error("Error while fetching data", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //search filter

  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  let filter = async () => {
    const filtered = data.filter((song) =>
      song.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    filter();
  }, [data, searchValue]);

  //modal
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="navbar">
      <div className="navabar_content">
        <img src={Logo} alt="logo" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Autocomplete
            freeSolo
            variant="outlined"
            size="small"
            placeholder="Search a song of your choice"
            style={{ width: "23rem" }}
            options={filteredData ? filteredData : data}
            onInputChange={(event, newValue) => setSearchValue(newValue)}
            getOptionLabel={(option) => option.title}
            renderOption={(props, option) => (
              <div
                key={option.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: "#121212",
                  color: "#fff",
                  paddingBottom: "8px",
                }}
              >
                <img
                  loading="lazy"
                  width="50"
                  src={option.image}
                  alt={props.title}
                />
                <div>
                  <Typography
                    style={{
                      width: "15rem",
                      wordWrap: "break-word",
                      fontSize: "0.8rem",
                    }}
                  >
                    {option.title}
                  </Typography>
                  <Typography
                    style={{
                      width: "15rem",
                      wordWrap: "break-word",
                      fontSize: "0.6rem",
                    }}
                  >
                    {option.artists.join(", ")}
                  </Typography>
                </div>

                <Typography
                  style={{
                    fontSize: "0.8rem",
                    alignItems: "start",
                  }}
                >
                  {option.likes} likes
                </Typography>
              </div>
            )}
            renderInput={(params) => (
              <TextField {...params} label="Search a song of your choice" />
            )}
          />
          {/* <TextField
            variant="outlined"
            size="small"
            placeholder="Search a song of your choice"
            style={{ width: "20rem" }}
          /> */}

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
          onClick={handleOpen}
        >
          Give FeedBack
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "background.paper",
              border: "2px solid #000",
              boxShadow: 24,
              p: 4,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                textAlign: "center",
                gap: "0.8rem"
              }}
            >
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Feedback
              </Typography>
              <div style={{ marginTop: "0.8rem", gap: "5rem" }}>
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Full Name"
                  fullWidth
                  style={{ marginBottom: "0.5rem" }}
                />
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Email ID"
                  fullWidth
                  style={{ marginBottom: "0.5rem" }}
                />
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Subject"
                  fullWidth
                  style={{ marginBottom: "0.5rem" }}
                />
                <TextField
                  variant="outlined"
                  size="small"
                  placeholder="Description"
                  multiline
                  rows={4}
                  fullWidth
                  style={{ marginBottom: "0.5rem" }}
                />
              </div>
              <Button
                variant="outlined"
                style={{
                 textTransform:'none',
                  color: "#fff",
                  backgroundColor: "#34c94b",
                }}
              >
                Submit Feedback
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </div>
  );
}
