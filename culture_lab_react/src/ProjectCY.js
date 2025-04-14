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
            'AI in Multicultural Contexts: Evaluate AI\'s ability to operate across diverse cultural settings.',
            'AI and Cultural Interaction: Develop tools to analyze user-culture interactions.',
            'Cultural Knowledge for Equitable AI: Leverage cultural insights to build fair and inclusive AI.',
            'Empirical Theory of Culture: Test and validate cultural theories empirically.',
        ],
        image: '', // Image for this section
        imageCaption: ""
    },
    { 
        title: 'Cultural Representation in Large Language Models ', 
        content:  [
            'Methods for assessing LLM cultural knowledge.',
            'Interpretability of cultural representations.',
        ],
        image: 'inglehert.jpg', // Image for this section
        imageCaption: ""
    },
    { 
        title: 'Training strategies for cultural competency in LLMs', 
        content:  [
            'Meta-cultural competency as a target skill.',
            'Modeling meta-culture in LLMs.',
            'Novel evaluation frameworks for AI models.',
        ],
        image: '', // Image for this section
        imageCaption: ""
    },
    { 
        title: 'Facilitating cross-cultural communication', 
        content:  [
            '"Culturally Yours" – An AI reading assistant for cultural contexts.',
            'Cross-cultural content adaptation techniques.',
            'Evaluating and addressing cross-cultural harms.',
        ],
        image: 'cy.jpeg', // Image for this section
        imageCaption: ""
    }
]

export default function ProjectCY(props) {
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
                        Culturally Yours
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
                                marginLeft: "4%",
                                marginTop:"2%"
                            }}
                        >
                            <div
                                style={{
                                    flex: 1,
                                    textAlign: "left",
                                    order: 2, // Ensures text comes first on smaller screens
                                    marginLeft: "15%",
                                    width: "max-content",
                                    marginRight: "5%",
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
                                        maxWidth: "500px",
                                        height: "auto",
                                        borderRadius: "8px",
                                        marginLeft: "20px",
                                    }}
                                />
                                <p style={{ fontSize: "0.9rem", color: "#555", fontStyle: "italic", textAlign: "center", marginTop: "3%", maxWidth: "320px" }}>
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
