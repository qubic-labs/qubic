import * as React from "react";
import AppAppBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectDescription from "../components/projectDescription";
import AppTheme from "../shared-theme/AppTheme";
import { Box, Typography, Container } from "@mui/material";
import ProjectSections from "../components/ProjectSections";

const projectImage = `${process.env.PUBLIC_URL}/MY_Data.png`;
const projectTitle = 'Missing Melodies';
const sections = [
    { 
        title: 'Broad Objectives: ', 
        content:  [
            'What is the representation of different cultures in music generation research space?',
            'How can we optimize AI models for cross-culture music generation?',
            'How can we better design music oriented evaluation metrics?',
            'What correlations can we derive between different music styles and discover new music styles from musicological perspective?',
        ],
    image: `${process.env.PUBLIC_URL}/MY_Data.png`, // Image for this section
        imageCaption: "Region & Genre wise distribution of music datasets."
    },
    { 
        title: 'RQ1: What is the representation of different cultures in music generation research space?', 
        content:  [
            'South Asian, African, Central Asian, and Middle Eastern music constitute 2.1% of the total dataset collection.',
            'Heavy focus on Classical, Pop and Rock genres with lesser focus on Folk,  Country and Blues.',
            'South Asian, African, Central Asian, and Middle Eastern music constitute 2.4% of the total literature surveyed.',
            'Folk, Hip-hop only comprise 1.3 & 2.2% of the total representation in literature.',
            'Classical music representation is 44% with Pop and Rock also having more than 10% representation.',
        ],
    image: `${process.env.PUBLIC_URL}/musicforall.png`, // Image for this section
        imageCaption: "Genre diversity across different datasets."
    },
    { 
        title: 'RQ2: How can we optimize AI models for cross-culture music generation?', 
        content:  [
            'Proposing cultural adaptation using parameter efficient finetuning techniques across different architecture types.',
            'Experimented by adding adapters to MusicGen & Mustango architectures for cultural style adaptation.',
            'Freezing all modules except the adapters in the models leading to 0.1% trainable parameters.',
            'Finding the optimal configuration of adapters for different dataset sizes across more genres.'
        ],
    image: `${process.env.PUBLIC_URL}/adapter.png`, // Image for this section
        imageCaption: "Adapter settings for cultural music generation for MusicGen & Mustango."
    },
]

export default function ProjectMM(props) {
    return (
        <AppTheme {...props}>
            <AppAppBar />
            <Box
                id="hero"
                sx={{
                    width: "100%",
                    backgroundColor: "white",
                    textAlign: "center",
                    py: 6,
                }}
            >
                <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    {projectImage ? (
                        <Box
                            component="img"
                            src={projectImage}
                            alt={`${projectTitle} cover`}
                            sx={{ width: 120, height: 120, borderRadius: "12px", objectFit: "cover", mb: 2, boxShadow: 1 }}
                        />
                    ) : null}
                    <Typography
                        variant="h2"
                        sx={{ color: "#333", fontSize: "clamp(2.2rem, 5vw, 3rem)", textAlign: "center", fontWeight: 300 }}
                    >
                        {projectTitle}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "text.secondary", mt: 1, maxWidth: 900, px: 2 }}>
                        A study of cultural representation in music AI and methods to improve cross-culture music generation.
                    </Typography>
                </Container>
            </Box>

            <ProjectSections sections={sections} alternate={true}/>

            <Footer />
        </AppTheme>
    );
}
