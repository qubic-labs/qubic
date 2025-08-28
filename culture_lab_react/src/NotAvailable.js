import React from 'react';
import './UnderConstruction.css';
import AppAppBar from './components/NavBar';
import AppTheme from './shared-theme/AppTheme';

export default function NotAvailable(props) {
    return (
        <AppTheme {...props}>
            <AppAppBar />
            <UnderConstruction />
        </AppTheme>
    )
}

const UnderConstruction = () => {
    return (
        <div className="construction-container">
            <div className="construction-sign">
                <div className="crane-icon">🏗️</div>
                <h1>Page Under Construction</h1>
                <p>We’re working hard to bring this page to life. Please check back soon!</p>
            </div>
        </div>
    );
};

