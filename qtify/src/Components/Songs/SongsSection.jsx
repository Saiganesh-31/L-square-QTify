import React, { useState, useEffect } from "react";
import { Box, Typography, Tabs, Tab } from "@mui/material";
import axios from "axios";
import Section from "../Section/Section";

function SongsSection () {
     const [genres, setGenres] = useState([{}]);
     const [selectedGenre, setSelectedGenre] = useState("all"); 
     const [songs, setSongs] = useState([]);
     const [filteredSongs, setFilteredSongs] = useState([]);

     useEffect(() => {
        const fetchGenres = async () => {
            try{
                const response = await axios.get("https://qtify-backend-labs.crio.do/genres");
                setGenres([{ key: "all", label: "All" }, ...response.data.data]);
            }
            catch (error) {
                console.error("Error fetching genres:", error);
            }
        };

        const fetchSongs = async () => {
            try{
                const response = await axios.get("https://qtify-backend-labs.crio.do/songs");
                setSongs(response.data);
            }
            catch (error) {
                console.error("Error fetching songs:", error);
            }
        };
        fetchGenres();
        fetchSongs();
     }, []);

     useEffect(() => {
        if(selectedGenre === "all") {
            setFilteredSongs(songs);
        }
        else {
            setFilteredSongs(songs.filter(song => song.genre.key === selectedGenre));
        }
     }, [selectedGenre, songs]);

     const handleTabChange = (event, newValue) => {
        setSelectedGenre(newValue);
     };

     return (
        <Box sx={{backgroundColor: "var(--color-black)", py: 1, px: 2, mb: 4}}>
            <Typography variant="h6" sx={{color: "var(--color-white)", fontWeight: 600, px: 2, mb: 3}}>
                Songs
            </Typography>

            <Tabs
                value={selectedGenre}
                onChange={handleTabChange}
                aria-label="song genres tabs"
                sx={{
                    mb: 3, 
                    "& .MuiTabs-indicator": {
                        backgroundColor: "var(--color-primary)",
                    },
                    "& .MuiTab-root": {
                        color: "var(--color-white)",
                        textTransform: "none",
                        fontWeight: 500,
                        "& .Mui-selected": {
                            color: "var(--color-white)",
                        },
                        "& :hover": {
                            color: "var(--color-primary)",
                        },
                    },
                }}
            >
                {genres.map((genre) => (
                    <Tab 
                        key={genre.key} 
                        value={genre.key} 
                        label={genre.label} 
                    />
                ))}
            </Tabs>

            <Section 
                title=""
                apiUrl=""
                data={filteredSongs}
                isSongSection={true}
                navigationId="songs"
            />
        </Box>
     );
};

export default SongsSection;