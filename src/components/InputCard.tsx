import React from 'react';
import type { SalaryToHourlyInput } from '../logic/salaryToHourlyCalculations';

interface InputCardProps {
    values: SalaryToHourlyInput;
    onChange: (field: keyof SalaryToHourlyInput, value: number | boolean) => void;
}

export const InputCard: React.FC<InputCardProps> = ({ values, onChange }) => {
    return (
        <div className="card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {/* Annual Salary */}
                <div>
                    <label htmlFor="annualSalary">Annual Salary ($)</label>
                    <input
                        type="number"
                        id="annualSalary"
                        value={values.annualSalary}
                        onChange={(e) => onChange('annualSalary', parseFloat(e.target.value) || 0)}
                        min="0"
                        step="1000"
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Your total yearly salary before taxes
                    </span>
                </div>

                {/* Hours per Week */}
                <div>
                    <label htmlFor="hoursPerWeek">Hours per Week</label>
                    <input
                        type="number"
                        id="hoursPerWeek"
                        value={values.hoursPerWeek}
                        onChange={(e) => onChange('hoursPerWeek', parseFloat(e.target.value) || 1)}
                        min="1"
                        max="168"
                        step="1"
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Average hours worked per week (typically 40)
                    </span>
                </div>

                {/* Weeks per Year */}
                <div>
                    <label htmlFor="weeksPerYear">Weeks per Year</label>
                    <input
                        type="number"
                        id="weeksPerYear"
                        value={values.weeksPerYear}
                        onChange={(e) => onChange('weeksPerYear', parseFloat(e.target.value) || 1)}
                        min="1"
                        max="52"
                        step="1"
                    />
                    <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                        Weeks worked per year (52 = full year, 50 = 2 weeks unpaid)
                    </span>
                </div>
            </div>
        </div>
    );
};
