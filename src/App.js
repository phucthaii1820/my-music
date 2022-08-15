import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import "./App.css";

function App() {
  const [play, setPlay] = React.useState(false);
  return (
    <Box
      sx={{
        minHeight: "100hv",
        paddingTop: "100px",
      }}
    >
      <Grid
        container
        spacing={5}
        sx={{
          paddingX: "100px",
        }}
      >
        <Grid
          item
          xs={6}
          sx={{
            height: "600px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              backgroundColor: "white",
              borderRadius: "20px",
              padding: "50px",
            }}
          >
            {/* <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexFlow: "column",
              }}
            >
              <CardMedia
                component="img"
                image="https://phubuideptrai.github.io/nhaccuaphu/images/01.jpg"
                alt="banner"
                sx={{
                  objectFit: "cover",
                  width: "200px",
                  height: "200px",
                  borderRadius: play ? "100%" : "10px",
                  animation: play ? "rotate 10s linear infinite" : null,
                  "@keyframes rotate": {
                    from: {
                      transform: "rotate(0deg)",
                    },
                    to: {
                      transform: "rotate(360deg)",
                    },
                  },
                }}
              />
              <Typography
                sx={{
                  fontWeight: "700 !important",
                  fontSize: "24px",
                  mt: "40px",
                }}
              >
                Mama Boy
              </Typography>
              <Typography
                sx={{
                  fontWeight: "600px",
                  color: "rgb(144 144 144)",
                }}
              >
                Amme
              </Typography>
            </Box>
            <Button
              onClick={() => {
                setPlay(!play);
              }}
            >
              Play
            </Button> */}
            <Box sx={{}}>
              <ReactPlayer url="https://www.youtube.com/watch?v=4fkQP-UmNkE" />
            </Box>
          </Box>
        </Grid>

        <Grid
          item
          xs={6}
          sx={{
            height: "500px",
          }}
        >
          <Box
            sx={{
              height: "100%",
              width: "100%",
              backgroundColor: "yellow",
            }}
          ></Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
