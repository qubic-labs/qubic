const ProjectDescription = ({ projectImage, projectImageCaption, projectTitle, sections }) => {
    return (
        <div style={styles.pageContainer}>
            {sections.map((section, index) => (
                <div key={index} style={{ 
                    ...styles.articleContainer, 
                    flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' // Alternating order
                }}>
                    
                    {/* Left/Right Column: Image */}
                    <div style={styles.imageContainer}>
                        <img src={projectImage} alt={projectTitle} style={styles.image} />
                    </div>

                    {/* Right/Left Column: Text Content */}
                    <div style={styles.textContainer}>
                        <h3 style={styles.sectionTitle}>{section.title}</h3>
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
                </div>
            ))}
        </div>
    );
};

export default ProjectDescription;

// Styles
const styles = {
    pageContainer: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#f9f9f9',
        padding: '10px 0',
        flexDirection: 'column',
    },
    articleContainer: {
        display: 'flex',
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#fff',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        overflow: 'hidden',
    },
    imageContainer: {
        paddingTop: '30px',
        width: '75%',
        height: '80%', // Ensures the image container covers full height
    },
    image: {
        width: '100%',
        height: '100%',
        padding: '10px',
        objectFit: 'cover', // Ensures the image fills the entire box while maintaining aspect ratio
    },
    textContainer: {
        width: '60%',
        padding: '30px',
        paddingLeft: '40px',
        textAlign: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
    },
    title: {
        fontSize: '26px',
        fontWeight: 'bold',
        marginBottom: '20px',
        color: '#222',
    },
    section: {
        marginBottom: '20px',
    },
    sectionTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '5px',
    },
    sectionContent: {
        fontSize: '16px',
        lineHeight: '1.6',
        color: '#555',
    },
    sectionContentList: {
        paddingLeft: '20px',
    },
    sectionContentItem: {
        marginBottom: '8px',
    },

    // Responsive design: Stack columns for small screens
    '@media (max-width: 768px)': {
        articleContainer: {
            flexDirection: 'column',
        },
        imageContainer: {
            width: '100%',
            height: '250px', // Fixed height for mobile screens
        },
        textContainer: {
            width: '100%',
        },
    },
};
