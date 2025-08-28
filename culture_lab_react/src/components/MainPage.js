import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Testimonials from "./RecentNews";
import ProjectCarousel from "./Carousel";
import Cube3D from "./Cube";
import CardMedia from "@mui/material/CardMedia"; // for image handling

const metaValues = [
  "Meta-Linguistic",
  "Meta-Valued",
  "Meta-Cultural",
  "Meta-Social",
];

export default function Hero() {
  const [metaText, setMetaText] = React.useState(metaValues[0]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setMetaText(metaValues[Math.floor(Math.random() * metaValues.length)]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box>
      {/* Hero Banner */}
      <Box
        id="hero"
        sx={(theme) => ({
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url("${process.env.PUBLIC_URL}/bg2.png")`,
          ...theme.applyStyles("dark", {
            filter: "invert(1)",
            backgroundImage: `url("${process.env.PUBLIC_URL}/bg2.png")`,
          }),
        })}
      >
        <Container
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            ...theme.applyStyles("dark", {
              filter: "invert",
              maxHeight: "500px",
            }),
          })}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{
              alignItems: "center",
              width: { xs: "100%", sm: "80%" },
              paddingBottom: "3%",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                minWidth: "100%",
                padding: "5%",
                marginLeft: "37%",
                paddingBottom: "1%",
              }}
            >
              <Cube3D />
              <Typography
                variant="h1"
                sx={(theme) => ({
                  color: "white",
                  flexDirection: { xs: "column", sm: "row" },
                  fontSize: "clamp(6rem, 14vw, 6.5rem)",
                  textAlign: "center",
                  marginTop: "1%",
                  marginRight: "20%",
                  marginLeft: "5%",
                  ...theme.applyStyles("dark", {
                    color: "white",
                  }),
                })}
              >
                CUBE
              </Typography>
            </div>
            <Typography
              sx={{
                textAlign: "center",
                color: "#ffffff",
                fontWeight: "600",
                fontSize: "30px",
                width: { sm: "100%", md: "80%" },
              }}
            >
              Culture, User, Behavior and Ethics in AI
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Vision + News */}
      <Box paddingTop={3} paddingBottom={8}>
        <Stack
          direction={{ xs: "column", md: "column" }}
          spacing={2}
          useFlexGap
          sx={{
            alignItems: "stretch",
            width: "100%",
            paddingTop: "2%",
            paddingBottom: "6%",
            paddingX: "3%",
            height: "100%",
          }}
        >
          <Stack
            spacing={2}
            sx={{
              width: { xs: "100%", md: "100%" },
              textAlign: { xs: "center", md: "left" },
              marginTop: { xs: "0%" },
              marginRight: "5%",
              height: "100%",
              flex: 1,
            }}
          >
            <Typography
              component="h2"
              variant="h2"
              fontWeight="500"
              sx={(theme) => ({
                fontWeight: 600,
                mb: 2,
                letterSpacing: 0.2,
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                alignSelf: "center",
                ...theme.applyStyles("dark", {
                  color: "primary.light",
                }),
              })}
            >
              Our Vision
            </Typography>
          </Stack>

          {/* 👇 New Team Section */}
          <Box
            id="our-team"
            sx={{
              py: { xs: 6, md: 10 },
              px: { xs: 2, md: 6 },
              bgcolor: "background.default",
              textAlign: "center",
            }}
          >
            <Typography
              component="h2"
              variant="h3"
              sx={{
                fontWeight: 600,
                mb: 4,
              }}
            >
              Our Team
            </Typography>

            <CardMedia
              component="img"
              image={ `${process.env.PUBLIC_URL}/team.jpeg`}
              alt="Our Team"
              sx={{
                maxWidth: "900px",
                width: "100%",
                borderRadius: 2,
                mx: "auto",
                boxShadow: 3,
              }}
            />
          </Box>

          <Stack
            sx={{
              width: { xs: "100%", md: "100%" },
              height: "100%",
              flex: 1,
            }}
          >
            <Testimonials />
          </Stack>
        </Stack>
      </Box>


    </Box>
  );
}
