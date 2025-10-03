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
  Zap,
  Info 
} from 'lucide-react';
import { AtAGlance as AtAGlanceType } from '../../../modules/country-guides/types';

interface AtAGlanceProps {
  data: AtAGlanceType;
  countryName?: string;
}

interface TooltipProps {
  content: string;
  children: React.ReactNode;
}

function Tooltip({ content, children }: TooltipProps) {
  return (
    <div className="relative inline-block group">
      <div className="inline-flex items-center gap-1">
        {children}
        <Info className="h-3 w-3 text-black/40" />
      </div>
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-black/90 text-white text-xs rounded-lg shadow-lg z-10 max-w-xs opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
        {content}
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-black/90"></div>
      </div>
    </div>
  );
}

export default function AtAGlance({ data, countryName = 'this country' }: AtAGlanceProps) {
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
      label: 'Employer Contributions (%)', 
      value: data.employerOnCostPct || 'N/A', 
      icon: Percent,
      tooltip: `Mandatory employer contributions in ${countryName} (social security, health, pension, housing, etc.) typically add ${data.employerOnCostPct || '25-30%'} on top of gross salary.`
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
      value: data.hoursPerWeek, 
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
                <span className="text-[10px] font-semibold uppercase tracking-wide text-black/45">
                  {item.tooltip ? (
                    <Tooltip content={item.tooltip}>
                      {item.label}
                    </Tooltip>
                  ) : (
                    item.label
                  )}
                </span>
              </div>
              <div className="text-base font-semibold text-black leading-tight">{item.value}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
