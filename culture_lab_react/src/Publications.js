import AppAppBar from "./marketing-page/components/AppAppBar";
import { Typography, Box, Container, Stack } from "@mui/material";
import AppTheme from "./shared-theme/AppTheme";
import PublicationDetails from "./marketing-page/components/publicationDetails";
import Footer from "./marketing-page/components/Footer";
import Divider from "@mui/material/Divider";
import {MdSchool} from "react-icons/md";


export default function Publication(props) {
  return (
    <AppTheme {...props}>
      <AppAppBar bgColor={props.bgColor}/>
      <Box>
        <Box
          id="hero"
          sx={(theme) => ({
            backgroundPosition: "center",
            height: "100vh",
            minHeight: "300px" /* Adjust to preferred height */,
            width: "100%",
            height: "100%",
            padding: "0px",
            backgroundImage: `url("${process.env.PUBLIC_URL}/bg3.png")`,

            ...theme.applyStyles("dark", {
              filter: "invert(1)",
              backgroundImage: `url("${process.env.PUBLIC_URL}/publication.jpg")`,
            }),
          })}
        >
          <Container
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              minWidth: "100%",
              pt: { xs: 5, sm: 10 },
              backgroundImage: `url("${process.env.PUBLIC_URL}/bg3.png")`,
              ...theme.applyStyles("dark", {
                filter: "invert",
              }),
            })}
          >
            <Stack
              spacing={2}
              useFlexGap
              sx={{ alignItems: "center", width: { xs: "100%", sm: "100%" } }}
            >
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
                Publications
                <MdSchool size={50} style={{marginBottom: "5%"}}/>
              </Typography>
            </Stack>
          </Container>
        </Box>
        <PublicationDetails bgColor={props.bgColor}/>
      </Box>
      <Divider style={{marginTop: "10%"}} />
      <Footer />
    </AppTheme>
  );
}
