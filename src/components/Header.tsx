import React from 'react';

export const Header: React.FC = () => {
    return (
        <header style={{ textAlign: 'center' }}>
            <h1>Salary to Hourly Calculator (2026)</h1>
            <p style={{ color: 'var(--color-text-secondary)', marginTop: 'var(--space-2)' }}>
                Convert annual salary into hourly pay estimates
            </p>
        </header>
    );
};
