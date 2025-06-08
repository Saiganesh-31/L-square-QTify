import React from "react";
import { useState, useEffect } from "react";
import {Box, Typography, Grid} from "@mui/material";
import {Button} from "@mui/material";
import CardComponent from "../Card/CardComponent.jsx";
import Carousel from "../Carousel/Carousel";
import axios from "axios";

const Section = ({title, apiUrl, data, isSongSection = false, navigationId}) => {
  const [showAll, setShowAll] = useState(false);
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    if (isSongSection) {
      setAlbums(data);
    }
    else {
    const fetchAlbums = async () => {
      try {
        const response = await axios.get(apiUrl);
        setAlbums(response.data);
      } catch (error) {
        console.error("Error fetching albums:", error);
      }
    };
    fetchAlbums();
    }
  }, [apiUrl, data, isSongSection]);

  return (
    <Box sx={{backgroundColor: "var(--color-black)", py: 1, px: 2}}>
      <Box sx={{display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3}}>
        <Typography variant="h6" sx={{color: "var(--color-white)", fontWeight: 600, px: 2}}>
          {title}
        </Typography>
        {!isSongSection && (<Button onClick={() => setShowAll(!showAll)} sx={{
          textTransform: "none", 
          color: "var(--color-primary)", 
          fontWeight: 500, 
          fontSize: "14px"
          }}>
            {showAll ? "Collapse" : "Show All"}
        </Button>)}
      </Box>

      {showAll && !isSongSection ? (
        <Grid container spacing={2}>
          {albums.map((album) => (
            <Grid item xs={6} sm={4} md={2} key={album.id}>
              <CardComponent album={album} isSongSection={isSongSection}/>
            </Grid>
          ))}
        </Grid>
      ) : (
          <Carousel
           items={albums}
           renderComponent={(album) => <CardComponent album={album} isSongSection={isSongSection}/>}
           navigationId={navigationId}
          />
      )}
    </Box>
  );
};

export default Section;