import * as React from "react";
import AppAppBar from "../components/NavBar";
import Footer from "../components/Footer";
import AppTheme from "../shared-theme/AppTheme";
import { Box, Typography, Container } from "@mui/material";
import ProjectSections from "../components/ProjectSections";

// Update title, image, and sections as needed. This layout gracefully handles sections without images.
const projectTitle = "New Project";
const projectImage = `${process.env.PUBLIC_URL}/project.jpg`;

const sections = [
	{
		title: "Overview",
		content: [
			"High-level goals and the problem this project addresses.",
			"Primary users and expected impact.",
		],
		image: `${process.env.PUBLIC_URL}/thumbnail.webp`,
		imageCaption: "A conceptual overview of the project scope.",
	},
	{
		title: "Key Objectives",
		content: [
			"Objective 1: Define measurable targets.",
			"Objective 2: Outline a realistic timeline.",
			"Objective 3: Establish evaluation metrics.",
		],
		// No image here on purpose — layout should remain clean.
	},
	{
		title: "Approach & Methods",
		content:
			"Describe the methodology, datasets, and tooling. Include any constraints or assumptions.",
		image: `${process.env.PUBLIC_URL}/people.jpg`,
		imageCaption: "Collaboration and workflow across the team.",
	},
];

export default function ProjectNew(props) {
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
						A concise subtitle explaining what this project is about.
					</Typography>
				</Container>
			</Box>

			<ProjectSections sections={sections} />

			<Footer />
		</AppTheme>
	);
}
