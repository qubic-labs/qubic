import * as React from "react";
import AppAppBar from "./marketing-page/components/AppAppBar";
import Footer from "./marketing-page/components/Footer";
import ProjectDescription from "./marketing-page/components/projectDescription";
import AppTheme from "./shared-theme/AppTheme";
import { Box, Typography, Container, Divider } from "@mui/material";

const projectImage = '/MY_Data.png';
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
        image: 'MY_Data.png', // Image for this section
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
        image: 'musicforall.png', // Image for this section
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
        image: 'adapter.png', // Image for this section
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
                    padding: "40px 0",
                }}
            >
                <Container sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <Typography
                        variant="h1"
                        sx={{
                            color: "#555",
                            fontSize: "clamp(3rem, 6vw, 4rem)",
                            textAlign: "center",
                            fontWeight: "300",
                        }}
                    >
                        Missing Melodies
                    </Typography>
                </Container>
            </Box>

            {/* Project description section with image on the left and text wrapping around */}
            <Container maxWidth={false} sx={{ margin: "1px 0" }}>
                {sections.map((section, index) => (
                    <div key={index} style={{ display: "flex", flexDirection: "row", alignItems: "start" }}>
                        {/* Image and text section */}
                        <div
                            style={{
                                display: "flex",
                                alignItems: "start",
                                justifyContent: "space-between",
                                width: "100%",
                                flexDirection: "row", // Default for smaller screens
                                marginLeft: "5%",
                                marginTop:"2%"
                            }}
                        >
                            <div
                                style={{
                                    flex: 1,
                                    textAlign: "left",
                                    order: 2, // Ensures text comes first on smaller screens
                                    marginLeft: "5%",
                                    width: "max-content",
                                    marginRight: "5%"
                                }}
                            >
                                <Typography variant="h4" style={{ fontWeight: "200", color: "#333" }}>
                                    {section.title}
                                </Typography>
                                <ul style={{ paddingLeft: "20px", color: "#555" }}>
                                    {section.content.map((item, idx) => (
                                        <li key={idx}>
                                            <Typography variant="body1">{item}</Typography>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div style={{ flexShrink: 0, order: 1 }}>
                                <img
                                    src={section.image}
                                    alt="Project"
                                    style={{
                                        maxWidth: "600px",
                                        height: "auto",
                                        borderRadius: "8px",
                                        marginLeft: "20px",
                                    }}
                                />
                                <p style={{ fontSize: "0.9rem", color: "#555", fontStyle: "italic", textAlign: "center", marginTop: "3%" }}>
                                    {section.imageCaption}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </Container>

            <Divider sx={{ margin: "40px 0" }} />

            <Footer />
        </AppTheme>
    );
}
