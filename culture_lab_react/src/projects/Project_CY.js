import * as React from "react";
import AppAppBar from "../components/NavBar";
import Footer from "../components/Footer";
import ProjectDescription from "../components/projectDescription";
import AppTheme from "../shared-theme/AppTheme";
import { Box, Typography, Container } from "@mui/material";
import ProjectSections from "../components/ProjectSections";

const projectImage = `${process.env.PUBLIC_URL}/inglehert.jpg`;
// set to `` if it should be hidden
const projectTitle = 'Culturally Yours';
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
    image: `${process.env.PUBLIC_URL}/inglehert.jpg`, // Image for this section
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
    image: `${process.env.PUBLIC_URL}/cy.jpeg`, // Image for this section
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
                    <Typography variant="body1" sx={{ color: "text.secondary", mt: 1, maxWidth: 900 }}>
                        Facilitating cross-cultural communication and empowering culturally-aware AI.
                    </Typography>
                </Container>
            </Box>

            <ProjectSections sections={sections} alternate={true} startWithImageLeft={true} enableLightbox={true}/>

            <Footer />
        </AppTheme>
    );
}
