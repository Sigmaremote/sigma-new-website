import { 
  DollarSign, 
  Calendar, 
  Percent, 
  Plane, 
  CalendarDays, 
  Clock, 
  Gift, 
  UserCheck, 
  AlertTriangle, 
  Zap 
} from 'lucide-react';
import { AtAGlance as AtAGlanceType } from '../../../modules/country-guides/types';

interface AtAGlanceProps {
  data: AtAGlanceType;
}

export default function AtAGlance({ data }: AtAGlanceProps) {
  const items = [
    { 
      label: 'Currency', 
      value: data.currency || 'N/A', 
      icon: DollarSign 
    },
    { 
      label: 'Payroll Cycle', 
      value: data.payrollCycle || 'N/A', 
      icon: Calendar 
    },
    { 
      label: 'Employer On-Cost', 
      value: data.employerOnCostPct || 'N/A', 
      icon: Percent 
    },
    { 
      label: 'Annual Leave', 
      value: `${data.annualLeaveDays} days`, 
      icon: Plane 
    },
    { 
      label: 'Public Holidays', 
      value: `${data.publicHolidays} days`, 
      icon: CalendarDays 
    },
    { 
      label: 'Hours/Week', 
      value: `${data.hoursPerWeek} hours`, 
      icon: Clock 
    },
    { 
      label: '13th Salary', 
      value: data.thirteenthSalary, 
      icon: Gift 
    },
    { 
      label: 'Probation Max', 
      value: data.probationMax || 'N/A', 
      icon: UserCheck 
    },
    { 
      label: 'Notice/Severance', 
      value: data.noticeSeveranceShort || 'N/A', 
      icon: AlertTriangle 
    },
    { 
      label: 'Onboarding Time', 
      value: data.onboardingTimeDays || 'N/A', 
      icon: Zap 
    }
  ];

  return (
    <section id="at-a-glance" className="mb-16">
      <h2 className="text-2xl font-semibold text-ink-900 mb-8">At a Glance</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div
              key={index}
              className="flex min-h-[80px] flex-col justify-between rounded-xl border border-black/10 bg-white p-3 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <IconComponent className="h-4 w-4 text-black/55" />
                <span className="text-[10px] font-semibold uppercase tracking-wide text-black/45">{item.label}</span>
              </div>
              <div className="text-base font-semibold text-black leading-tight">{item.value}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
