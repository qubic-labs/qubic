import React from 'react';
import './JoinUs.css';
import AppTheme from './shared-theme/AppTheme';
import AppAppBar from './marketing-page/components/AppAppBar';

const JoinUs = (props) => {
    return (
        <AppTheme {...props}>
            <AppAppBar />
            <div className="joinus-container">
                <header className="header">
                    <h1>Join Our Lab</h1>
                    <p>We are always looking for passionate and talented individuals to join our team. If you're excited about pushing the boundaries of research and technology, we'd love to hear from you!</p>
                </header>

                <section className="why-join">
                    <h2>Why Join Us?</h2>
                    <ul>
                        <li>Collaborate on cutting-edge research projects</li>
                        <li>Access to state-of-the-art technology and resources</li>
                        <li>Work with a diverse and driven team</li>
                        <li>Contribute to impactful research that makes a difference</li>
                    </ul>
                </section>

                <section className="positions">
                    <h2>Open Positions</h2>
                    <div className="position">
                        <h3>Research Assistant</h3>
                        <p>Assist in experimental design, data collection, and analysis. Ideal for students looking to gain hands-on research experience.</p>
                    </div>
                    <div className="position">
                        <h3>Ph.D. Candidates</h3>
                        <p>Join us as a Ph.D. student to lead innovative research projects in [Lab’s Focus Area]. Strong background in [Field/Skills] is preferred.</p>
                    </div>
                    <div className="position">
                        <h3>Postdoctoral Researcher</h3>
                        <p>Drive independent research in a supportive environment with access to lab resources. Experience in [Lab’s Specialization] is a plus.</p>
                    </div>
                </section>

                <section className="apply-now">
                    <h2>How to Apply</h2>
                    <p>Please send your resume and a cover letter detailing your interest and experience to <a href="mailto:labemail@example.com">labemail@example.com</a>. Include the position you're applying for in the subject line.</p>
                    <p>We look forward to welcoming you to our team!</p>
                </section>
            </div>
        </AppTheme>
    );
};

export default JoinUs;
