import React from 'react';
import type { SalaryToHourlyResult } from '../logic/salaryToHourlyCalculations';

interface BreakdownTableProps {
    result: SalaryToHourlyResult;
}

const formatMoney = (val: number) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(val);
};

export const BreakdownTable: React.FC<BreakdownTableProps> = ({ result }) => {
    const inputRows = [
        { label: 'Annual Salary', value: formatMoney(result.annualSalary), isTotal: false },
        { label: 'Hours per Week', value: `${result.hoursPerWeek} hours`, isTotal: false },
        { label: 'Weeks per Year', value: `${result.weeksPerYear} weeks`, isTotal: false },
        { label: 'Total Hours per Year', value: `${result.totalHoursPerYear.toLocaleString()} hours`, isTotal: false },
    ];

    const breakdownRows = [
        { label: 'Estimated Hourly Rate', value: formatMoney(result.hourlyRate), isTotal: true },
        { label: 'Estimated Daily Pay', value: formatMoney(result.dailyPay), isTotal: false },
        { label: 'Estimated Weekly Pay', value: formatMoney(result.weeklyPay), isTotal: false },
        { label: 'Estimated Biweekly Pay', value: formatMoney(result.biweeklyPay), isTotal: false },
        { label: 'Estimated Monthly Pay', value: formatMoney(result.monthlyPay), isTotal: false },
    ];

    const renderTable = (rows: Array<{ label: string; value: string; isTotal: boolean }>, isLast = false) => (
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9375rem' }}>
            <tbody>
                {rows.map((row, idx) => (
                    <tr key={idx} style={{
                        borderBottom: (isLast && idx === rows.length - 1) ? 'none' : '1px solid var(--color-border)',
                        backgroundColor: idx % 2 === 0 ? 'transparent' : '#F8FAFC'
                    }}>
                        <td style={{ padding: 'var(--space-3) var(--space-6)', color: 'var(--color-text-secondary)' }}>
                            {row.label}
                        </td>
                        <td style={{
                            padding: 'var(--space-3) var(--space-6)',
                            textAlign: 'right',
                            fontWeight: row.isTotal ? 700 : 400,
                            color: row.isTotal ? '#0369A1' : 'inherit'
                        }}>
                            {row.value}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div className="card" style={{ padding: '0' }}>
            {/* Input Summary Section */}
            <div style={{ padding: 'var(--space-4) var(--space-6)', borderBottom: '1px solid var(--color-border)' }}>
                <h3 style={{ fontSize: '1rem' }}>Your Input Summary</h3>
            </div>
            {renderTable(inputRows)}

            {/* Pay Breakdown Section */}
            <div style={{ padding: 'var(--space-4) var(--space-6)', borderBottom: '1px solid var(--color-border)', borderTop: '1px solid var(--color-border)', background: '#F0F9FF' }}>
                <h3 style={{ fontSize: '1rem', color: '#0369A1' }}>Estimated Pay Breakdown</h3>
            </div>
            {renderTable(breakdownRows, true)}
        </div>
    );
};
