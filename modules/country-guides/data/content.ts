import { CountryGuideContent } from '../types';

export const countryContent: Record<string, CountryGuideContent> = {
  mexico: {
    slug: 'mexico',
    name: 'Mexico',
    region: 'North America',
    hero: {
      title: 'Hiring in Mexico: Payroll, Compliance, and Employer Costs',
      subtitle: 'Navigate Mexican employment law with confidence'
    },
    intro: 'Mexico offers a robust talent pool with competitive costs and favorable time zones for North American companies. Understanding local employment regulations, social security contributions, and termination requirements is crucial for compliant hiring. Mexican labor law provides strong worker protections, requiring careful attention to probation periods, severance calculations, and mandatory benefits.',
    minimumWage: {
      dailyRate: 'MXN 278.80 per day (USD ~$14)',
      monthlyRate: 'MXN 8,364/month, based on a 48-hour week (reducing to 44 hours/week effective July 15, 2025)',
      northernBorder: 'MXN 419.88/day in Northern Border Zone',
      source: 'Federal Labor Law & CONASAMI (2025)'
    },
    atAGlance: {
      currency: 'Mexican Peso (MXN)',
      payrollCycle: 'Semi-monthly',
      employerOnCostPct: '~25-30%',
      annualLeaveDays: 12,
      publicHolidays: 7,
      hoursPerWeek: '44 hours',
      thirteenthSalary: 'Yes',
      probationMax: '30 days',
      noticeSeveranceShort: '3 months salary',
      onboardingTimeDays: '3 days'
    },
    hiringOptions: {
      contractors: 'Independent contractors can be engaged with proper classification. Ensure clear scope of work and avoid direct supervision to maintain contractor status.',
      eor: 'Employer of Record services provide full compliance without entity setup. Ideal for testing markets or small teams with complete legal protection.',
      ownEntity: 'Establishing a Mexican subsidiary offers full control but requires significant legal and administrative setup, typically 2-4 months.'
    },
    employerCostsIntro: 'Mexican employers face various mandatory contributions beyond base salary. These costs vary by region and employee classification. Estimates based on 2025 market data (e.g., Glassdoor, SHRM). Actual costs vary by role/location.',
    costTable: [
      {
        scenario: 'Software Engineer',
        grossUSDExample: 35000,
        employerOnCostPct: '25-30%',
        monthlyEmployerTotalUSD: '$43,750-$45,500',
        timeToOnboard: '3 days',
        notes: 'IMSS 20.4%, INFONAVIT 5%, disability 1.75%'
      },
      {
        scenario: 'Marketing Manager',
        grossUSDExample: 45000,
        employerOnCostPct: '25-30%',
        monthlyEmployerTotalUSD: '$56,250-$58,500',
        timeToOnboard: '3 days',
        notes: 'Full benefits package (health, pension)'
      },
      {
        scenario: 'Customer Support',
        grossUSDExample: 18000,
        employerOnCostPct: '25-30%',
        monthlyEmployerTotalUSD: '$22,500-$23,400',
        timeToOnboard: '3 days',
        notes: 'Includes full benefits, excludes variable bonuses'
      }
    ],
    complianceBullets: [
      'IMSS Contributions: Mandatory ~20.4% of salary for health/pension (employer share)',
      'INFONAVIT Housing Fund: 5% employer contribution',
      'Standard Workweek: Max 48 hours (reduced to 44 hours from July 15, 2025); 8 hours/day typical',
      'Vacation: 12 days min after Year 1 (+2 days every 5 years) + 25% premium pay',
      'Probation: 30 days standard (180 days for executives)',
      'Termination: Just cause required; unjustified = 3 months\' severance + 20 days/year worked (up to 90-180 days total)',
      'Overtime: Max 3 hours/day, 3 times/week (9 hours/week total) at double pay; triple pay for hours beyond 9 per week',
      'Telework: Employer covers 25% utilities/internet + ergonomic setup (2024 law)',
      'Foreign Nationals: Require INM work visa and residency approval; companies must maintain ~90:10 Mexican:foreign ratio - may add 3-10 days to onboarding. Sigma handles all approvals and potential waitlists'
    ],
    benefitsPackage: [
      'Health & Dental Insurance',
      'Vision & Mental Health Support', 
      'Pension/401(k) Matching',
      'Life/Disability Coverage',
      '13th Month Bonus (Aguinaldo: At least 15 days\' pay annually)',
      'Profit Sharing (PTU: 10% of company profits distributed)'
    ],
    countryStats: {
      capital: 'Mexico City',
      currency: 'MXN (Peso)',
      population: '128M',
      payrollFrequency: 'Semi-monthly'
    },
    misclassificationRisks: 'Mexico treats contractors vs. employees strictly—misclassifying can lead to back taxes, fines (up to MXN 500k), and reclassification. Use EOR for compliance.',
    payingWorkers: 'Pay workers in Mexico through our USDC wallet system with zero fees. Zero-fee USDC-to-MXN auto-conversion via wallet. Funds are automatically converted to Mexican Pesos at competitive rates and deposited directly to employee bank accounts. No wire transfer fees, no hidden costs, and full transparency on exchange rates.',
    uxRows: [
      {
        need: 'Setting up payroll',
        oldWay: 'Establish Mexican entity, register with tax authorities, set up local banking, hire payroll specialists',
        withSigma: 'Complete onboarding in 1-3 days with full compliance handled automatically'
      },
      {
        need: 'Managing benefits',
        oldWay: 'Navigate complex IMSS and INFONAVIT requirements, track contribution deadlines, handle paperwork',
        withSigma: 'All mandatory benefits calculated and remitted automatically with full compliance'
      },
      {
        need: 'Termination handling',
        oldWay: 'Calculate severance manually, ensure legal compliance, handle final payments',
        withSigma: 'Automated severance calculations and compliant termination processing'
      },
      {
        need: 'Tax compliance',
        oldWay: 'Monthly tax filings, quarterly reports, annual declarations, potential penalties',
        withSigma: 'All tax obligations handled automatically with guaranteed compliance'
      },
      {
        need: 'Currency conversion',
        oldWay: 'High wire transfer fees, poor exchange rates, manual reconciliation',
        withSigma: 'Zero-fee USDC-to-MXN auto-conversion via wallet, competitive rates, automatic local payment'
      }
    ],
    faq: [
      {
        q: 'What are the mandatory benefits in Mexico?',
        a: 'Mandatory benefits under Federal Labor Law include IMSS social security (health, pension, disability), INFONAVIT housing contributions, at least 12 vacation days with 25% premium, aguinaldo (13th month bonus: minimum 15 days\' pay by Dec 20), profit sharing (10% of profits), maternity leave (12 weeks paid), and overtime protections. Sigma\'s EOR service includes all these in our competitive packages, ensuring full compliance without setup hassles.'
      },
      {
        q: 'How long is the probation period in Mexico?',
        a: 'The standard probation period is 30 days for most roles, extendable to 180 days for managerial, technical, or specialized positions (FLL Article 35). During probation, termination is simpler without full severance. Sigma streamlines onboarding to make probation seamless.'
      },
      {
        q: 'What are the termination requirements in Mexico?',
        a: 'Terminations must be justified with written notice and cause (e.g., misconduct). Unjustified dismissals require severance of 3 months\' pay + 20 days per year worked + back benefits. Resignations need 30 days\' notice. Sigma handles compliant processes to avoid costly disputes.'
      },
      {
        q: 'Can I hire contractors in Mexico?',
        a: 'Yes, independent contractors are allowed, but contracts must clearly define scope to avoid reclassification as employees (triggering benefits and taxes). Misclassification risks fines up to MXN 500,000. Sigma\'s contractor management includes localized agreements and easy USDC payments for compliance.'
      },
      {
        q: 'What payroll cycle is required in Mexico?',
        a: 'Semi-monthly (by the 15th and last day of the month) is the most common and recommended, though weekly or monthly is permitted for certain roles. Sigma automates payroll in MXN or USDC, deposited directly to employee accounts with zero wire fees.'
      },
      {
        q: 'Are there regional differences in employment law in Mexico?',
        a: 'Federal Labor Law applies nationwide, but the Northern Border Zone has a higher minimum wage (MXN 419.88/day). Some states add minor payroll taxes (2-3%). No major variations otherwise. Sigma\'s experts navigate regional nuances for your hires.'
      },
      {
        q: 'Can I hire foreign nationals in Mexico?',
        a: 'Yes, but they need an INM work visa and temporary residency. Companies must comply with nationality ratios (~90% Mexican workers). This can add 3-10 days to onboarding due to approvals or waitlists. Sigma manages the entire process, including documentation and compliance checks.'
      },
      {
        q: 'What are the risks of hiring without an EOR in Mexico?',
        a: 'Without an EOR, you risk non-compliance fines (MXN 250,000+ per violation), labor audits, misclassification penalties, and entity setup costs/delays. Employee-favoring courts can lead to expensive lawsuits. Sigma\'s EOR eliminates these by handling everything legally on your behalf.'
      }
    ],
    lastUpdatedISO: '2025-01-15T00:00:00Z'
  },
  colombia: {
    slug: 'colombia',
    name: 'Colombia',
    region: 'South America',
    hero: {
      title: 'Hiring in Colombia: Payroll, Compliance, and Employer Costs',
      subtitle: 'Leverage Colombian talent with full compliance'
    },
    intro: 'Colombia offers a growing tech market with 2025 labor reforms enhancing worker protections. The country has modernized its labor laws while maintaining strong worker protections. Understanding mandatory benefits, social security contributions, and termination procedures is essential for compliant operations.',
    minimumWage: {
      dailyRate: 'COP 1,423,500/month (USD ~$323)',
      monthlyRate: 'COP 1,423,500/month minimum wage',
      transportSubsidy: 'COP 200,000/month transport subsidy',
      source: 'CONPES 2025'
    },
    atAGlance: {
      currency: 'Colombian Peso (COP)',
      payrollCycle: 'Monthly',
      employerOnCostPct: '~29-32%',
      annualLeaveDays: 15,
      publicHolidays: 18,
      hoursPerWeek: '42 hours',
      thirteenthSalary: 'Yes',
      probationMax: '3 months',
      noticeSeveranceShort: '1 month salary',
      onboardingTimeDays: '5 days'
    },
    hiringOptions: {
      contractors: 'Independent contractors are common in Colombia. Ensure proper classification with clear deliverables and avoid direct supervision to maintain contractor status.',
      eor: 'Employer of Record services provide immediate compliance without entity establishment. Perfect for market entry or small teams requiring full legal protection.',
      ownEntity: 'Colombian subsidiary setup requires significant investment and typically takes 3-6 months including tax registration and banking setup.'
    },
    employerCostsIntro: 'Colombian employers face substantial mandatory contributions including social security, health insurance, and various benefits that significantly impact total employment costs.',
    costTable: [
      {
        scenario: 'Software Engineer',
        grossUSDExample: 37000,
        employerOnCostPct: '29-32%',
        monthlyEmployerTotalUSD: '$47,730–$48,840',
        timeToOnboard: '5 days',
        notes: 'SS 21%, 13th month 8.33%, risks 0.522%'
      },
      {
        scenario: 'Project Manager',
        grossUSDExample: 30000,
        employerOnCostPct: '29-32%',
        monthlyEmployerTotalUSD: '$38,700–$39,600',
        timeToOnboard: '5 days',
        notes: 'Excludes integral salaries (>COP 18.5M)'
      },
      {
        scenario: 'Customer Support',
        grossUSDExample: 18000,
        employerOnCostPct: '29-32%',
        monthlyEmployerTotalUSD: '$23,220–$23,760',
        timeToOnboard: '5 days',
        notes: 'Standard benefits package with full compliance'
      }
    ],
    complianceBullets: [
      'Social Security Contributions: Employer ~21% of salary (health 8.5%, pension 12%, risks 0.522%)',
      'Vacation: 15 days min after Year 1 + premium pay',
      'Probation: Max 3 months for indefinite contracts (2025 reform)',
      'Termination: 45 days notice for indefinite; unjustified = 1 month severance per year worked + back pay',
      'Overtime: Max 2 hours/day at 125% (day)/175% (night); no prior approval needed (2025)',
      'Telework: Connectivity COP 200,000 + equipment; up to 50% home work (hybrid/mobile)',
      'Foreign Nationals: M-type visa required (1-3 months processing, employer-sponsored)'
    ],
    benefitsPackage: [
      'Health & Dental Insurance (EPS)',
      'Occupational Risk Insurance (ARL)',
      'Family Compensation Fund (CCF)',
      'Pension Contributions',
      '13th Month Pay (Split June/Dec for ordinary salaries <COP 18.5M)',
      'Profit Sharing (PTU: If applicable)',
      'Vacation Pay with Premium',
      'Transport Subsidy (COP 200,000/month)'
    ],
    countryStats: {
      capital: 'Bogotá',
      currency: 'COP (Peso)',
      population: '51M',
      payrollFrequency: 'Monthly'
    },
    misclassificationRisks: 'Risks of misclassification include fines COP 500M-1B, back taxes, and reclassification. 2025 rule: Employers must cover SS for contractors - use EOR to comply.',
    payingWorkers: 'Pay in Colombia with USD or USDC - deposits to Colombian banks at competitive rates, no transfer fees.',
    uxRows: [
      {
        need: 'Entity setup',
        oldWay: 'Register with DIAN, obtain tax ID, set up local banking, hire legal counsel',
        withSigma: 'Start hiring immediately with full compliance in 5 days'
      },
      {
        need: 'Social security management',
        oldWay: 'Navigate EPS, ARL, CCF requirements, track multiple contribution deadlines',
        withSigma: 'All social security obligations handled automatically with guaranteed compliance'
      },
      {
        need: 'Payroll processing',
        oldWay: 'Monthly calculations, multiple benefit deductions, complex tax withholdings',
        withSigma: 'Automated filings with 2025 SS reform updates'
      },
      {
        need: 'Termination compliance',
        oldWay: 'Calculate severance, handle final payments, ensure legal requirements met',
        withSigma: 'Automated severance calculations and compliant termination processing'
      },
      {
        need: 'Currency and payments',
        oldWay: 'High international transfer fees, poor exchange rates, manual reconciliation',
        withSigma: 'Zero fees, competitive rates, automatic local currency payments'
      }
    ],
    faq: [
      {
        q: 'What are the mandatory benefits in Colombia?',
        a: 'Mandatory: Social security (28.5% total), 15 vacation days + premium, 13th month (June/Dec for <COP 18.5M), transport subsidy (COP 200,000), maternity leave (18 weeks). Sigma includes all.'
      },
      {
        q: 'How long is the probation period in Colombia?',
        a: 'Up to 3 months for indefinite contracts (2025). Sigma ensures smooth 5-day onboarding.'
      },
      {
        q: 'What are the termination requirements in Colombia?',
        a: '45 days notice for indefinite; unjustified = 1 month/year + back pay. Sigma manages compliance.'
      },
      {
        q: 'Can I hire contractors in Colombia?',
        a: 'Yes, but 2025 requires employer-paid SS. Misclassification risks fines COP 500M-1B. Sigma handles contracts/USDC payments.'
      },
      {
        q: 'What payroll cycle is required in Colombia?',
        a: 'Monthly in arrears (last day). Sigma automates in COP/USDC with zero fees.'
      },
      {
        q: 'What is an integral salary in Colombia?',
        a: 'Min COP 18.5M/month (USD ~$4,200); includes 30% benefits but no 13th month. Sigma advises on classification.'
      },
      {
        q: 'Are there regional differences in employment law?',
        a: 'Labor Code is national; Bogotá wages higher. Sigma navigates nuances.'
      },
      {
        q: 'What are the risks of hiring without an EOR?',
        a: 'Fines (COP 250M+), audits, 2025 SS delays. Sigma\'s EOR protects with expertise.'
      }
    ],
    lastUpdatedISO: '2025-10-01T00:00:00Z'
  },
  argentina: {
    slug: 'argentina',
    name: 'Argentina',
    region: 'South America',
    hero: {
      title: 'Hiring in Argentina: Payroll, Compliance, and Employer Costs',
      subtitle: 'Navigate Argentine employment law with confidence'
    },
    intro: 'Argentina offers a highly educated workforce with competitive costs, though complex labor regulations require careful navigation. The country has strong worker protections and mandatory benefits that significantly impact total employment costs. Understanding social security contributions, collective bargaining agreements, and termination procedures is essential.',
    minimumWage: {
      dailyRate: 'ARS 180,000/month (USD ~$200)',
      monthlyRate: 'ARS 180,000/month minimum wage',
      source: 'Argentine Labor Law (2025)'
    },
    atAGlance: {
      currency: 'Argentine Peso (ARS)',
      payrollCycle: 'Monthly',
      employerOnCostPct: '~35-40%',
      annualLeaveDays: 14,
      publicHolidays: 12,
      hoursPerWeek: 48,
      thirteenthSalary: 'Yes',
      probationMax: '3 months',
      noticeSeveranceShort: '1 month salary',
      onboardingTimeDays: '3-7'
    },
    hiringOptions: {
      contractors: 'Independent contractors can be engaged but face strict classification rules. Ensure clear scope of work and avoid direct supervision to maintain contractor status.',
      eor: 'Employer of Record services provide immediate compliance without entity setup. Ideal for testing the Argentine market or small teams requiring full legal protection.',
      ownEntity: 'Argentine subsidiary establishment is complex and typically requires 4-8 months including tax registration, banking setup, and labor compliance.'
    },
    employerCostsIntro: 'Argentine employers face substantial mandatory contributions including social security, health insurance, and various benefits that significantly impact total employment costs.',
    costTable: [
      {
        scenario: 'Software Engineer (Senior)',
        grossUSDExample: 3000,
        employerOnCostPct: '~38%',
        monthlyEmployerTotalUSD: '~$4,140',
        timeToOnboard: '3-7 days',
        notes: 'Includes ANSES, PAMI, and mandatory benefits'
      },
      {
        scenario: 'Marketing Specialist',
        grossUSDExample: 1800,
        employerOnCostPct: '~36%',
        monthlyEmployerTotalUSD: '~$2,448',
        timeToOnboard: '3-7 days',
        notes: 'Standard benefits package with full compliance'
      },
      {
        scenario: 'Customer Support',
        grossUSDExample: 1200,
        employerOnCostPct: '~35%',
        monthlyEmployerTotalUSD: '~$1,620',
        timeToOnboard: '3-7 days',
        notes: 'Entry-level position with full benefits'
      }
    ],
    complianceBullets: [
      'ANSES (Social Security) contributions mandatory for all employees',
      'PAMI (Health Insurance) contributions required for healthcare coverage',
      'Thirteenth salary (aguinaldo) equivalent to one month salary annually',
      'Vacation pay increases with tenure (14 days minimum, up to 35 days)',
      'Termination requires just cause or severance payment',
      'Probation period maximum 3 months for indefinite contracts',
      'Collective bargaining agreements may apply to certain industries'
    ],
    benefitsPackage: [
      'Health & Dental Insurance (PAMI)',
      'Social Security (ANSES)',
      'Pension Contributions',
      '13th Month Bonus (Aguinaldo)',
      'Vacation Pay with Premium',
      'Maternity/Paternity Leave'
    ],
    countryStats: {
      capital: 'Buenos Aires',
      currency: 'ARS (Peso)',
      population: '45M',
      payrollFrequency: 'Monthly'
    },
    misclassificationRisks: 'Argentina has strict labor laws regarding contractor classification. Misclassifying employees as contractors can result in significant penalties, back payments, and labor law violations. Use EOR for compliance.',
    payingWorkers: 'Pay Argentine workers through our USD wallet with zero fees. Automatic conversion to Argentine Pesos at competitive rates with direct bank deposits. No wire transfer fees, transparent exchange rates, and reliable payment processing despite currency volatility.',
    uxRows: [
      {
        need: 'Entity establishment',
        oldWay: 'Register with AFIP, obtain CUIT, set up local banking, navigate complex regulations',
        withSigma: 'Start hiring immediately with full compliance in 3-7 days'
      },
      {
        need: 'Social security compliance',
        oldWay: 'Navigate ANSES and PAMI requirements, track contribution deadlines, handle paperwork',
        withSigma: 'All social security obligations handled automatically with guaranteed compliance'
      },
      {
        need: 'Payroll management',
        oldWay: 'Complex calculations, multiple benefit deductions, currency volatility handling',
        withSigma: 'Automated payroll with all mandatory deductions and stable USD-based processing'
      },
      {
        need: 'Termination handling',
        oldWay: 'Calculate severance, handle final payments, ensure legal compliance',
        withSigma: 'Automated severance calculations and compliant termination processing'
      },
      {
        need: 'Currency management',
        oldWay: 'High transfer fees, poor exchange rates, currency volatility risks',
        withSigma: 'Zero fees, competitive rates, stable USD processing with local currency delivery'
      }
    ],
    faq: [
      {
        q: 'What are the main social security contributions in Argentina?',
        a: 'Argentine employers must contribute to ANSES (social security) and PAMI (health insurance). These typically add 35-40% to base salary costs.'
      },
      {
        q: 'How long is the probation period in Argentina?',
        a: 'The maximum probation period is 3 months for indefinite contracts. During probation, termination is easier but all other labor protections still apply.'
      },
      {
        q: 'What is the thirteenth salary requirement?',
        a: 'Argentine law requires a thirteenth salary (aguinaldo) equivalent to one month salary, typically paid in two installments during the year.'
      },
      {
        q: 'How does currency volatility affect payroll?',
        a: 'Our USD wallet system protects against currency volatility by processing in USD and converting at competitive rates for local delivery.'
      },
      {
        q: 'What are the termination requirements?',
        a: 'Termination requires just cause or payment of severance (minimum 1 month salary). Notice periods vary by tenure and may be subject to collective agreements.'
      },
      {
        q: 'Are there industry-specific requirements?',
        a: 'Some industries have collective bargaining agreements with additional benefits. Ensure compliance with both general labor law and industry-specific requirements.'
      }
    ],
    lastUpdatedISO: '2024-01-15T00:00:00Z'
  },
};
