import React from 'react';

export const SEOText: React.FC = () => {
    return (
        <div className="card" style={{ background: '#F8FAFC' }}>
            <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)', lineHeight: 1.7 }}>
                This salary to hourly calculator converts annual salary into estimated hourly, weekly,
                and monthly pay amounts. Calculations are based on the hours worked per week and weeks
                worked per year that you provide. These figures are estimates only and do not account
                for taxes, benefits, overtime, or other deductions. Actual take-home pay will vary.
                This calculator is for informational purposes and does not constitute financial guidance.
            </p>
        </div>
    );
};
