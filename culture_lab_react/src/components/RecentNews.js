import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/system";
import { Link } from "@mui/material";

const userTestimonials = [
  {
    testimonial:
      "<strong>[March, 2025]</strong>: New blog post published on <a href='https://mbzuai.ac.ae/news/culturally-yours-a-new-tool-for-understanding-cultural-references-in-text/' target='_blank' rel='noopener noreferrer'>Culturally Yours: A new tool for understanding cultural references in text</a>.",
  },
  {
    testimonial:
      "<strong>[February, 2025]</strong>: Pre-print of our NAACL paper <a href='https://arxiv.org/abs/2502.09636' target='_blank' rel='noopener noreferrer'>Reading between the Lines: Can LLMs Help Bridge Cross-Cultural Communication Gaps?</a> is now available.",
  },
  {
    testimonial:
      "<strong>[February, 2025]</strong>: Pre-print of our NAACL paper <a href='https://arxiv.org/abs/2502.09637' target='_blank' rel='noopener noreferrer'>Meta-Cultural Competence: Climbing the Right Hill of Cultural Awareness</a> is now available.",
  },
  {
    testimonial:
      "<strong>[February, 2025]</strong>: Pre-print of our NAACL paper <a href='https://arxiv.org/abs/2502.07101' target='_blank' rel='noopener noreferrer'>SMAB: MAB based word Sensitivity Estimation Framework and its Applications in Adversarial Text Generation</a> is now available.",
  },
  {
    testimonial:
      "<strong>[February, 2025]</strong>: Pre-print of our NAACL paper <a href='https://arxiv.org/abs/2502.07328' target='_blank' rel='noopener noreferrer'>Music for All: Exploring Multicultural Representations in Music Generation Models.",
  },
  {
    testimonial:
      "<strong>[January, 2025]</strong>: Four papers from the lab accepted at <a href='https://2025.naacl.org/' target='_blank' rel='noopener noreferrer'>NAACL 2025</a>!!",
  },
  {
    testimonial:
      "<strong>[November, 2024]</strong>: Our paper <a href='https://aclanthology.org/2025.coling-demos.21/' target='_blank' rel='noopener noreferrer'>CULTURALLY YOURS</a> accepted at COLING Demos 2025.",
  },
  {
    testimonial:
      "<strong>[November, 2024]</strong>: New blog post published on <a href='https://mbzuai.ac.ae/news/culture-and-bias-in-llms-defining-the-challenge-and-mitigating-risks/' target='_blank' rel='noopener noreferrer'> Culture and bias in LLMs: Defining the challenge and mitigating risks.",
  },
  {
    testimonial:
      "<strong>[November, 2024]</strong>: Our paper <a href='https://aclanthology.org/2024.emnlp-main.983/' target='_blank' rel='noopener noreferrer'>The Zeno’s Paradox of ‘Low-Resource’ Languages</a> wins Outstanding Paper Award at EMNLP 2024.",
  },
  {
    testimonial:
      "<strong>[November, 2024]</strong>: Our paper <a href='https://arxiv.org/abs/2412.04100' target='_blank' rel='noopener noreferrer'>Missing Melodies: AI Music Generation and its \"Nearly\" Complete Omission of the Global South is now available on Arxiv.",
  }
];

const whiteLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628e8573c43893fe0ace_Sydney-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d520d0517ae8e8ddf13_Bern-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f46794c159024c1af6d44_Montreal-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e891fa22f89efd7477a_TerraLight.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a09d1f6337b1dfed14ab_colorado-white.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5caa77bf7d69fb78792e_Ankara-white.svg",
];

const darkLogos = [
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560628889c3bdf1129952dc_Sydney-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f4d4d8b829a89976a419c_Bern-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f467502f091ccb929529d_Montreal-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/61f12e911fa22f2203d7514c_TerraDark.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/6560a0990f3717787fd49245_colorado-black.svg",
  "https://assets-global.website-files.com/61ed56ae9da9fd7e0ef0a967/655f5ca4e548b0deb1041c33_Ankara-black.svg",
];

const logoStyle = {
  width: "64px",
  opacity: 0.3,
};

export default function Testimonials() {
  const theme = useTheme();
  const logos = theme.palette.mode === "light" ? darkLogos : whiteLogos;

  return (
    <Container
      id="testimonials"
      sx={{
        pt: { xs: 4, sm: 2.6 },
        pb: { xs: 8, sm: 3 },
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 3, sm: 3 },
      }}
    >
      <Box
        sx={{
          width: { sm: "100%", md: "100%" },
          textAlign: { sm: "left", md: "center" },
        }}
      >
        <Typography
          fontWeight="500"
          fontSize={{ sm: "2rem", md: "2rem", xs: "2rem" }}
          color="black"
          gutterBottom
        >
          Recent Releases & News
        </Typography>
      </Box>
      <Box
        sx={{
          width: "100%",
          maxHeight: "700px",
          overflowY: "auto",
          // flexDirection: "column",
          // gap: "100px"
        }}
      >
        <Grid container spacing={2}>
          {userTestimonials.map((testimonial, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={6}
              key={index}
              sx={{ display: "flex", maxHeight: "150px"}}
            >
              <Card
                variant="outlined"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  flexGrow: 1,
                  backgroundColor: "#e3f2fd",
                  maxWidth: "97%",
                  maxHeight: "100%",
                }}
              >
                <CardContent>
                  <Typography
                    variant="body1"
                    gutterBottom
                    sx={{ color: "text.secondary" }}
                    component="div"
                    dangerouslySetInnerHTML={{
                      __html: testimonial.testimonial,
                    }}
                  />
                </CardContent>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <CardHeader
                    title={
                      <Typography variant="h6" component="div" fontWeight="200">
                        <Link
                          href="/read-more"
                          underline="hover"
                          style={{ marginLeft: "8px", fontWeight: "200" }}
                        >
                          {/* Read More */}
                        </Link>
                      </Typography>
                    }
                  />
                </Box>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
