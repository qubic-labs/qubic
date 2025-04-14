import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { visuallyHidden } from "@mui/utils";
import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";
import Testimonials from "./Testimonials";
import ProjectCarousel from "./Carousel";
import {useState, useEffect} from "react";

const metaValues = ["Meta-Linguistic", "Meta-Valued", "Meta-Cultural", "Meta-Social"];

const StyledBox = styled("div")(({ theme }) => ({
  alignSelf: "center",
  width: "100%",
  height: 500,
  marginTop: theme.spacing(8),
  borderRadius: (theme.vars || theme).shape.borderRadius,
  outline: "6px solid",
  outlineColor: "hsla(220, 25%, 80%, 0.2)",
  border: "1px solid",
  borderColor: (theme.vars || theme).palette.grey[200],
  boxShadow: "0 0 12px 8px hsla(220, 25%, 80%, 0.2)",
  backgroundImage: `url("../../bg.jpg")`,
  backgroundSize: "cover",
  [theme.breakpoints.up("sm")]: {
    marginTop: theme.spacing(10),
    height: 700,
  },
  ...theme.applyStyles("dark", {
    boxShadow: "0 0 24px 12px hsla(210, 100%, 25%, 0.2)",
    backgroundImage: `url(${process.env.TEMPLATE_IMAGE_URL || "https://mui.com"
      }/static/screenshots/material-ui/getting-started/templates/dashboard-dark.jpg)`,
    outlineColor: "hsla(220, 20%, 42%, 0.1)",
    borderColor: (theme.vars || theme).palette.grey[700],
  }),
}));

export default function Hero() {
  const [metaText, setMetaText] = useState(metaValues[0]);

  useEffect(() => {
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
          backgroundImage: `url("${process.env.PUBLIC_URL}/bg.jpg")`,
          backgroundColor: "rgb(0,0,0,0.5)",

          ...theme.applyStyles("dark", {
            filter: "invert(1)",
            backgroundImage: `url("${process.env.PUBLIC_URL}/bg.jpg")`,
          }),
        })}
      >
        <Container
          sx={(theme) => ({
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            pt: { xs: 5, sm: 10 },
            pb: { xs: 15, sm: 25 },

            ...theme.applyStyles("dark", {
              filter: "invert",
            }),
          })}
        >
          <Stack
            spacing={2}
            useFlexGap
            sx={{ alignItems: "center", width: { xs: "100%", sm: "70%" } }}
          >
            <Box
              component="img"
              src="logo_span.svg" // Replace with your image path
              alt="Mission"
              sx={{
                width: { xs: "100%", md: "40%" },
                maxWidth: "50%",
                borderRadius: 2, // Optional styling for image
                display: "block",
              }}
            />
            <Typography
              variant="h1"
              sx={(theme) => ({
                color: "white",
                flexDirection: { xs: "column", sm: "row" },
                alignItems: "center",
                fontSize: "clamp(6rem, 14vw, 6.5rem)",
                textAlign: "center",

                ...theme.applyStyles("dark", {
                  color: "white",
                }),
              })}
            >
              SAMA
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "primary.light",
                fontWeight: "600",
                fontSize: "30px",
                width: { sm: "100%", md: "80%" },
              }}
            >
              Socially-Aware {metaText} AI
            </Typography>
            <Typography
              sx={{
                textAlign: "center",
                color: "white",
                fontWeight: "300",
                fontSize: "30px",
                width: { sm: "100%", md: "80%" },
              }}
            >
              Advancing AI for a More Inclusive World
            </Typography>
          </Stack>
        </Container>
      </Box>
      <Box paddingTop={3} paddingBottom={8}>
        <Stack
          spacing={2}
          useFlexGap
          sx={{
            alignItems: "center",
            width: { xs: "100%", sm: "100%" },
            paddingTop: "3%",
            paddingBottom: "3%",
          }}
        >
          <Typography
            variant="h1"
            sx={(theme) => ({
              display: "flex",
              color: "black",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: "center",
              fontSize: "clamp(3rem, 10vw, 3.5rem)",

              ...theme.applyStyles("dark", {
                color: "primary.light",
              }),
            })}
          >
            Overview
          </Typography>
          <Typography
            sx={{
              textAlign: "center",
              color: "black",
              fontWeight: "300",
              fontSize: "35px",
              width: { sm: "100%", md: "80%" },
            }}
          >
            "Curiouser and curiouser"
          </Typography>
        </Stack>
        <Divider />

        <Stack
          direction={{ xs: "column", md: "row" }} // Stack items in a column on small screens and row on larger screens
          spacing={2}
          useFlexGap
          sx={{
            alignItems: "flex-start",
            width: "100%",
            paddingTop: "3%",
            paddingBottom: "6%",
            paddingX: "3%"
          }}
        >
          <Stack
            spacing={2}
            sx={{
              width: { xs: "100%", md: "50%" },
              textAlign: { xs: "center", md: "left" },
              marginTop: { xs: "1%" },
              marginRight: "5%"
            }}
          >
            <Typography
              variant="h1"
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


          <Testimonials />
        </Stack>
      </Box>
    </Box>
  );
}
