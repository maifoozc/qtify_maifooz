import { Box, Tab, Tabs, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import CardComponent from "./CardComponent";

export default function TabFilterComponent() {
  const genreApi = "https://qtify-backend-labs.crio.do/genres";
  const songApi = "https://qtify-backend-labs.crio.do/songs";

  const [genre, setGenre] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const responseGenre = await axios.get(genreApi);
      const responseSongs = await axios.get(songApi);
      setGenre(responseGenre.data.data);
      setData(responseSongs.data);
    } catch (err) {
      console.error("Error while fetching data", err);
    }
  };

  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const renderSwiper = (filterKey) => {
    return (
      <Swiper
        modules={[Navigation]}
        slidesPerView={6}
        //   onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        navigation
        swiper-button-size="20px"
      >
        {data
          ? data
              .filter((e) => filterKey === "all" || e.genre.key === filterKey)
              .map((e) => (
                <div key={e.id}>
                  <SwiperSlide>
                    <CardComponent
                      image={e.image}
                      followers={e.likes}
                      title={e.title}
                      ifSong={true}
                    />
                  </SwiperSlide>
                </div>
              ))
          : "loading..."}
      </Swiper>
    );
  };

  return (
    <div style={{ backgroundColor: "#121212", color: "#fff", paddingTop:'1rem' }}>
      <div style={{ margin: "0 1rem" }}>
        <Typography
          style={{ color: "#fff", display: "flex", justifyContent: "left" }}
        >
          Songs
        </Typography>

        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={selectedTab} onChange={handleTabChange} textColor="#fff">
            <Tab label="All" />
            {genre
              ? genre.map((e) => <Tab key={e.key} label={e.label} />)
              : "loading..."}
          </Tabs>
        </Box>

        {/* Render the appropriate swiper based on the selected tab */}
        {genre && (
          <div key="all">{selectedTab === 0 && renderSwiper("all")}</div>
        )}
        {genre &&
          genre.map((e, index) => (
            <div key={e.key}>
              {selectedTab === index + 1 && renderSwiper(e.key)}
            </div>
          ))}
      </div>
    </div>
  );
}
