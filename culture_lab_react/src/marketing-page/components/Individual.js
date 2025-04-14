import { useParams } from "react-router-dom";
import peopleData from "./peopleData.json"; // Import the JSON file
import { Card, CardContent, CardMedia, Typography, Box, Divider, Container } from "@mui/material";
import AppAppBar from "./AppAppBar";
import AppTheme from "./../../shared-theme/AppTheme";
import Footer from "./Footer";

const Individual = (props) => {
  const { category, id } = useParams(); // Get the dynamic ID and category from the URL

  // Find the corresponding person from the category
  let person = null;
  if (category && peopleData[category]) {
    person = peopleData[category].find((member) => member.name === id) || null;
  }

  // If the person is not found, show a default message
  if (!person) {
    person = { name: "Unknown", bio: "No information available." };
  }

  return (
    <AppTheme {...props}>
      <AppAppBar />
      <Box
        id="hero"
        sx={(theme) => ({
          width: "100%",
          height: "100%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundColor: "#065171",
          position: "relative", // Make the box relative for absolute positioning of the card
          ...theme.applyStyles("dark", {
            filter: "invert(1)",
            backgroundImage: `url("${process.env.PUBLIC_URL}/people.jpg")`,
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
            ...theme.applyStyles("dark", { filter: "invert" }),
          })}
        >
          {/* Person's Bio (Optional, to be displayed later)
          <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
            <Typography variant="body1" color="text.primary">
              {person.bio || "No bio available."}
            </Typography>
          </Box> */}
        </Container>

        {/* Card Overlapping at the Bottom Left */}
        <Card
          sx={{
            position: "absolute", // Position the card absolutely
            bottom: -100, // Place it near the bottom
            left: 100, // Place it near the left
            maxWidth: 500,
            zIndex: 10, // Ensure it stays above other elements
            boxShadow: 5, // Optional: Add shadow for better visibility
            display: "flex",
            flexDirection: "row",
            marginLeft: "10%",
            alignItems: "center",
            justifyContent: "space-between",
            width: "40%"
          }}
        >
          <CardContent style={{ marginLeft: "8%", }}>
            <Typography variant="h4" component="div" gutterBottom>
              {person.name}
            </Typography>
          </CardContent>
          <CardMedia
            component="img"
            sx={{ maxHeight: 150, objectFit: "contain", marginRight: "3%", width: "max-content", borderRadius: "2%" }}
            image={`${process.env.PUBLIC_URL}/${person.profileImage}`}
            alt={person.name}
          />
        </Card>
      </Box>
      <Divider style={{ marginTop: "10%" }} />
      <Box style={{ display: "flex", padding: "2% 18%" }}>
        <Box sx={{ flex: 1 }}>
          <Box style={{display: "flex", flexDirection: "row"}}>
            <Typography variant="h4" color="text.primary">
              About
            </Typography>
            {/* Icon Box */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                ml: 4,
                gap: 1,
              }}
            >
              {person.github && (
                <a href={person.github} target="_blank" rel="noopener noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/github.svg`} alt="GitHub" width="24" />
                </a>
              )}
              {person.linkedin && (
                <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/linkedin.svg`} alt="LinkedIn" width="24" />
                </a>
              )}
              {person.scholar && (
                <a href={person.scholar} target="_blank" rel="noopener noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/scholar.svg`} alt="Google Scholar" width="24" />
                </a>
              )}
              {person.website && (
                <a href={person.website} target="_blank" rel="noopener noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/web.svg`} alt="Website" width="24" />
                </a>
              )}
              {person.twitter && (
                <a href={person.twitter} target="_blank" rel="noopener noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/twitter.svg`} alt="Website" width="24" />
                </a>
              )}
            </Box>
          </Box>
          <Typography variant="body1" color="text.primary" style={{ marginTop: "1%" }}>
            {person.bio}
          </Typography>
        </Box>
      </Box>
      <Divider />
      <Footer />
    </AppTheme>
  );
};

export default Individual;
