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
            projectImage: '/MY_Data.png',
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
        <div>
        {/* //     {projects.map((project, index) => ( */}
        {/* //         <ProjectDescription */}
        {/* //             key={index} */}
        {/* //             projectImage={project.projectImage} */}
        {/* //             projectImageCaption={project.projectImageCaption} */}
        {/* //             projectTitle={project.projectTitle} */}
        {/* //             sections={project.sections} */}
        {/* //             // contributors={project.contributors} */}
        {/* //         /> */}
        {/* //     ))} */}
        </div>
    );
};



export default ProjectPage;
