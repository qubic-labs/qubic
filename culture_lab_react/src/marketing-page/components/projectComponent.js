import React from 'react';

const ProjectPage = () => {
    // Array of projects, each with its own image, title, and sections
    const projects = [
        {
            projectTitle: 'CULTURALLY YOURS',
            projectImage: 'CY_tool_website.png',
            projectImageCaption: 'Culturally Yours: Our LLM-based reading assistant to bridge cross-cultural communication',
            sections: [
                {
                    title: 'Research Questions we ask !!', 
                    content: [
                        'Are LLMs "general purpose" and equitable across cultures?',
                        'How culturally competent are LLMs?',
                        'How can we use LLMs for cross-cultural communication?',
                        'How can LLMs aid in learning about culture?',
                    ]
                },
                {
                    title: 'How are we trying to solve?',
                    content: [
                        'LLMs to bridge cross-cultural communication',
                        'LLMs for machine translation in medical domain',
                        'LLMs to study culture at scale'
                    ]
                },
            ]
        },
        {
            projectImage: 'MY_Data.png',
            projectTitle: 'MUSICALLY YOURS',
            sections: [
                { title: 'Research Questions: ', content:  [
                    'How can we optimize AI models for cross-culture music generation?',
                    'Creating fusion music and discovering new music styles from musicological perspective.',
                    'Music Video Generation, editing and alignment empower with text based music video editing.'
                ]},
                { title: 'Unique Value Proposition', content: [
                    'We aim to democratize music production with improved collaboration between AI and humans.',
                    'Streamlining the music production process to optimize large-scale music generation.' ]},
            ]
        },
        {
            projectImage: 'https://via.placeholder.com/800x400.png?text=Project+2+Image',
            projectTitle: 'Ethically Yours',
            sections: [
                {
                    title: 'Introduction & Overview', 
                    content: 'A project focused on sustainable practices and reducing carbon footprint.' 
                },
                { 
                    title: 'Unique Value Proposition', 
                    content: 'Encourages eco-friendly initiatives with long-term benefits.' 
                },
                {
                    title: 'Impacts & Cost Benefits', 
                    content: 'Reduces costs through efficient resource management.'
                },
            ]
        },
        {
            projectImage: 'https://via.placeholder.com/800x400.png?text=Project+2+Image',
            projectTitle: 'Linguistically Yours',
            sections: [
                { title: 'Introduction & Overview', content: 'A project focused on sustainable practices and reducing carbon footprint.' },
                { title: 'Unique Value Proposition', content: 'Encourages eco-friendly initiatives with long-term benefits.' },
                { title: 'Impacts & Cost Benefits', content: 'Reduces costs through efficient resource management.' },
            ]
        },
        // Add more projects as needed
    ];

    return (
        <div style={styles.pageContainer}>
            {projects.map((project, index) => (
                <ProjectDescription
                    key={index}
                    projectImage={project.projectImage}
                    projectImageCaption={project.projectImageCaption}
                    projectTitle={project.projectTitle}
                    sections={project.sections}
                    // contributors={project.contributors}
                />
            ))}
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
        alignItems: 'center',
        padding: '5px',
        backgroundColor: '#f9f9f9',
    },
    container: {
        display: 'flex',
        width: '80%',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '10px 0',
        padding: '1px',
        border: '1px solid #ddd',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    },
    detailsContainer: {
        flexDirection: "row-reverse",
        display: "flex",
        padding: "5%"
    },
    imageContainer: {
        padding: '5%',
        paddingRight: '1%',
        paddingTop: '2.5%',
        width: '60%',
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

export default ProjectPage;
