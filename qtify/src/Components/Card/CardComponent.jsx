import React from "react";
import Chip from "@mui/material/Chip";
import { Typography, Card, CardMedia, CardContent } from "@mui/material";

function CardComponent ({album, isSongSection = false}) {
    // const dummyAlbumName = "Tollywood Songs";
    // const dummyFollows = "100k follows";
    const {title, image, follows, likes} = album;

    return (
        <Card sx={{
            width: "159px",
            height: "232px",
            backgroundColor: "var(--color-black)",
            borderRadius: "8px",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
        }}>
            <CardMedia
                component="img"
                image={image}
                alt={title}
                sx={{
                    width: "100%",
                    height: "70%",
                    objectFit: "cover",
                }}
            />
            <CardContent sx={{
                flex: 1,
                backgroundColor: "var(--color-black)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                p: 1,
            }}>
                <Chip label = {isSongSection ? `${likes} Likes` : `${follows} Follows`} sx={{
                    backgroundColor: "var(--color-white)",
                    color: "var(--color-black)",
                    fontSize: "12px",
                    height: "20px",
                    px: 0.75,
                    mb: 1,
                    width: "fit-content",
                }}/>
                <Typography variant="body2" sx={{
                    color: "var(--color-white)",
                    fontSize: "14px",
                    fontWeight: 500,
                    textAlign: "left",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                }}>
                    {title}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default CardComponent;