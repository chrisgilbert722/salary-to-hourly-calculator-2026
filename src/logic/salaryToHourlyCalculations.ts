export interface SalaryToHourlyInput {
    annualSalary: number;
    hoursPerWeek: number;
    weeksPerYear: number;
}

export interface SalaryToHourlyResult {
    hourlyRate: number;
    weeklyPay: number;
    monthlyPay: number;
    annualSalary: number;
    hoursPerWeek: number;
    weeksPerYear: number;
    totalHoursPerYear: number;
    dailyPay: number;
    biweeklyPay: number;
    message: string;
}

export function calculateSalaryToHourly(input: SalaryToHourlyInput): SalaryToHourlyResult {
    const annualSalary = Math.max(0, input.annualSalary);
    const hoursPerWeek = Math.max(1, Math.min(168, input.hoursPerWeek));
    const weeksPerYear = Math.max(1, Math.min(52, input.weeksPerYear));

    const totalHoursPerYear = hoursPerWeek * weeksPerYear;
    const hourlyRate = totalHoursPerYear > 0 ? annualSalary / totalHoursPerYear : 0;
    const weeklyPay = weeksPerYear > 0 ? annualSalary / weeksPerYear : 0;
    const monthlyPay = annualSalary / 12;
    const dailyPay = weeklyPay / 5; // Assuming 5 work days per week
    const biweeklyPay = weeklyPay * 2;

    // Generate message
    let message: string;
    if (annualSalary === 0) {
        message = 'Enter your annual salary to calculate';
    } else if (hourlyRate >= 100) {
        message = `Based on ${hoursPerWeek} hours/week for ${weeksPerYear} weeks`;
    } else if (hourlyRate >= 50) {
        message = `Working ${hoursPerWeek} hours/week, ${weeksPerYear} weeks/year`;
    } else {
        message = `Estimated based on ${totalHoursPerYear.toLocaleString()} hours per year`;
    }

    return {
        hourlyRate,
        weeklyPay,
        monthlyPay,
        annualSalary,
        hoursPerWeek,
        weeksPerYear,
        totalHoursPerYear,
        dailyPay,
        biweeklyPay,
        message
    };
}
