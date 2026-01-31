import React from 'react';
import type { SalaryToHourlyInput } from '../logic/salaryToHourlyCalculations';

interface ScenarioControlsProps {
    values: SalaryToHourlyInput;
    onChange: (field: keyof SalaryToHourlyInput, value: number | boolean) => void;
}

export const ScenarioControls: React.FC<ScenarioControlsProps> = ({ values, onChange }) => {
    const salaryOptions = [
        { label: '$40,000', value: 40000 },
        { label: '$60,000', value: 60000 },
        { label: '$80,000', value: 80000 },
        { label: '$100,000', value: 100000 },
    ];

    const hoursOptions = [
        { label: '35 hrs', value: 35 },
        { label: '40 hrs', value: 40 },
        { label: '45 hrs', value: 45 },
        { label: '50 hrs', value: 50 },
    ];

    return (
        <div className="card">
            <h3 style={{ marginBottom: 'var(--space-4)' }}>Quick Adjustments</h3>

            {/* Salary Quick Select */}
            <div style={{ marginBottom: 'var(--space-4)' }}>
                <label style={{ marginBottom: 'var(--space-2)' }}>Annual Salary</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    {salaryOptions.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => onChange('annualSalary', option.value)}
                            style={{
                                flex: 1,
                                padding: 'var(--space-2) var(--space-3)',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                border: '1px solid',
                                borderColor: values.annualSalary === option.value ? 'var(--color-primary)' : 'var(--color-border)',
                                borderRadius: 'var(--radius-md)',
                                background: values.annualSalary === option.value ? 'var(--color-primary)' : 'transparent',
                                color: values.annualSalary === option.value ? '#fff' : 'var(--color-text-primary)',
                                cursor: 'pointer'
                            }}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Hours Quick Select */}
            <div>
                <label style={{ marginBottom: 'var(--space-2)' }}>Hours per Week</label>
                <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                    {hoursOptions.map((option) => (
                        <button
                            key={option.value}
                            type="button"
                            onClick={() => onChange('hoursPerWeek', option.value)}
                            style={{
                                flex: 1,
                                padding: 'var(--space-2) var(--space-3)',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                border: '1px solid',
                                borderColor: values.hoursPerWeek === option.value ? 'var(--color-primary)' : 'var(--color-border)',
                                borderRadius: 'var(--radius-md)',
                                background: values.hoursPerWeek === option.value ? 'var(--color-primary)' : 'transparent',
                                color: values.hoursPerWeek === option.value ? '#fff' : 'var(--color-text-primary)',
                                cursor: 'pointer'
                            }}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
};
