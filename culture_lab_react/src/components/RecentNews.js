import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

const newsItems = [
  {
    date: "March 2025",
    title:
      "New blog post: Culturally Yours — A new tool for understanding cultural references in text",
    href: "https://mbzuai.ac.ae/news/culturally-yours-a-new-tool-for-understanding-cultural-references-in-text/",
  },
  {
    date: "February 2025",
    title:
      "Preprint: Reading between the Lines — Can LLMs Help Bridge Cross-Cultural Communication Gaps? (NAACL 2025)",
    href: "https://arxiv.org/abs/2502.09636",
  },
  {
    date: "February 2025",
    title:
      "Preprint: Meta-Cultural Competence — Climbing the Right Hill of Cultural Awareness (NAACL 2025)",
    href: "https://arxiv.org/abs/2502.09637",
  },
  {
    date: "February 2025",
    title:
      "Preprint: SMAB — MAB-based Word Sensitivity Estimation & Applications in Adversarial Text Generation (NAACL 2025)",
    href: "https://arxiv.org/abs/2502.07101",
  },
  {
    date: "February 2025",
    title:
      "Preprint: Music for All — Exploring Multicultural Representations in Music Generation Models (NAACL 2025)",
    href: "https://arxiv.org/abs/2502.07328",
  },
  {
    date: "January 2025",
    title: "Four papers accepted at NAACL 2025",
    href: "https://2025.naacl.org/",
  },
  {
    date: "November 2024",
    title:
      "COLING Demos 2025: CULTURALLY YOURS (demo paper)",
    href: "https://aclanthology.org/2025.coling-demos.21/",
  },
  {
    date: "November 2024",
    title:
      "Blog: Culture and bias in LLMs — Defining the challenge and mitigating risks",
    href: "https://mbzuai.ac.ae/news/culture-and-bias-in-llms-defining-the-challenge-and-mitigating-risks/",
  },
  {
    date: "November 2024",
    title:
      "Outstanding Paper Award (EMNLP 2024): The Zeno’s Paradox of ‘Low-Resource’ Languages",
    href: "https://aclanthology.org/2024.emnlp-main.983/",
  },
  {
    date: "November 2024",
    title:
      "Preprint: Missing Melodies — AI Music Generation and its “Nearly” Complete Omission of the Global South",
    href: "https://arxiv.org/abs/2412.04100",
  },
];

export default function RecentNewsMinimal() {
  return (
    <Container
      id="recent-news"
      sx={{
        py: { xs: 4, md: 6 },
        bgcolor: "background.default",
      }}
    >
      <Typography
        component="h2"
        variant="h4"
        sx={{ fontWeight: 600, mb: 2, letterSpacing: 0.2 }}
      >
        Recent Releases & News
      </Typography>

      <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
        {newsItems.map((item, idx) => (
          <Box component="li" key={idx}>
            <Grid container spacing={2} alignItems="baseline" sx={{ py: 2 }}>
              <Grid item xs={12} sm={4} md={3}>
                <Typography
                  variant="body2"
                  sx={{ fontWeight: 600, color: "text.secondary" }}
                >
                  {item.date}
                </Typography>
              </Grid>

              <Grid item xs={12} sm={8} md={9}>
                <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="hover"
                    sx={{
                      color: "text.primary",
                      "&:hover": { opacity: 0.8 },
                    }}
                  >
                    {item.title}
                  </Link>
                </Typography>
              </Grid>
            </Grid>

            {idx < newsItems.length - 1 && <Divider sx={{ my: 0 }} />}
          </Box>
        ))}
      </Box>

      {/* Read More Button */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Button
          variant="outlined"
          href="/news" // 🔗 change this to your desired page
          sx={{
            textTransform: "none",
            fontWeight: 500,
          }}
        >
          Read More
        </Button>
      </Box>
    </Container>
  );
}
