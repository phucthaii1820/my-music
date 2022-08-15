import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import "./App.css";
import NhacCuaTui from 'nhaccuatui-api-full'
import LinearProgress from '@mui/material/LinearProgress';

function App() {
  const [play, setPlay] = React.useState(true);
  const [song, setSong] = React.useState(null);
  const [audio, setAudio] = React.useState(null)
  const [isPendding, setIsPedding] = React.useState(true)
  React.useEffect(() => {
    const fetchSong = async () => {
      const data = await NhacCuaTui.getSong("EdENCgJm9dAa");
      setSong(data?.song)
      setAudio(new Audio(data?.song?.streamUrls[song?.streamUrls.length - 1]?.streamUrl))
      setIsPedding(false)
    }
    fetchSong();
  }, [])

  useEffect(() => {
    if (audio)
      play ? audio.play() : audio.pause();
  },
    [play]
  );

  console.log(audio.currentTime)
  return (
    <>
      {isPendding ? null : (<Box
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
              maxWidth: '600px'
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexFlow: "column",
                }}
              >
                <CardMedia
                  component="img"
                  image={song?.thumbnail}
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
                  {song?.title}
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "600px",
                    color: "rgb(144 144 144)",
                  }}
                >
                  {song?.artists[0]?.name}
                </Typography>
                <Box sx={{ width: '100%' }}>
                  <LinearProgress variant="determinate" value={30} />
                </Box>

                <Box sx={{
                  mt: 5
                }}>
                  <Button onClick={() => {
                    setPlay(!play)
                  }}>Play</Button>

                </Box>
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
      </Box>)}
    </>
  );
}

export default App;
