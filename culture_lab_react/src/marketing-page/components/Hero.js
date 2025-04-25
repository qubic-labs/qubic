import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Testimonials from "./Testimonials";
import ProjectCarousel from "./Carousel";
import Cube3D from "./Cube";

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
    }, 3000); // Changes text every 3 seconds

    return () => clearInterval(interval); // Cleanup function to clear interval
  }, []);

  return (
    <Box>
      <Box
        id="hero"
        sx={(theme) => ({
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundImage: `url("${process.env.PUBLIC_URL}/bg2.png")`,
          // backgroundColor: "#065171",
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
            pt: { xs: 1, sm: 7 },
            pb: { xs: 2, sm: 7 },
            ...theme.applyStyles("dark", {
              filter: "invert",
              maxHeight: "500px",
            }),
          })}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ alignItems: "center", width: { xs: "100%", sm: "80%" } }}
          >
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-evenly", minWidth: "100%", padding:"5%", marginLeft: "19%"}}>
              <Cube3D />
              <Typography
                variant="h1"
                sx={(theme) => ({
                  color: "white",
                  flexDirection: { xs: "column", sm: "row" },
                  alignItems: "center",
                  fontSize: "clamp(6rem, 14vw, 6.5rem)",
                  textAlign: "center",
                  marginTop: "1%",
                  marginRight: "20%",
                  ...theme.applyStyles("dark", {
                    color: "white",
                  }),
                })}
              >
                QuBIC
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
              Quantifying Behavior, Intelligence, and Culture
            </Typography>
          </Stack>
        </Container>
      </Box>

      <Box paddingTop={3} paddingBottom={8}>
        <Stack
          direction={{ xs: "column", md: "row" }} // Stack items in a column on small screens and row on larger screens
          spacing={2}
          useFlexGap
          sx={{
            alignItems: "stretch", // Ensure that the sections take equal height
            width: "100%",
            paddingTop: "3%",
            paddingBottom: "6%",
            paddingX: "3%",
            height: "100%", // Make sure the stack is taking full available height
          }}
        >
          <Stack
            spacing={2}
            sx={{
              width: { xs: "100%", md: "50%" },
              textAlign: { xs: "center", md: "left" },
              marginTop: { xs: "1%" },
              marginRight: "5%",
              height: "100%", // Ensure this stack takes full height
              flex: 1, // This makes the project section take equal height
            }}
          >
            <Typography
              variant="h1"
              fontWeight="500"
              sx={(theme) => ({
                color: "black",
                fontSize: "clamp(2rem, 7vw, 2.5rem)",
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                alignSelf: "center",
                ...theme.applyStyles("dark", {
                  color: "primary.light",
                }),
              })}
            >
              Our Projects
            </Typography>
            <ProjectCarousel />
          </Stack>

          <Stack
            sx={{
              width: { xs: "100%", md: "50%" },
              height: "100%", // Ensure this stack takes full height
              flex: 1, // This ensures equal height
            }}
          >
            <Testimonials />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}
