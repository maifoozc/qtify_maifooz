import { Button, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "./NewAlbums.css";
import axios from "axios";
import { useEffect, useState } from "react";
import CardComponent from "./CardComponent";

export default function NewAlbums() {
  const newAlbumAPI = "https://qtify-backend-labs.crio.do/albums/new";
  const [data, setData] = useState();

  let fetchData = async () => {
    try {
      let response = await axios.get(newAlbumAPI);
    //  console.log(response.data);
      setData(response.data);
    } catch (err) {
      console.error("error while fetching top albums", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const [showAll, setShowAll] = useState(false);

  const showButtonToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <div style={{ backgroundColor: "#121212", color: "#fff",paddingTop:'1rem'  }}>
      <div style={{ margin: "0 1rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>New Albums</Typography>
          <Button
            style={{ textTransform: "none", color: "#34c84b" }}
            onClick={showButtonToggle}
          >
            {showAll ? "Show Less" : "Show All"}
          </Button>
        </div>

        {data ? (
          showAll ? (
            <div className="row">
              {data
                ? data.map((e) => {
                    return (
                      <div className="col-2" key={e.id}>
                        <CardComponent
                          image={e.image}
                          followers={e.follows}
                          title={e.title}
                          ifSong={false}
                          noOfSong={e.songs.length}
                        />
                      </div>
                    );
                  })
                : "loading"}
            </div>
          ) : (
            <Swiper
              modules={[Navigation]}
              slidesPerView={6}
              //   onSlideChange={() => console.log("slide change")}
              // onSwiper={(swiper) => console.log(swiper)}
              navigation
              swiper-button-size="20px"
            >
              {data
                ? data.map((e) => {
                    return (
                      <div key={e.id}>
                        <SwiperSlide>
                          <CardComponent
                            image={e.image}
                            followers={e.follows}
                            title={e.title}
                            ifSong={false}
                          />
                        </SwiperSlide>
                      </div>
                    );
                  })
                : "loading..."}
            </Swiper>
          )
        ) : (
          "loading..."
        )}
      </div>
    </div>
  );
}
