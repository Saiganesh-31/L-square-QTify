import React from "react";
import { useState, useEffect, useRef } from "react";
import {Box, Typography, Grid} from "@mui/material";
import {Button, IconButton} from "@mui/material";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowBackIosNewRoundedIcon from '@mui/icons-material/ArrowBackIosNewRounded';
import CardComponent from "../Card/CardComponent";
// import left_arrow from "../../assets/left-arrow.svg";
// import right_arrow from "../../assets/right-arrow.svg";
import axios from "axios";

const Section = ({title, apiUrl}) => {
  const [showAll, setShowAll] = useState(false);
  const [albums, setAlbums] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(apiUrl);
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    }

    fetchAlbums();

  }, [apiUrl]);

  const handleScroll = (direction) => {
    const scrollAmount = 200;
    if(carouselRef.current) {
        carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{backgroundColor: "var(--color-black)", py: 1, px: 2}}>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3}}>
        <Typography variant="h6" sx={{color: "var(--color-white)", fontWeight: 600, px: 2}}>
          {title}
        </Typography>
        <Button onClick={() => setShowAll(!showAll)} sx={{
          textTransform: "none", 
          color: "var(--color-primary)", 
          fontWeight: 500, 
          fontSize: "14px"
          }}>
            {showAll ? "Collapse" : "Show All"}
        </Button>
      </Box>

      {showAll ? (
        <Grid container spacing={2}>
        {albums.map((album) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={album.id}>
              <CardComponent album={album} />  
          </Grid>
        ))}
      </Grid>
      ) : (
        <Box position="relative">
          <IconButton
              onClick={() => handleScroll("left")}
              sx={{position: "absolute", left: 0, top: "40%", zIndex: 1, backgroundColor: "var(--color-primary)"}}>
                <ArrowBackIosNewRoundedIcon />
          </IconButton>

          <Box ref={carouselRef}
               sx={{
                display:"flex",
                overflowX: "auto",
                overflowY: "hidden",
                gap: 6.2,
                scrollBehavior: "smooth",
                py: 1,
                px: 5,
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none"
               },
                "& > *": {
                flex: "0 0 auto",
               }
              }}
          >
            {albums.map((album) => (
              <CardComponent key={album.id} album={album} />
            ))}
          </Box>

          <IconButton
              onClick={() => handleScroll("right")}
              sx={{position: "absolute", right: 0, top: "40%", zIndex: 1, backgroundColor: "var(--color-primary)"}}>
                <ArrowForwardIosRoundedIcon />
          </IconButton>         
        </Box>
      )}
    </Box>
  );
}

export default Section;