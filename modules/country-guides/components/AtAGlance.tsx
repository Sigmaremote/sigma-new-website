import { AtAGlance as AtAGlanceType } from '../types';

interface AtAGlanceProps {
  data: AtAGlanceType;
}

export default function AtAGlance({ data }: AtAGlanceProps) {
  const items = [
    { label: 'Currency', value: data.currency },
    { label: 'Payroll Cycle', value: data.payrollCycle },
    { label: 'Employer On-Cost', value: data.employerOnCostPct || 'N/A' },
    { label: 'Annual Leave', value: `${data.annualLeaveDays} days` },
    { label: 'Public Holidays', value: `${data.publicHolidays} days` },
    { label: 'Hours/Week', value: `${data.hoursPerWeek} hours` },
    { label: '13th Salary', value: data.thirteenthSalary },
    { label: 'Probation Max', value: data.probationMax || 'N/A' },
    { label: 'Notice/Severance', value: data.noticeSeveranceShort || 'N/A' },
    { label: 'Onboarding Time', value: data.onboardingTimeDays || 'N/A' }
  ];

  return (
    <div className="bg-white rounded-2xl border border-black/5 p-6">
      <h2 className="text-xl font-semibold text-black mb-6">At-a-Glance</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col">
            <span className="text-sm text-black/60 mb-1">{item.label}</span>
            <span className="text-sm font-medium text-black">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
