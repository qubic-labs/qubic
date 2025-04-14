import React from 'react';
import Slider from 'react-slick';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';

const projects = [
    {
        projectTitle: 'Culturally Yours',
        projectImage: 'CY_tool_website.png',
        projectImageCaption: 'Culturally Yours: Our LLM-based reading assistant to bridge cross-cultural communication',
        sections: [
            {
                title: 'Research Questions',
                content: [
                    'Are LLMs "general purpose" and equitable across cultures?',
                    'How culturally competent are LLMs?',
                    'How can we use LLMs for cross-cultural communication?',
                    'How can LLMs aid in learning about culture?',
                ]
            }
        ]
    },
    {
        projectImage: 'MY_Data.png',
        projectTitle: 'Musically Yours',
        sections: [
            {
                title: 'Research Questions: ', content: [
                    'How can we optimize AI models for cross-culture music generation?',
                    'Creating fusion music and discovering new music styles from musicological perspective.',
                    'Music Video Generation, editing and alignment empower with text based music video editing.'
                ]
            }
        ]
    }
    // Add more projects as needed
];

const ProjectCarousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1, // Number of cards visible at once
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024, // Adjust settings for tablets
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 600, // Adjust settings for phones
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div style={{ marginTop: '3.5%', width: "-webkit-fill-available" }}>
            <Slider {...settings}>
                {projects.map((project) => (
                    <div style={styles.pageContainer}>
                        <ProjectDescription
                            key={project.id}
                            projectImage={project.projectImage}
                            projectImageCaption={project.projectImageCaption}
                            projectTitle={project.projectTitle}
                            sections={project.sections}
                        // contributors={project.contributors}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

const ProjectDescription = ({ projectImage, projectImageCaption, projectTitle, sections }) => {
    return (
        <div style={styles.container}>

            {/* Project Title */}
            <h2 style={styles.title}>{projectTitle}</h2>
            <div style={styles.detailsContainer}>
                {/* Project Image */}
                <div style={styles.imageContainer}>
                    <img src={projectImage} alt={projectTitle} style={styles.image} />
                    <figcaption style={styles.imageCaption}>{projectImageCaption}</figcaption> {/* Render caption here */}
                    {/* <h3 style={{justifySelf:"self-start"}}>Contributors</h3> */}
                    {/* <p style={{justifySelf:"self-start"}}>{contributors.join(", ")}</p> */}
                </div>

                {/* Section List */}
                {/* <div style={styles.sectionsContainer}>
                    {sections.map((section, index) => (
                        <div key={index} style={styles.section}>
                            <h3 style={styles.sectionTitle}>{section.title}</h3>
                            <p style={styles.sectionContent}>{section.content}</p>
                        </div>
                    ))}
                </div> */}

                {/* Section List */}
                <div style={styles.sectionsContainer}>
                    {sections.map((section, index) => (
                        <div key={index} style={styles.section}>
                            <h3 style={styles.sectionTitle}>{section.title}</h3>
                            {/* Check if content is an array to render as a list */}
                            {Array.isArray(section.content) ? (
                                <ul style={styles.sectionContentList}>
                                    {section.content.map((item, i) => (
                                        <li key={i} style={styles.sectionContentItem}>{item}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p style={styles.sectionContent}>{section.content}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Styles
const styles = {
    pageContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: '5px',
        backgroundColor: '#f9f9f9',
    },
    container: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10px 0',
        padding: '0px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    },
    detailsContainer: {
        flexDirection: "column",
        display: "flex",
        padding: "5%"
    },
    imageContainer: {
        width: '100%',
        textAlign: 'center',
        marginBottom: '20px',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        maxHeight: '350px',
        objectFit: 'cover',
        borderRadius: '0px',
    },
    imageCaption: {
        marginTop: '8px',
        fontSize: '0.6em',
        color: '#555', // Makes the caption text slightly muted
        textAlign: 'center',
        fontWeight: 'bold'
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        margin: '20px 0',
        textAlign: 'center',
    },
    list: {
        width: '100%',
        listStyleType: 'none',
        padding: 0,
    },
    section: {
        width: '100%',
        marginBottom: '20px',
    },
    sectionTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333',
    },
    sectionContent: {
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#555',
    },

    sectionContentList: {
        paddingLeft: '10px', // Adds padding for list indentation
    },
    sectionContentItem: {
        marginBottom: '2px', // Adds spacing between list items
    },
};


export default ProjectCarousel;
