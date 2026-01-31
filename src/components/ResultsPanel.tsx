import React from 'react';
import type { SalaryToHourlyResult } from '../logic/salaryToHourlyCalculations';

interface ResultsPanelProps {
    result: SalaryToHourlyResult;
}

const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(val);
};

export const ResultsPanel: React.FC<ResultsPanelProps> = ({ result }) => {
    return (
        <div className="card" style={{
            background: 'linear-gradient(to bottom, #F0F9FF, #E0F2FE)',
            borderColor: '#7DD3FC',
            boxShadow: '0 2px 8px -2px rgba(0, 0, 0, 0.1)'
        }}>
            <div className="text-center">
                <h2 style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', marginBottom: 'var(--space-2)' }}>
                    Estimated Hourly Rate
                </h2>
                <div style={{
                    fontSize: '2.75rem',
                    fontWeight: 800,
                    color: '#0369A1',
                    lineHeight: 1,
                    letterSpacing: '-0.025em'
                }}>
                    {formatCurrency(result.hourlyRate)}
                </div>
                <div style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginTop: 'var(--space-2)' }}>
                    {result.message}
                </div>
            </div>

            <hr style={{
                margin: 'var(--space-6) 0',
                border: 'none',
                borderTop: '1px solid #7DD3FC'
            }} />

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-2)', textAlign: 'center' }}>
                <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>WEEKLY PAY</div>
                    <div style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                        {formatCurrency(result.weeklyPay)}
                    </div>
                </div>
                <div style={{ borderLeft: '1px solid #7DD3FC', borderRight: '1px solid #7DD3FC' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>MONTHLY PAY</div>
                    <div style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                        {formatCurrency(result.monthlyPay)}
                    </div>
                </div>
                <div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>BIWEEKLY</div>
                    <div style={{ fontWeight: 700, fontSize: '1.125rem' }}>
                        {formatCurrency(result.biweeklyPay)}
                    </div>
                </div>
            </div>
        </div>
    );
};
