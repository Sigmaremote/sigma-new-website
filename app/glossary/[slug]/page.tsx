'use client';

import * as React from 'react';
import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import Script from 'next/script';
import { BookOpen, Link2, CheckCircle2, XCircle } from 'lucide-react';

/**
 * Glossary Detail Template - /glossary/[slug]
 * - Standardizovan sadržaj:
 *    H1 (term), H3 "What is …?" + definicija, How it works, Why it matters, Example, Related Terms
 * - JSON-LD array: [WebPage, BreadcrumbList, Article, FAQPage] (valid za Google)
 * - MockData: zameniti CMS-om (Supabase/Framer) kada bude spremno
 *
 * Kako povezati sa CMS-om:
 *  - Umesto GLOSSARY_STORE ispod, fetchnite iz baze na serveru i prosledite kao prop,
 *    ili napravite route handler (/api/glossary/[slug]) pa ovde fetch u useEffect.
 */

// ---------- MOCK STORE (zameni CMS-om) ----------
type GlossaryItem = {
  slug: string;
  term: string;
  excerpt: string;
  definition: string; // za "What is ..."
  how?: string[];
  howTitle?: string; // Custom title for "How it works" section
  why?: string[];
  whyTitle?: string; // Custom title for "Why it matters" section
  example?: string;
  related?: { label: string; href: string }[];
  relatedTitle?: string; // Custom title for "Related Terms" section
  faqs?: { q: string; a: string }[];
  datePublished?: string; // ISO
  tables?: {
    title: string;
    headers: string[];
    rows: string[][];
  }[];
  tableFooter?: string; // Text to show after tables
};

const GLOSSARY_STORE: Record<string, GlossaryItem> = {
  'managed-payroll': {
    slug: 'managed-payroll',
    term: 'Managed Payroll',
    excerpt:
      'A full-service solution where a third-party provider handles the entire payroll process on your behalf.',
    definition:
      'Managed payroll is a full-service solution where a third-party provider handles the entire payroll process on your behalf - including salary calculations, tax filings, compliance, deductions, and payouts. It removes the need for internal payroll teams, especially in global or multi-country operations.',
    how: [
      'With managed payroll, businesses outsource payroll operations to an external provider like SigmaRemote. This includes:',
      'Wage calculation (salary, bonuses, overtime)',
      'Payslip generation',
      'Cross-border payouts in USD, local currency, or crypto',
      'Tax reporting and government filings',
      'Contractor classification and deductions',
      'Regulatory compliance (labor law, social contributions, data security)',
      'It\'s especially useful for companies without local legal entities or in-house HR/legal capacity.',
    ],
    why: [
      'A managed payroll solution unlocks major benefits for globally scaling businesses:',
      '✅ Saves time - No need to build or manage in-house payroll operations',
      '✅ Ensures compliance - Avoid penalties and misclassification risk',
      '✅ Scales fast - Expand into 180+ countries without setting up local entities',
      '✅ Supports contractors + employees - Flexibility across different workforce types',
      '✅ Transparent cost - Predictable fees vs internal staffing + legal cost',
      'For startups, NGOs, and remote-first companies, managed payroll is a shortcut to legal, fast, and stress-free hiring across borders.',
    ],
    example:
      'A U.S. SaaS company wants to pay 12 contractors in Mexico, Nigeria, and Indonesia - without hiring a full-time payroll team. With SigmaRemote\'s managed payroll, they onboard everyone via WhatsApp, issue compliant contracts, and run biweekly payouts in USD wallets. No tax stress, no FX fees, and no internal bottlenecks.',
    related: [
      { label: 'Global Payroll', href: '/glossary/global-payroll' },
      { label: 'Employer of Record (EOR)', href: '/glossary/eor' },
      { label: 'Contractor of Record (CoR)', href: '/glossary/cor' },
      { label: 'Cross-Border Compliance', href: '/glossary/cross-border-compliance' },
      { label: 'Payroll Cycle', href: '/glossary/payroll-cycle' },
    ],
    faqs: [
      {
        q: 'What is managed payroll?',
        a: 'Managed payroll is when a third-party provider handles payroll operations for a business, including calculations, tax filing, compliance, and payouts.',
      },
      {
        q: 'What are the benefits of managed payroll?',
        a: 'It saves time, ensures legal compliance, simplifies cross-border payments, and allows fast global expansion without setting up local entities.',
      },
      {
        q: 'Who should use managed payroll?',
        a: 'Managed payroll is ideal for startups, NGOs, or remote-first teams that want to pay international workers without hiring internal payroll or legal teams.',
      },
    ],
    datePublished: new Date().toISOString(),
  },
  'payroll-taxes': {
    slug: 'payroll-taxes',
    term: 'Payroll Taxes',
    excerpt:
      'Mandatory contributions imposed on wages by governments to fund social programs like healthcare, pensions, and unemployment insurance.',
    definition:
      'Payroll taxes are mandatory contributions imposed on wages by governments to fund social programs like healthcare, pensions, and unemployment insurance. Both employers and employees may be responsible for different parts of these taxes, depending on the country.',
    how: [
      'Payroll taxes are typically split into two categories:',
      'Employer Contributions: Social security (e.g. INSS in Brazil, NIC in the UK), Health insurance, Workers\' compensation, Unemployment insurance',
      'Employee Withholdings: Income tax (e.g. IRS in the U.S., SAT in Mexico), Pension or retirement deductions, National contributions (e.g. NSSF in Kenya)',
      'These are calculated per payroll cycle and vary widely by location, worker classification, and even salary level.',
      'Global payroll platforms like SigmaRemote calculate and file these taxes in-country - helping avoid fines, audits, and payment delays.',
    ],
    why: [
      'Understanding and managing payroll taxes is crucial to:',
      '✅ Stay compliant with local labor and tax laws',
      '✅ Prevent fines, penalties, or legal exposure',
      '✅ Provide accurate payslips for employees and contractors',
      '✅ Build trust with international workers',
      '✅ Avoid permanent establishment risk through compliant classification',
    ],
    example:
      'A U.S.-based NGO pays full-time employees in Argentina and part-time contractors in the Philippines. SigmaRemote applies the right tax rates, files contributions on the NGO\'s behalf, and ensures the organization is not exposed to tax fraud or regulatory penalties.',
    related: [
      { label: 'Payroll Deductions', href: '/glossary/payroll-deductions' },
      { label: 'Contractor Classification', href: '/glossary/contractor-classification' },
      { label: 'Global Payroll', href: '/glossary/global-payroll' },
      { label: 'Tax Residency', href: '/glossary/tax-residency' },
      { label: 'Employer of Record (EOR)', href: '/glossary/eor' },
    ],
    faqs: [
      {
        q: 'What are payroll taxes?',
        a: 'Payroll taxes are government-mandated contributions on wages that fund social programs. Employers and employees may share the responsibility depending on the jurisdiction.',
      },
      {
        q: 'Who pays payroll taxes?',
        a: 'In most countries, both employers and employees contribute. The breakdown and specific programs vary depending on local laws.',
      },
      {
        q: 'How do companies handle payroll taxes globally?',
        a: 'Global payroll platforms like SigmaRemote automate tax calculations, generate reports, and file required contributions to stay compliant in each country.',
      },
    ],
    datePublished: new Date().toISOString(),
  },
  'payroll-deductions': {
    slug: 'payroll-deductions',
    term: 'Payroll Deductions',
    excerpt:
      'Amounts withheld from an employee\'s or contractor\'s earnings to cover taxes, benefits, or other obligations.',
    definition:
      'Payroll deductions are amounts withheld from an employee\'s or contractor\'s earnings to cover taxes, benefits, or other obligations. These can be mandatory (like income tax or social contributions) or voluntary (like retirement savings or health insurance).',
    how: [
      'Deductions are calculated during each payroll cycle and subtracted before issuing net pay. Common categories include:',
      'Mandatory Deductions: Income tax (e.g. PAYE in Nigeria, ISR in Mexico), Social security contributions (e.g. INSS in Brazil, NSSF in Kenya), Health or labor insurance (e.g. PhilHealth in the Philippines)',
      'Voluntary Deductions: Retirement plans, Stock purchases, Loan repayments, Union dues',
      'For global teams, deduction rules vary dramatically by country and employment status (employee vs contractor). Misapplying these can result in fines or lawsuits.',
      'SigmaRemote automates deduction rules by country and handles documentation across 180+ jurisdictions.',
    ],
    why: [
      'Payroll deductions are essential for:',
      '✅ Legal compliance - Errors can trigger audits or penalties',
      '✅ Accurate reporting - Essential for tax authorities and employees',
      '✅ Transparency - Workers trust employers who clearly show gross vs net pay',
      '✅ Cross-border scaling - Understanding local deduction norms avoids misclassification',
    ],
    example:
      'A U.S. company hires contractors in Colombia and Kenya. One contractor needs tax withholding; the other operates under a no-deduction agreement. SigmaRemote applies the correct deduction policy per country, adds it to the contract, and reflects it in each pay stub.',
    related: [
      { label: 'Payroll Taxes', href: '/glossary/payroll-taxes' },
      { label: 'Payslip', href: '/glossary/payslip' },
      { label: 'Contractor Classification', href: '/glossary/contractor-classification' },
      { label: 'Global Payroll', href: '/glossary/global-payroll' },
      { label: 'Tax Residency', href: '/glossary/tax-residency' },
    ],
    faqs: [
      {
        q: 'What are payroll deductions?',
        a: 'Payroll deductions are amounts withheld from a worker\'s pay to cover taxes, social security, benefits, or other obligations. They can be mandatory or voluntary depending on location and role.',
      },
      {
        q: 'What\'s the difference between mandatory and voluntary deductions?',
        a: 'Mandatory deductions are legally required (like income tax or social contributions), while voluntary deductions include benefits or loan repayments agreed by the worker.',
      },
      {
        q: 'How do global payroll platforms handle deductions?',
        a: 'Platforms like SigmaRemote apply local laws automatically, generate correct pay stubs, and ensure all deductions are compliant across countries.',
      },
    ],
    datePublished: new Date().toISOString(),
  },
  'permanent-establishment': {
    slug: 'permanent-establishment',
    term: 'Permanent Establishment',
    excerpt:
      'A legal and tax concept that determines whether a foreign company is considered to have a taxable presence in another country.',
    definition:
      'Permanent Establishment (PE) is a legal and tax concept that determines whether a foreign company is considered to have a taxable presence in another country. If your company hires workers, signs contracts, or generates income in a country without a legal entity, you could unknowingly trigger a PE - making your company liable for corporate taxes, audits, and compliance obligations in that jurisdiction.',
    how: [
      'Each country has its own PE rules (often based on OECD standards), but common triggers include:',
      'Hiring full-time employees locally',
      'Giving contractors long-term assignments with managerial control',
      'Having sales agents or reps who close deals on your behalf',
      'Using local offices, warehouses, or coworking spaces as "fixed presence"',
      'Exceeding a time or revenue threshold in one country',
      'For example:',
      'In Germany, PE can be triggered if a contractor works long-term for you without clear independence.',
      'In India, signing client contracts locally via a sales rep can create a PE.',
      'SigmaRemote helps companies identify PE risks early and recommend EOR or CoR models to prevent exposure.',
    ],
    why: [
      'If you create a PE without realizing it, the consequences can be serious:',
      '❌ Corporate income tax in the host country',
      '❌ Fines for late or missing tax filings',
      '❌ Ineligibility for tax treaties or local business advantages',
      '❌ Investigation of your entire team structure and past activity',
      'For startups and remote-first teams hiring globally, PE is the #1 hidden risk when expanding without legal or tax infrastructure.',
    ],
    example:
      'A U.S. SaaS company hires three engineers in Mexico on long-term contracts and gives them company email addresses, fixed working hours, and local client-facing tasks.\nMexico\'s tax authority audits the team and determines the company has created a Permanent Establishment, requiring back taxes and legal filings.\nBy switching to SigmaRemote\'s EOR model, the risk is resolved and payroll remains compliant.',
    related: [
      { label: 'Cross-Border Compliance', href: '/glossary/cross-border-compliance' },
      { label: 'Employer of Record (EOR)', href: '/glossary/eor' },
      { label: 'Contractor Classification', href: '/glossary/contractor-classification' },
      { label: 'CoR vs EOR', href: '/glossary/cor-vs-eor' },
      { label: 'Global Payroll', href: '/glossary/global-payroll' },
    ],
    faqs: [
      {
        q: 'What is Permanent Establishment?',
        a: 'Permanent Establishment (PE) is a legal concept that determines whether a foreign company has a taxable presence in a country due to local operations, employees, or contracts.',
      },
      {
        q: 'What triggers Permanent Establishment?',
        a: 'PE can be triggered by hiring full-time local employees, signing contracts, having a local office, or generating consistent revenue in a country without registering a legal entity.',
      },
      {
        q: 'How can companies avoid Permanent Establishment risk?',
        a: 'Use an Employer of Record (EOR) or Contractor of Record (CoR) to legally hire abroad without creating a local tax presence. Platforms like SigmaRemote help assess and prevent PE risk.',
      },
    ],
    datePublished: new Date().toISOString(),
  },
  'contractor-classification': {
    slug: 'contractor-classification',
    term: 'Contractor Classification',
    excerpt:
      'The process of determining whether a worker is legally considered an independent contractor or an employee.',
    definition:
      'Contractor classification refers to the process of determining whether a worker is legally considered an independent contractor or an employee, based on the nature of the work and the level of control exerted by the company. Misclassifying a contractor as an employee - or vice versa - can lead to serious legal penalties, tax liabilities, and reputational damage. Each country has its own criteria for classification, and U.S. companies working globally must comply with local labor laws, not just IRS rules.',
    how: [
      'Classification depends on factors like:',
      'Level of control - Do you dictate how, when, and where they work?',
      'Exclusivity - Are they allowed to work for other clients?',
      'Tools and equipment - Do they use your resources, or their own?',
      'Integration - Are they embedded in your team structure?',
      'Countries use different frameworks:',
      'U.S.: IRS 3-part test (behavioral, financial, relationship)',
      'UK: IR35 rules',
      'Germany: Dependency thresholds',
      'Canada: "Control and ownership of tools" test',
      'SigmaRemote helps companies stay compliant by applying country-specific classification logic automatically during contractor onboarding.',
    ],
    why: [
      'Incorrect classification can lead to:',
      '❌ Fines, back taxes, and interest (e.g., IRS, local tax authorities)',
      '❌ Liability for benefits like paid leave or severance',
      '❌ Public lawsuits or platform bans (see: Uber, FedEx cases)',
      '❌ Permanent establishment risk for global teams',
      'Contractor classification is the legal foundation of remote hiring. If you get this part wrong, everything else - payments, taxes, contracts - may collapse later.',
    ],
    example:
      'A U.S. startup hires a graphic designer in France through SigmaRemote.\nThe system flags that the current contract includes fixed working hours and exclusive scope - which risks misclassification under French law.\nSigmaRemote updates the agreement to reflect true contractor independence and removes risk.',
    related: [
      { label: 'Employer of Record (EOR)', href: '/glossary/eor' },
      { label: 'Contractor of Record (CoR)', href: '/glossary/cor' },
      { label: 'Agent of Record (AOR)', href: '/glossary/aor' },
      { label: 'W-8BEN Form', href: '/glossary/w-8ben-form' },
      { label: 'Misclassification Risk', href: '/glossary/misclassification-risk' },
    ],
    faqs: [
      {
        q: 'What is contractor classification?',
        a: 'Contractor classification is the legal process of determining whether a worker is an independent contractor or an employee, based on factors like control, exclusivity, and how work is performed.',
      },
      {
        q: 'Why is contractor classification important?',
        a: 'Misclassification can lead to legal penalties, back taxes, and lost benefits. It also increases risk when hiring internationally without understanding local labor laws.',
      },
      {
        q: 'How do I classify a contractor correctly?',
        a: 'You must consider local laws, worker independence, tools used, and contract structure. Platforms like SigmaRemote automate this using jurisdiction-specific rules.',
      },
    ],
    datePublished: new Date().toISOString(),
  },
  'w-8ben-form': {
    slug: 'w-8ben-form',
    term: 'W-8BEN Form',
    excerpt:
      'A U.S. tax form used by non-U.S. individuals to declare they are not subject to U.S. income tax on certain types of income.',
    definition:
      'The W‑8BEN (Certificate of Foreign Status of Beneficial Owner for United States Tax Withholding) is a U.S. tax form used by non-U.S. individuals to declare that they are not subject to U.S. income tax on certain types of income - including payments for freelance or contract work. If you\'re a U.S. company paying an international contractor, this form helps avoid backup withholding and ensures proper IRS reporting.',
    how: [
      'Filed by: Non-U.S. individual (not companies - they use W‑8BEN‑E)',
      'Submitted to: The paying company or platform, not the IRS',
      'Purpose: Certify foreign status + claim reduced withholding under a tax treaty (if available)',
      'The form includes:',
      'Legal name and address of the contractor',
      'Country of citizenship and tax residency',
      'Foreign tax identification number (if required)',
      'Signature and certification',
      'Platforms like SigmaRemote help contractors auto-generate W‑8BEN forms during onboarding and store them securely.',
    ],
    why: [
      'U.S. companies that pay international freelancers or contractors must collect this form to avoid:',
      '❌ IRS penalties',
      '❌ 30% backup withholding',
      '❌ Misclassification risks during audits',
      'It\'s especially relevant if you\'re using platforms like Upwork, Deel, or SigmaRemote - all require this form as part of their compliance stack.',
    ],
    example:
      'A U.S.-based SaaS company hires a developer in India.\nDuring onboarding via SigmaRemote, the developer fills out a digital W‑8BEN form.\nThis allows the company to avoid tax withholding and stay compliant with IRS rules.',
    related: [
      { label: 'Contractor Classification', href: '/glossary/contractor-classification' },
      { label: 'Cross-Border Compliance', href: '/glossary/cross-border-compliance' },
      { label: 'Global Payroll', href: '/glossary/global-payroll' },
      { label: '1099-NEC', href: '/glossary/1099-nec' },
      { label: 'Employer of Record (EOR)', href: '/glossary/eor' },
    ],
    faqs: [
      {
        q: 'What is a W‑8BEN form?',
        a: 'The W‑8BEN form is used by non-U.S. individuals to declare they are not subject to U.S. income tax. It is required when receiving payments from a U.S. company.',
      },
      {
        q: 'Who needs to submit a W‑8BEN?',
        a: 'Any non-U.S. individual working with a U.S. company must submit a W‑8BEN to avoid backup withholding and comply with U.S. tax rules.',
      },
      {
        q: 'Do I send the W‑8BEN to the IRS?',
        a: 'No, the W‑8BEN is submitted to the U.S. company or platform that is paying you-not directly to the IRS.',
      },
    ],
    datePublished: new Date().toISOString(),
  },
  'contractor-of-record': {
    slug: 'contractor-of-record',
    term: 'Contractor of Record (CoR)',
    excerpt:
      'A third-party entity that officially hires and pays international contractors on your behalf.',
    definition:
      'A Contractor of Record (CoR) is a third-party entity that officially hires and pays international contractors on your behalf - ensuring legal classification, compliant contracts, and tax reporting in the contractor\'s country. Unlike an Employer of Record (EOR), which is used for full-time employees, a CoR is designed for independent contractors. It reduces your legal exposure while streamlining onboarding and global payouts.',
    how: [
      'When hiring contractors across borders, labor and tax laws vary widely. A CoR steps in as the legal counterparty to:',
      'Issue contracts tailored to the local law',
      'Manage payments in USD, stablecoins, or local currency',
      'Classify the worker correctly to avoid misclassification risk',
      'Generate required tax documents (e.g., W-8BEN, invoices)',
      'From a compliance standpoint, CoR shields you from legal and financial penalties by absorbing classification liability.',
    ],
    why: [
      'For global teams scaling fast with freelancers or part-time workers, a CoR enables:',
      '✅ Compliant hiring without a legal entity',
      '✅ Faster onboarding in 180+ countries',
      '✅ Fewer risks of contractor misclassification',
      '✅ Streamlined payments and documentation',
      '✅ Local law alignment without internal legal ops',
      'SigmaRemote offers Contractor of Record services for teams hiring in LATAM, Africa, Southeast Asia, and beyond.',
    ],
    example:
      'A U.S. design agency wants to pay contractors in Brazil, Kenya, and Vietnam.\nInstead of managing legal contracts in each country, they partner with SigmaRemote\'s CoR.\nSigma issues compliant agreements, processes USD payments via wallets, and ensures no misclassification risk.',
    related: [
      { label: 'Agent of Record (AOR)', href: '/glossary/agent-of-record' },
      { label: 'Employer of Record (EOR)', href: '/glossary/eor' },
      { label: 'Contractor Classification', href: '/glossary/contractor-classification' },
      { label: 'W-8BEN Form', href: '/glossary/w-8ben-form' },
      { label: 'Cross-Border Compliance', href: '/glossary/cross-border-compliance' },
    ],
    faqs: [
      {
        q: 'What is a Contractor of Record (CoR)?',
        a: 'A Contractor of Record (CoR) is a service that hires and pays international contractors on your behalf. It ensures legal compliance, correct classification, and smooth cross-border payments.',
      },
      {
        q: 'How does a CoR work?',
        a: 'A CoR acts as the legal party to the contractor, providing compliant contracts, managing payments, and handling taxes. You outsource legal risk while retaining project control.',
      },
      {
        q: 'When should I use a CoR?',
        a: 'Use a CoR when hiring international contractors and you want to stay compliant without setting up local entities or risking worker misclassification.',
      },
    ],
    datePublished: new Date().toISOString(),
  },
  'agent-of-record': {
    slug: 'agent-of-record',
    term: 'Agent of Record (AOR)',
    excerpt:
      'A service provider that supports international contractor hiring by helping companies manage payments, compliance, and contracts.',
    definition:
      'An Agent of Record (AOR) is a service provider that supports international contractor hiring by helping companies manage payments, compliance, and contracts - without becoming the legal employer. Unlike an Employer of Record (EOR), the AOR lets you stay the direct hiring party while handling the backend risk and paperwork. AORs are often used when companies want to retain control over contractor relationships, but still need help with legal classification and cross-border payments.',
    how: [
      'When you hire a contractor in another country, local laws may require specific documentation, tax reporting, or proof of independent status.',
      'An AOR helps by:',
      'Reviewing and standardizing contracts for compliance',
      'Handling payment infrastructure (e.g. USDC or USD wallet payouts)',
      'Ensuring proper classification as an independent contractor',
      'Avoiding "permanent establishment" and misclassification risks',
      'You retain the relationship. The AOR handles the liability.',
    ],
    why: [
      'AOR services strike a balance between DIY and full outsourcing:',
      '✅ Control - You own the relationship with the contractor',
      '✅ Compliance - Local labor laws are respected',
      '✅ Cost-Efficiency - Cheaper than setting up a foreign entity or using an EOR',
      '✅ Scalability - You can grow into new markets without legal overhead',
      'Platforms like SigmaRemote act as an Agent of Record for global teams that want to move fast without giving up control.',
    ],
    example:
      'A U.S. company hires video editors in Colombia and software testers in Indonesia as independent contractors.\nThey use SigmaRemote\'s AOR service to handle compliant contracts and USD payments via wallets - but retain full control over task assignment, project scope, and timelines.',
    related: [
      { label: 'Contractor of Record (CoR)', href: '/glossary/contractor-of-record' },
      { label: 'Employer of Record (EOR)', href: '/glossary/eor' },
      { label: 'Global Payroll', href: '/glossary/global-payroll' },
      { label: 'Cross-Border Compliance', href: '/glossary/cross-border-compliance' },
      { label: 'Contractor Classification', href: '/glossary/contractor-classification' },
    ],
    faqs: [
      {
        q: 'What is an Agent of Record (AOR)?',
        a: 'An Agent of Record (AOR) is a service that helps companies hire international contractors by handling compliance, contracts, and payments-without becoming the legal employer.',
      },
      {
        q: 'How does an AOR work?',
        a: 'An AOR reviews contracts, ensures proper classification, and facilitates compliant cross-border payments while the client retains direct control over the contractor relationship.',
      },
      {
        q: 'When should I use an AOR instead of an EOR?',
        a: 'Use an AOR when hiring independent contractors and you want to avoid legal risk while maintaining control. An EOR is better for full-time employees needing local benefits and labor protections.',
      },
    ],
    datePublished: new Date().toISOString(),
  },
  'remote-first-company': {
    slug: 'remote-first-company',
    term: 'Remote-First Company',
    excerpt:
      'An organization that prioritizes remote work as its default operating model.',
    definition:
      'A remote-first company is an organization that prioritizes remote work as its default operating model. Unlike hybrid setups where office presence is the norm, remote-first teams work primarily from anywhere - with in-person offices used optionally or not at all. In a remote-first culture, tools, workflows, and communication are all optimized for asynchronous, distributed teams.',
    how: [
      'Remote-first companies don\'t just allow remote work - they are built around it. Core traits include:',
      'Distributed teams across multiple time zones',
      'Async communication via tools like Slack, Notion, or Loom',
      'Virtual onboarding, payroll, and performance management',
      'Global hiring through platforms like SigmaRemote or Deel',
      'Timezone-aware scheduling and documentation-first culture',
      'Famous examples of remote-first companies include:',
      'GitLab - Fully remote with 1,000+ team members in 65+ countries',
      'Zapier - Runs without a central office and hires globally',
      'Doist, Basecamp, Remote.com - Built for async global teams',
    ],
    why: [
      'Remote-first is more than a policy - it\'s a competitive advantage for modern businesses.',
      '✅ Access better talent - Hire globally without borders',
      '✅ Lower operating costs - No office leases, relocation, or commuting expenses',
      '✅ Inclusive culture - Team members in emerging markets, caregivers, digital nomads',
      '✅ Faster scaling - Tap into regions like LATAM, Africa, or SEA with compliant onboarding',
      'Platforms like SigmaRemote help remote-first companies manage payroll, legal compliance, and contractor onboarding - without needing a local entity.',
    ],
    example:
      'A U.S. startup adopts a remote-first model and hires engineers in Nigeria, designers in Argentina, and QA testers in the Philippines.\nUsing SigmaRemote, they handle onboarding, FX-free payments, and tax compliance - all without setting up local branches.',
    related: [
      { label: 'Global Payroll', href: '/glossary/global-payroll' },
      { label: 'Employer of Record (EOR)', href: '/glossary/eor' },
      { label: 'USD Wallet', href: '/glossary/usd-wallet' },
      { label: 'Cross-Border Compliance', href: '/glossary/cross-border-compliance' },
      { label: 'Async Collaboration', href: '/glossary/async-collaboration' },
    ],
    faqs: [
      {
        q: 'What is a remote-first company?',
        a: 'A remote-first company is an organization that prioritizes remote work as its primary model. Most or all employees work from anywhere, and all systems are designed for distributed, asynchronous collaboration.',
      },
      {
        q: 'How is remote-first different from remote-friendly?',
        a: 'Remote-friendly companies allow remote work but still prioritize in-office presence. Remote-first companies design everything-processes, communication, hiring-for a distributed team from day one.',
      },
      {
        q: 'Why are remote-first companies growing?',
        a: 'Remote-first companies attract global talent, reduce costs, and scale faster. With tools and platforms like SigmaRemote, they can manage payroll, compliance, and collaboration from anywhere.',
      },
    ],
    datePublished: new Date().toISOString(),
  },
  'crypto-payroll': {
    slug: 'crypto-payroll',
    term: 'Crypto Payroll',
    excerpt:
      'The process of paying employees or contractors using cryptocurrencies like USDC, USDT, or Bitcoin for fast, borderless, and FX-free salary distribution.',
    definition:
      'Crypto payroll refers to the process of paying employees or contractors using cryptocurrencies like USDC, USDT, or Bitcoin. It enables fast, borderless, and FX-free salary distribution - especially valuable in regions with banking restrictions or currency volatility.',
    how: [
      'Instead of using traditional bank wires, companies send crypto directly to the recipient\'s wallet. A payroll provider (like SigmaRemote) automates:',
      'Salary conversion from USD → crypto (e.g., USDC on Solana)',
      'Wallet distribution (via Trust Wallet, MetaMask, or exchange accounts)',
      'Optional local currency off-ramp if the user wants to convert',
      'Popular stablecoins like USDC or USDT are preferred due to their 1:1 peg to the U.S. dollar, making payouts predictable.',
      'Crypto payroll is compliant in many jurisdictions when paired with proper reporting and KYC.',
    ],
    why: [
      'For global teams and remote-first companies, crypto solves multiple problems at once:',
      '✅ No FX fees - Avoid 2-5% lost to conversion and banking charges',
      '✅ Instant payouts - Funds settle in seconds, not days',
      '✅ Banking independence - No need for local accounts in underbanked markets',
      '✅ Inflation protection - Workers can store value in USD-pegged stablecoins',
      'Companies using crypto payroll can scale faster into countries like Venezuela, Nigeria, Argentina, El Salvador, etc. - where traditional banking is slow, costly, or broken.',
    ],
    example:
      'A U.S. startup pays a Venezuelan designer $2,500/month in USDT (TRC-20). Using SigmaRemote, the designer receives funds instantly in their Trust Wallet, skips 3% FX losses, and converts to local currency when market rates are favorable. No banks. No delays. Full compliance.',
    related: [
      { label: 'USDC', href: '/glossary/usdc' },
      { label: 'USDT', href: '/glossary/usdt' },
      { label: 'Stablecoins', href: '/glossary/stablecoins' },
      { label: 'USD Wallet', href: '/glossary/usd-wallet' },
      { label: 'Cross-Border Compliance', href: '/glossary/cross-border-compliance' },
    ],
    faqs: [
      {
        q: 'What is crypto payroll?',
        a: 'Crypto payroll is the process of paying employees or contractors using cryptocurrencies like USDC or USDT. It enables fast, FX-free, and borderless salary payments.',
      },
      {
        q: 'Why use crypto for payroll?',
        a: 'Crypto payroll eliminates FX fees, speeds up payments, and removes reliance on traditional banks-especially useful in countries with inflation or banking restrictions.',
      },
      {
        q: 'Is crypto payroll legal?',
        a: 'Yes, crypto payroll is legal in many countries when paired with KYC, tax reporting, and compliance tools. Platforms like SigmaRemote help ensure legality and security.',
      },
    ],
    datePublished: new Date().toISOString(),
  },
  '13th-month-salary': {
    slug: '13th-month-salary',
    term: '13th-Month Salary',
    excerpt:
      'A mandatory or customary bonus payment equal to one month\'s salary, typically paid at the end of the year in many Latin American and Southeast Asian countries.',
    definition:
      '13th-month salary is a mandatory or customary bonus payment equal to one month\'s salary, typically paid at the end of the year. It\'s a legal requirement in many countries across Latin America and Southeast Asia, including the Philippines, Brazil, and Argentina.',
    how: [
      'Employers calculate this bonus based on the employee\'s total basic salary over 12 months, then pay an additional month\'s worth - usually in December. In some countries, it\'s split into two payments (e.g., June and December).',
      'Philippines: Mandatory by law for all rank-and-file employees. Paid no later than December 24.',
      'Brazil: Known as Gratificação de Natal, legally required, with tax implications.',
      'Argentina: Called Sueldo Anual Complementario (SAC) or Aguinaldo, paid in two halves (June + December).',
      'While it\'s often associated with full-time employees, some contractors may negotiate a similar benefit depending on market standards.',
    ],
    why: [
      'For U.S. or global companies hiring in regions like LATAM or Southeast Asia, it\'s essential to understand and budget for this additional payroll cost.',
      '✅ Avoid compliance issues: In countries where it\'s mandatory, skipping it can result in fines or legal action.',
      '✅ Boost retention: Contractors and employees expect it - missing this payment damages trust.',
      '✅ Better planning: Knowing about this cost upfront helps set accurate compensation benchmarks.',
      'Platforms like SigmaRemote automatically factor in regional bonuses like the 13th-month salary to ensure compliant and predictable payroll.',
    ],
    example:
      'A U.S. startup hires a developer in the Philippines for $1,200/month. Come December, they are legally required to pay an additional $1,200 as 13th-month salary. Using a global payroll platform like SigmaRemote, this is automatically calculated and disbursed in compliance with local law.',
    related: [
      { label: 'Global Payroll', href: '/glossary/global-payroll' },
      { label: 'Employer of Record (EOR)', href: '/glossary/employer-of-record' },
      { label: 'Cross-Border Compliance', href: '/glossary/cross-border-compliance' },
      { label: 'Contractor Classification', href: '/glossary/contractor-classification' },
    ],
    faqs: [
      {
        q: 'What is 13th-month salary?',
        a: '13th-month salary is a mandatory or customary bonus equal to one month\'s pay, usually disbursed in December. It\'s legally required in many LATAM and Southeast Asian countries.',
      },
      {
        q: 'Is 13th-month salary mandatory?',
        a: 'Yes, in countries like the Philippines, Brazil, and Argentina it is a legal requirement. Employers must factor this into total compensation for compliance.',
      },
      {
        q: 'How is 13th-month salary calculated?',
        a: 'It is typically calculated as 1/12 of the employee\'s basic annual salary. Some countries allow the bonus to be split into two payments during the year.',
      },
    ],
    datePublished: new Date().toISOString(),
  },
  'stablecoins': {
    slug: 'stablecoins',
    term: 'Stablecoins',
    excerpt:
      'Cryptocurrencies pegged to real-world assets like the U.S. dollar, designed to maintain stable value while enabling fast, borderless payments.',
    definition:
      'Stablecoins are cryptocurrencies pegged to real-world assets like the U.S. dollar, designed to maintain a stable value. They combine blockchain\'s speed and global reach with the reliability of fiat currencies - revolutionizing international payroll and cross-border payments.',
    how: [
      'Stablecoins fall into three main types:',
      'Fiat-backed - Pegged 1:1 to currencies like USD (e.g. USDC, USDT), held in reserve',
      'Crypto-backed - Secured by collateralized crypto assets (e.g. DAI)',
      'Algorithmic - Maintains price through supply control, but considered riskier',
      'They enable instant, peer-to-peer transactions across borders - without banks, FX fees, or delays.',
    ],
    why: [
      'For international teams and startups, stablecoins deliver:',
      '✅ Cost savings - Skip FX and wire fees',
      '✅ Speed - Instant transfers, even across continents',
      '✅ Financial access - Works in underbanked regions like LATAM or Africa',
      '✅ Earnings protection - Hedge against local currency depreciation',
      '✅ Scalability - Expand into new countries without needing local banks',
      'They\'re ideal for remote teams, freelancers, and platforms operating globally.',
    ],
    example:
      'A Brazilian developer earns $2,000 in USDC via SigmaRemote: Funds arrive instantly - no SWIFT or intermediary delays. No 3% FX markup - they receive the full amount. They can hold USDC or convert to Reais when rates are favorable.',
    related: [
      { label: 'USDC', href: '/glossary/usdc' },
      { label: 'USDT', href: '/glossary/usdt' },
      { label: 'USD Wallet', href: '/glossary/usd-wallet' },
      { label: 'Crypto Payroll', href: '/glossary/crypto-payroll' },
    ],
    faqs: [
      {
        q: 'What are stablecoins?',
        a: 'Stablecoins are cryptocurrencies pegged to assets like the U.S. dollar, designed to offer price stability. They enable fast, low-cost, and borderless payments across the globe.',
      },
      {
        q: 'How do stablecoins help payroll?',
        a: 'Stablecoins offer instant, FX-free payments with no bank delays. They\'re ideal for paying remote teams and freelancers, especially in underbanked or high-inflation countries.',
      },
      {
        q: 'What types of stablecoins exist?',
        a: 'There are fiat-backed stablecoins like USDC and USDT, crypto-backed ones like DAI, and algorithmic stablecoins that adjust supply to maintain price.',
      },
    ],
    datePublished: new Date().toISOString(),
  },
  'employer-of-record': {
    slug: 'employer-of-record',
    term: 'Employer of Record (EOR)',
    excerpt:
      'A third-party service that legally employs international workers on your behalf, handling payroll, tax filing, contracts, and legal compliance.',
    definition:
      'An Employer of Record (EOR) is a third-party service that legally employs international workers on your behalf. You manage the worker\'s day-to-day tasks, while the EOR handles payroll, tax filing, contracts, and legal compliance in the worker\'s country.',
    how: [
      'An EOR acts as the legal employer in a foreign country and provides:',
      'Locally compliant contracts',
      'Payroll processing and tax contributions',
      'Social security and employee benefits administration',
      'Onboarding and offboarding procedures - often faster than opening a local entity',
      'By using an EOR, companies avoid the complexity and cost of setting up foreign subsidiaries.',
    ],
    why: [
      'Using an EOR gives companies the ability to:',
      '✅ Hire full-time global talent in days',
      '✅ Avoid permanent establishment risk',
      '✅ Ensure compliance with local labor laws',
      '✅ Expand into new markets without legal bottlenecks',
      'This is especially useful for startups and NGOs hiring across LATAM, Africa, or Southeast Asia - where entity setup is costly or slow.',
    ],
    example:
      'A U.S.-based startup wants to hire a full-time engineer in Argentina. Instead of opening a local entity, they partner with an EOR that: Drafts a compliant employment contract under Argentine law. Handles tax registration and monthly filings. Pays the engineer in USD (via wallet) or Argentine pesos. Ensures full cross-border compliance - no misclassification risk.',
    related: [
      { label: 'Global Payroll', href: '/glossary/global-payroll' },
      { label: 'Cross-Border Compliance', href: '/glossary/cross-border-compliance' },
      { label: 'USD Wallet', href: '/glossary/usd-wallet' },
      { label: 'Stablecoin Payroll', href: '/glossary/crypto-payroll' },
    ],
    faqs: [
      {
        q: 'What is an Employer of Record (EOR)?',
        a: 'An Employer of Record (EOR) is a third-party provider that legally employs international workers on your behalf. It manages payroll, taxes, compliance, and employment contracts while you retain day-to-day control of the worker\'s tasks.',
      },
      {
        q: 'How does an EOR work?',
        a: 'An EOR becomes the legal employer in a foreign country. It provides compliant contracts, manages local tax and payroll, and avoids the need for you to open a local legal entity.',
      },
      {
        q: 'Why use an EOR?',
        a: 'Using an EOR lets companies hire full-time employees abroad without legal setup. It reduces compliance risks, accelerates hiring, and supports global scaling.',
      },
    ],
    datePublished: new Date().toISOString(),
  },
  'usdc': {
    slug: 'usdc',
    term: 'USDC',
    excerpt:
      'A U.S.-regulated stablecoin issued by Circle, pegged 1:1 to the U.S. dollar, enabling fast, transparent, and low-cost global payments.',
    definition:
      'USDC is a U.S.-regulated stablecoin issued by Circle, pegged 1:1 to the U.S. dollar. Built on leading blockchains like Ethereum and Solana, it enables fast, transparent, and low-cost global payments - ideal for compliant cross-border payroll.',
    how: [
      'USDC combines dollar stability with blockchain flexibility. Key features include:',
      'Full reserves - 100% dollar-backed and audited monthly',
      'Multi-chain support - Runs on Ethereum (compatibility) and Solana (speed)',
      'Smart contracts - Supports automated finance and programmable payroll',
      'Fintech-ready - Integrated with major exchanges, wallets, and payroll platforms',
      'Its regulatory clarity and trusted reserve structure make USDC a go-to choice for startups, NGOs, and payroll platforms.',
    ],
    why: [
      'USDC helps modern global teams move money better:',
      '✅ Regulatory trust - Backed by audited U.S. reserves',
      '✅ Instant payouts - No bank delays or intermediaries',
      '✅ Zero FX fees - Protects both sender and receiver',
      '✅ Stable store of value - Useful in volatile markets',
      'USDC is perfect for international teams that need transparent, fast, and secure payouts - without compromise.',
    ],
    example:
      'An El Salvador-based designer receives $1,000 in USDC via SigmaRemote. Funds arrive in seconds - no bank needed, no FX losses. They hold USDC, convert to local currency when needed, or swap to crypto - all with full regulatory clarity.',
    related: [
      { label: 'USDT', href: '/glossary/usdt' },
      { label: 'Stablecoins', href: '/glossary/stablecoins' },
      { label: 'Crypto Payroll', href: '/glossary/crypto-payroll' },
      { label: 'USD Wallet', href: '/glossary/usd-wallet' },
    ],
    faqs: [
      {
        q: 'What is USDC?',
        a: 'USDC is a regulated stablecoin pegged 1:1 to the U.S. dollar, issued by Circle. It enables fast, low-cost international payments on blockchains like Ethereum and Solana.',
      },
      {
        q: 'Why use USDC for payroll?',
        a: 'USDC allows instant, FX-free payments with regulatory clarity. It\'s ideal for international teams who want fast, secure, and compliant salary distribution.',
      },
      {
        q: 'Is USDC safer than USDT?',
        a: 'USDC is fully audited and regulated under U.S. financial oversight, which some companies prefer over Tether (USDT) due to its stricter transparency and reserve policies.',
      },
    ],
    datePublished: new Date().toISOString(),
  },
  'usdt': {
    slug: 'usdt',
    term: 'USDT (USD Tether)',
    excerpt:
      'A stablecoin pegged 1:1 to the U.S. dollar, issued by Tether Ltd, enabling instant, low-cost global payments without traditional banks.',
    definition:
      'USDT is a stablecoin pegged 1:1 to the U.S. dollar, issued by Tether Ltd. It operates on multiple blockchains - including Ethereum (ERC-20) and Tron (TRC-20) - enabling instant, low-cost global payments without traditional banks. It\'s widely used for international payroll, especially in emerging markets.',
    how: [
      'USDT combines blockchain speed with dollar stability. Key features include:',
      'Stable value - Pegged 1 USDT ≈ 1 USD',
      'Multi-chain support - Runs on Ethereum for DeFi access; on Tron for low-fee payments',
      'Wallet compatibility - Usable via MetaMask, Trust Wallet, and major crypto exchanges',
      'Borderless access - Ideal for underbanked regions like LATAM and Africa',
      'Despite concerns around reserves, USDT remains dominant due to liquidity, familiarity, and ease of use.',
    ],
    why: [
      'USDT solves real-world pain points for global teams:',
      '✅ No FX fees - Eliminate 2-4% lost on currency conversion',
      '✅ Instant settlement - Payouts process in seconds',
      '✅ Banking freedom - Accessible without a local bank account',
      '✅ Financial control - Freelancers can hold or convert when local rates are favorable',
      'For startups and remote teams, USDT unlocks faster, cheaper international payroll.',
    ],
    example:
      'A Venezuelan freelancer earns $2,500 in USDT via SigmaRemote. The funds arrive instantly in their Trust Wallet - no FX losses, no banking delays. They hold the USDT as a hedge against inflation and convert it locally when needed.',
    related: [
      { label: 'USDC', href: '/glossary/usdc' },
      { label: 'Stablecoins', href: '/glossary/stablecoins' },
      { label: 'USD Wallet', href: '/glossary/usd-wallet' },
      { label: 'Crypto Payroll', href: '/glossary/crypto-payroll' },
    ],
    faqs: [
      {
        q: 'What is USDT?',
        a: 'USDT (Tether) is a blockchain-based stablecoin pegged 1:1 to the U.S. dollar. It enables fast, low-cost international payments without relying on traditional banks.',
      },
      {
        q: 'Why use USDT for payroll?',
        a: 'USDT allows instant, fee-free cross-border payments and offers banking freedom in underbanked or inflation-prone regions. It\'s ideal for global teams and freelancers.',
      },
      {
        q: 'What wallets support USDT?',
        a: 'USDT can be stored in MetaMask, Trust Wallet, Binance, and other major crypto wallets. TRC-20 and ERC-20 versions are supported across different blockchains.',
      },
    ],
    datePublished: new Date().toISOString(),
  },
  'cross-border-compliance': {
    slug: 'cross-border-compliance',
    term: 'Cross-Border Compliance',
    excerpt:
      'The practice of ensuring that hiring, paying, and managing international workers aligns with each country\'s labor, tax, immigration, and data protection laws.',
    definition:
      'Cross-border compliance is the practice of ensuring that hiring, paying, and managing international workers aligns with each country\'s labor, tax, immigration, and data protection laws. It protects global teams from fines, audits, and permanent establishment risks - while enabling fast, legal expansion across markets.',
    how: [
      'Managing compliance across countries means adapting to unique local rules. Key areas include:',
      'Labor laws - e.g. Brazil\'s 13th-month salary and FGTS; the Philippines\' 13th-month pay',
      'Taxes and social contributions - e.g. UK\'s National Insurance; Singapore\'s CPF',
      'Permanent establishment (PE) - Avoiding unintended tax presence from remote team structures',
      'Immigration - Ensuring remote workers and digital nomads meet visa/residency rules',
      'Data protection - Aligning with regulations like GDPR, CCPA, or China\'s PIPL',
      'Platforms like SigmaRemote automate these layers, making it easy to stay compliant while scaling internationally.',
    ],
    why: [
      'Cross-border compliance reduces legal, financial, and operational risks. It enables:',
      '✅ Risk mitigation - Avoid fines, audits, or shutdowns',
      '✅ Reputation protection - Prevents misclassification and payment errors',
      '✅ Operational continuity - Keeps your business running globally without disruption',
      '✅ Scalability - Allows fast entry into new markets without legal delays',
      'Without it, companies can face six- or seven-figure fines, public exposure, and blocked operations in key regions.',
    ],
    example:
      'A U.S. startup hires developers in Brazil, where employers are required to provide a 13th-month salary and contribute to FGTS (a social security fund). SigmaRemote ensures compliance by automating required filings and payments - preventing tax exposure and misclassification risk while keeping operations smooth.',
    related: [
      { label: 'Global Payroll', href: '/glossary/global-payroll' },
      { label: 'Employer of Record (EOR)', href: '/glossary/employer-of-record' },
      { label: 'USD Wallet', href: '/glossary/usd-wallet' },
      { label: 'FX Fees', href: '/glossary/fx-fees' },
    ],
    faqs: [
      {
        q: 'What is Cross-Border Compliance?',
        a: 'Cross-border compliance is the practice of ensuring that hiring, paying, and managing international workers follows local labor, tax, immigration, and data protection laws. It helps companies avoid legal and financial risks while expanding globally.',
      },
      {
        q: 'Why is cross-border compliance important?',
        a: 'It prevents fines, audits, misclassification issues, and blocked business operations. It also protects a company\'s reputation and enables scalable international growth.',
      },
      {
        q: 'What are the risks of non-compliance?',
        a: 'Non-compliance can lead to labor violations, permanent establishment taxes, denied visas, fines, and reputational damage. It may also block your ability to hire or operate in a country.',
      },
    ],
    datePublished: new Date().toISOString(),
  },
  'global-payroll': {
    slug: 'global-payroll',
    term: 'Global Payroll',
    excerpt:
      'The process of managing salary payments, taxes, and compliance for employees and contractors across multiple countries using automated systems and specialized providers.',
    definition:
      'Global payroll is the process of managing salary payments, taxes, and compliance for employees and contractors across multiple countries. It allows companies to pay international teams accurately, legally, and often without setting up local entities - using automated systems and specialized providers.',
    how: [
      'Global payroll systems consolidate multi-country payroll into a single streamlined process. They typically manage:',
      'Currency conversions and international payouts',
      'Tax documentation, such as W‑8BEN forms',
      'Local labor law compliance (see Cross-Border Compliance)',
      'Contractor onboarding and classification, often via an Employer of Record (EOR)',
      'Alternative payout methods, like USD Wallets or Crypto Payroll, to bypass banking delays',
    ],
    why: [
      'For startups, NGOs, and scaling teams, global payroll helps:',
      '✅ Hire international talent legally - without creating local entities',
      '✅ Pay workers in local currency, USD, or crypto',
      '✅ Eliminate errors, FX fees, and onboarding friction',
      'Without a proper global payroll system, teams risk:',
      '❌ Payment delays and administrative overhead',
      '❌ Legal issues due to misclassification',
      '❌ Hidden FX markups that shrink budgets',
    ],
    example:
      'A U.S. startup hiring developers in Brazil and Nigeria uses a global payroll platform to: Onboard contractors through WhatsApp in under 15 minutes. Pay in USD wallets or stablecoins, bypassing banking delays. Automatically ensure compliance with local tax and labor laws.',
    related: [
      { label: 'Employer of Record (EOR)', href: '/glossary/employer-of-record' },
      { label: 'USD Wallet', href: '/glossary/usd-wallet' },
      { label: 'Crypto Payroll', href: '/glossary/crypto-payroll' },
      { label: 'Cross-Border Compliance', href: '/glossary/cross-border-compliance' },
      { label: 'W‑8BEN Form', href: '/glossary/w-8ben-form' },
    ],
    faqs: [
      {
        q: 'What is global payroll?',
        a: 'Global payroll is the process of managing salary, taxes, and compliance for international employees and contractors. It helps companies pay their global teams accurately and legally, often without setting up local entities.',
      },
      {
        q: 'How does global payroll work?',
        a: 'Global payroll platforms consolidate multi-country payments into one system. They handle currency conversion, tax documents like W-8BEN forms, legal compliance, contractor onboarding, and support alternative payout methods like USD wallets or crypto.',
      },
      {
        q: 'Do I need a local entity to run global payroll?',
        a: 'No, many companies use global payroll providers or Employer of Record (EOR) services to hire and pay workers legally in other countries-without setting up a local legal entity.',
      },
    ],
    datePublished: new Date().toISOString(),
  },
  'fx-fees': {
    slug: 'fx-fees',
    term: 'FX Fees',
    excerpt:
      'Foreign exchange fees are charges applied when converting one currency to another during international payments, including flat transaction costs and hidden markups.',
    definition:
      'FX fees (foreign exchange fees) are charges applied when converting one currency to another - usually during international payments. These fees often include both: Flat transaction charges (e.g., $10-$50) and Hidden markups on the exchange rate (2-4% above the real mid-market rate). They commonly affect international payroll, global hiring, and cross-border contractor payouts.',
    how: [
      'FX fees typically include:',
      'Flat fees: Fixed per-transaction costs charged by banks or processors (e.g., $25 per wire).',
      'Exchange rate markups: A hidden 2-4% increase over the real mid-market rate.',
      'Some platforms claim "no fees" but profit from these markups behind the scenes.',
      'Example:',
      'Paying $2,500 to a contractor with a 3.2% markup = $80 per transaction',
      '→ That\'s $960 per year lost, per contractor.',
    ],
    why: [
      'FX fees quietly drain money across every international payment:',
      '❌ Budget loss: Hidden fees cut into growth funds',
      '❌ Talent friction: Contractors receive less than promised',
      '❌ Reduced appeal: Global offers become less competitive',
      '❌ Scaling pain: Costs compound as your global team grows',
      'Platforms like SigmaRemote avoid these fees using USD wallets and stablecoin infrastructure - so your team keeps more of what you pay them.',
    ],
    example:
      'A U.S. startup pays an Argentine contractor $2,500/month. With a 3.2% FX markup, they lose $80/month → $960/year. By switching to a USD wallet, the full $2,500 is received with zero fees, improving satisfaction and retention.',
    related: [
      { label: 'USD Wallet', href: '/glossary/usd-wallet' },
      { label: 'Stablecoin Payroll', href: '/glossary/crypto-payroll' },
      { label: 'Cross-Border Compliance', href: '/glossary/cross-border-compliance' },
      { label: 'Global Payroll', href: '/glossary/global-payroll' },
    ],
    faqs: [
      {
        q: 'What are FX fees?',
        a: 'FX fees are charges applied during currency conversion, including flat transaction costs and hidden markups over the mid-market rate. They impact international payroll and cross-border payments.',
      },
      {
        q: 'How can I avoid FX fees?',
        a: 'You can avoid FX fees by using USD wallets or stablecoin payroll systems, which allow international contractors to receive and hold USD without forced conversions.',
      },
      {
        q: 'Why do FX fees matter in payroll?',
        a: 'FX fees reduce the net payout contractors receive and increase employer costs. Minimizing or eliminating them improves global hiring competitiveness and boosts team satisfaction.',
      },
    ],
    datePublished: new Date().toISOString(),
  },
  'usd-wallet': {
    slug: 'usd-wallet',
    term: 'USD Wallet',
    excerpt:
      'A digital account for receiving, storing, and sending U.S. dollars without needing a U.S. bank account, used by global contractors and remote teams.',
    definition:
      'A USD wallet is a digital account for receiving, storing, and sending U.S. dollars-without needing a U.S. bank account. Used by global contractors and remote teams, it speeds up payments and avoids forced currency conversion.',
    how: [
      'USD wallets are virtual dollar-denominated accounts provided by fintech platforms or licensed U.S. institutions. Core features include:',
      'Instant payouts - Receive USD in minutes',
      'Store USD - No forced conversion to local currency',
      'Withdraw anywhere - Send to banks, cards, or crypto wallets',
      'Global access - Contractors in LATAM, Africa, or Asia can use without local banking',
      'Example: SigmaRemote helps a Kenyan developer receive USD directly into their wallet, avoiding local bank delays and exchange markups.',
    ],
    why: [
      'USD wallets deliver four major benefits:',
      '✅ No FX fees - Save 2-4% per transaction',
      '✅ Speed - Instant funds, not multi-day delays',
      '✅ Control - Choose when to convert',
      '✅ Stability - Shield against local currency depreciation',
      'They\'re especially valuable in emerging markets with inflation or capital controls.',
    ],
    example:
      'A Nigerian developer earns $2,500 monthly through SigmaRemote\'s USD wallet. By skipping a 3% FX fee, they save ~$75 per payout-or $900 annually. They can hold USD or convert to Naira when exchange rates are favorable.',
    related: [
      { label: 'FX Fees', href: '/glossary/fx-fees' },
      { label: 'Stablecoin Payroll', href: '/glossary/crypto-payroll' },
      { label: 'Cross-Border Compliance', href: '/glossary/cross-border-compliance' },
      { label: 'Global Payroll', href: '/glossary/global-payroll' },
    ],
    faqs: [
      {
        q: 'What is a USD wallet?',
        a: 'A USD wallet is a digital account that allows users to receive, hold, and send U.S. dollars without a U.S.-based bank account. It is commonly used by global contractors and remote teams to avoid currency conversion fees and delays.',
      },
      {
        q: 'How do USD wallets work?',
        a: 'USD wallets are virtual accounts provided by fintech platforms or U.S.-licensed institutions. Users receive USD instantly, store funds without conversion, and withdraw to local banks, cards, or crypto wallets from anywhere in the world.',
      },
      {
        q: 'Why are USD wallets important for global teams?',
        a: 'USD wallets help eliminate FX fees, speed up payments, and give contractors control over when to convert their funds. They are especially valuable in countries with inflation or volatile exchange rates.',
      },
    ],
    datePublished: new Date().toISOString(),
  },
  'aor-cor-eor': {
    slug: 'aor-cor-eor',
    term: "AOR, CoR, and EOR?",
    excerpt:
      'Three different service models for hiring international talent: Agent of Record (AOR), Contractor of Record (CoR), and Employer of Record (EOR).',
    definition:
      'When hiring international talent, companies often face a tough question: What type of service do I actually need?\n\n• Do you want to hire full-time employees abroad?\n• Or pay independent contractors across borders?\n• Or stay in control while outsourcing compliance?\n\nThis is where EOR, CoR, and AOR come into play. They\'re often confused - but they solve very different problems.',
    how: [
      'A U.S. startup hires a full-time engineer in Argentina → uses an EOR to issue a compliant employment contract and handle taxes.',
      'A design agency wants to pay a video editor in Brazil → uses a CoR to handle contracts and classification for a freelancer.',
      'A marketing firm has contractors in Colombia and Kenya but wants to manage relationships directly → uses an AOR for compliance support while staying the legal payer.',
    ],
    howTitle: 'Real Use Case Examples',
    why: [
      'Choosing the wrong model can lead to:',
      '❌ Worker misclassification fines',
      '❌ "Permanent establishment" tax exposure',
      '❌ Delays in onboarding or blocked payments',
      '',
      'SigmaRemote offers all three options, helping you grow your team globally - without the legal or operational friction.',
    ],
    whyTitle: 'Why It Matters',
    example:
      'Still not sure? Many companies start with AOR or CoR for flexibility, then shift to EOR if they scale into employee relationships.',
    related: [
      { label: 'Employer of Record (EOR)', href: '/glossary/employer-of-record' },
      { label: 'Contractor of Record (CoR)', href: '/glossary/contractor-of-record' },
      { label: 'Agent of Record (AOR)', href: '/glossary/agent-of-record' },
      { label: 'Cross-Border Compliance', href: '/glossary/cross-border-compliance' },
      { label: 'Contractor Classification', href: '/glossary/contractor-classification' },
    ],
    relatedTitle: 'Related Glossary Terms',
    faqs: [
      {
        q: 'What is the difference between AOR, CoR, and EOR?',
        a: 'An EOR (Employer of Record) hires full-time employees on your behalf. A CoR (Contractor of Record) contracts freelancers for you. An AOR (Agent of Record) helps you stay compliant while you retain the contractor relationship.',
      },
      {
        q: 'When should I use an EOR vs CoR vs AOR?',
        a: 'Use an EOR for full-time hires, a CoR for international freelancers when you want full offload, and an AOR when you want to keep control of the contractor but reduce compliance risk.',
      },
      {
        q: 'Which is better for global contractor hiring?',
        a: 'For global contractors, CoR offers full compliance handling, while AOR gives you more control. It depends on whether you want to offload or manage the relationship directly.',
      },
    ],
    tables: [
      {
        title: '',
        headers: ['Term', 'Stands For', 'Legal Employer?', 'Best For'],
        rows: [
          ['EOR', 'Employer of Record', '✅ Yes (They employ the worker)', 'Full-time employees in foreign countries'],
          ['CoR', 'Contractor of Record', '✅ Yes (They contract the freelancer)', 'International freelancers, you want to be fully offloaded'],
          ['AOR', 'Agent of Record', '❌ No (You remain the employer)', 'Contractors, where you want to stay in control but reduce risk']
        ]
      },
      {
        title: 'How to Choose: EOR vs CoR vs AOR',
        headers: ['Scenario', 'Best Fit'],
        rows: [
          ['You want to hire employees with benefits, social security, and protections', '✅ EOR'],
          ['You want to work with international freelancers and don\'t want to deal with contracts or compliance', '✅ CoR'],
          ['You want to manage your own contractor relationships but need help with payments and compliance', '✅ AOR']
        ]
      }
    ],
    datePublished: new Date().toISOString(),
  },
  'payroll-cycle': {
    slug: 'payroll-cycle',
    term: 'Payroll Cycle',
    excerpt:
      'A payroll cycle is the recurring schedule a company follows to calculate wages, withhold taxes, and issue payments to employees or contractors.',
    definition:
      'A payroll cycle is the recurring schedule a company follows to calculate wages, withhold taxes, and issue payments to employees or contractors. Common cycles include weekly, biweekly, semi-monthly, and monthly pay periods.',
    how: [
      '__NO_BULLET__Payroll cycles vary by country, contract type, and company preference. Each cycle determines:',
      '**When pay is calculated** (e.g. 1st-15th)',
      '**When payments are made** (e.g. 5th and 20th)',
      '**Compliance rules** (e.g. monthly in Brazil, semi-monthly in Mexico)',
      '__NO_BULLET__For global teams, managing multiple cycles across borders adds complexity:',
    ],
    howTitle: 'How Payroll Cycles Work',
    why: [
      'Understanding and choosing the right payroll cycle is crucial because it affects:',
      'Contractor trust - Predictable payments reduce churn',
      'Cash flow - Different cycles create different funding demands',
      'Compliance - Many countries legally require a specific cadence',
      'Operations - Smooth payroll boosts team morale and reduces disputes',
    ],
    whyTitle: 'Why Payroll Cycles Matter',
    example:
      'A U.S. startup hires contractors in Brazil, Argentina, and Nigeria.\nEach country has different payout expectations. With SigmaRemote, they consolidate cycles into a biweekly contractor-friendly flow while maintaining local compliance and issuing automated reminders.',
    related: [
      { label: 'Global Payroll', href: '/glossary/global-payroll' },
      { label: 'Managed Payroll', href: '/glossary/managed-payroll' },
      { label: 'Payroll Taxes', href: '/glossary/payroll-taxes' },
      { label: 'Cross-Border Compliance', href: '/glossary/cross-border-compliance' },
      { label: '13th-Month Salary', href: '/glossary/13th-month-salary' },
    ],
    faqs: [
      {
        q: 'What is a payroll cycle?',
        a: 'A payroll cycle is the schedule on which a company calculates earnings and pays workers. Common cycles include monthly, biweekly, and weekly schedules.',
      },
      {
        q: 'Which payroll cycle is best for international teams?',
        a: 'Biweekly or monthly cycles are most common globally. The best cycle depends on local law and contractor expectations. A global payroll platform can unify them.',
      },
      {
        q: 'Can I use different payroll cycles in different countries?',
        a: 'Yes, but managing them manually can be complex. Platforms like SigmaRemote streamline multi-country cycles while maintaining local compliance.',
      },
    ],
    tables: [
      {
        title: '',
        headers: ['Country', 'Standard Payroll Cycle'],
        rows: [
          ['🇧🇷 Brazil', 'Monthly (mandatory)'],
          ['🇲🇽 Mexico', 'Biweekly (common)'],
          ['🇵🇭 Philippines', 'Monthly with 13th-month split'],
          ['🇳🇬 Nigeria', 'Monthly'],
          ['🇺🇸 U.S.', 'Biweekly or Semi-monthly'],
        ],
      },
    ],
    tableFooter: 'Platforms like SigmaRemote help unify these timelines in one dashboard.',
    datePublished: new Date().toISOString(),
  },
};

// ---------- HELPER: Build JSON-LD ----------
function buildJsonLd(item: GlossaryItem) {
  const baseUrl = 'https://www.sigmaremote.com';
  const url = `${baseUrl}/glossary/${item.slug}`;
  const imageUrl = 'https://framerusercontent.com/images/7PVdnLLWFnOOVEhlu5NLszpYRY.png'; // standard hero image

  const webPage = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${item.term} - SigmaRemote Glossary`,
    url,
    description: item.excerpt,
    inLanguage: 'en',
  };

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Resources', item: `${baseUrl}/resources` },
      { '@type': 'ListItem', position: 2, name: 'Glossary', item: `${baseUrl}/glossary` },
      { '@type': 'ListItem', position: 3, name: item.term, item: url },
    ],
  };

  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${item.term} - Definition & Use Cases`,
    description: item.excerpt,
    image: imageUrl,
    datePublished: item.datePublished || new Date().toISOString(),
    author: {
      '@type': 'Person',
      name: 'SigmaRemote Editorial',
      url: `${baseUrl}/about`,
    },
    publisher: {
      '@type': 'Organization',
      name: 'SigmaRemote',
      url: baseUrl,
    },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity:
      item.faqs?.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })) || [],
  };

  return JSON.stringify([webPage, breadcrumbs, article, faq]);
}

// ---------- PAGE ----------
export default function GlossaryDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const item = GLOSSARY_STORE[String(slug)];

  if (!item) {
    notFound();
  }

  const schemaJson = buildJsonLd(item);

  return (
    <>
      {/* JSON-LD */}
      <Script
        id="glossary-jsonld"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: schemaJson }}
      />

      {/* CONTENT */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-3xl px-4 md:px-6 py-16 md:py-24">
          {/* Breadcrumbs */}
          <nav className="mb-6 text-sm text-neutral-500">
            <Link href="/resources" className="hover:underline">
              Resources
            </Link>{' '}
            /{' '}
            <Link href="/glossary" className="hover:underline">
              Glossary
            </Link>{' '}
            / <span className="text-neutral-800">{item.term}</span>
          </nav>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-neutral-900">
            {item.term}
          </h1>
          <p className="mt-3 text-neutral-600">{item.excerpt}</p>

          {/* Definition - Required pattern: H3 + answer */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold text-neutral-900">
              What is {item.term}?
            </h3>
            <div className="mt-3 text-neutral-800 leading-relaxed whitespace-pre-line">{item.definition}</div>
          </div>

          {/* For aor-cor-eor: Show first table after definition */}
          {slug === 'aor-cor-eor' && item.tables && item.tables.length > 0 && item.tables[0] && (
            <div className="mt-10">
              <div className="mb-8">
                {item.tables[0].title && <h3 className="text-xl font-semibold text-neutral-900 mb-4">{item.tables[0].title}</h3>}
                <div className="overflow-x-auto rounded-lg border border-neutral-200 shadow-sm">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-neutral-50 to-neutral-100 border-b border-neutral-200">
                        {item.tables[0].headers.map((header, headerIndex) => (
                          <th
                            key={headerIndex}
                            className="px-6 py-4 text-left font-semibold text-neutral-900 text-sm uppercase tracking-wide"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      {item.tables[0].rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-neutral-50 transition-colors">
                          {row.map((cell, cellIndex) => {
                            const hasCheckmark = cell.includes('✅');
                            const hasXmark = cell.includes('❌');
                            
                            let content = cell;
                            let icon = null;
                            
                            if (hasCheckmark) {
                              content = cell.replace('✅', '').trim();
                              icon = <CheckCircle2 className="h-5 w-5 text-green-600 inline-block mr-2" />;
                            } else if (hasXmark) {
                              content = cell.replace('❌', '').trim();
                              icon = <XCircle className="h-5 w-5 text-red-600 inline-block mr-2" />;
                            }
                            
                            return (
                              <td
                                key={cellIndex}
                                className="px-6 py-4 text-neutral-800"
                              >
                                <div className="flex items-start">
                                  {icon}
                                  <span>{content}</span>
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* How it works */}
          {item.how && item.how.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-neutral-900">
                {item.howTitle || 'How it works'}
              </h3>
              <div className="mt-3">
                {item.how.map((line, i) => {
                  const isWarning = line.startsWith('❌');
                  const isSuccess = line.startsWith('✅');
                  const noBullet = line.startsWith('__NO_BULLET__');
                  const cleanText = isWarning ? line.replace('❌', '').trim() : 
                                   isSuccess ? line.replace('✅', '').trim() : 
                                   noBullet ? line.replace('__NO_BULLET__', '').trim() : line;
                  
                  if (isWarning) {
                    return (
                      <div key={i} className="mb-2">
                        <div className="bg-red-50 border border-red-100 rounded-lg px-4 py-3 text-red-900">
                          {cleanText}
                        </div>
                      </div>
                    );
                  }
                  
                  if (isSuccess) {
                    return (
                      <div key={i} className="mb-2">
                        <div className="bg-green-50 border border-green-100 rounded-lg px-4 py-3 text-green-900">
                          {cleanText}
                        </div>
                      </div>
                    );
                  }
                  
                  if (noBullet) {
                    return (
                      <p key={i} className="text-neutral-800 mb-2">
                        {cleanText}
                      </p>
                    );
                  }
                  
                  // Handle bold text with ** markers
                  const parts = cleanText.split(/(\*\*.*?\*\*)/g);
                  return (
                    <ul key={i} className="list-disc pl-5 mb-2">
                      <li className="text-neutral-800">
                        {parts.map((part, idx) => {
                          if (part.startsWith('**') && part.endsWith('**')) {
                            return <strong key={idx}>{part.slice(2, -2)}</strong>;
                          }
                          return <span key={idx}>{part}</span>;
                        })}
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
          )}

          {/* For payroll-cycle: Show table after "How it works" */}
          {slug === 'payroll-cycle' && item.tables && item.tables.length > 0 && item.tables[0] && (
            <div className="mt-10">
              <div className="mb-8">
                {item.tables[0].title && <h3 className="text-xl font-semibold text-neutral-900 mb-4">{item.tables[0].title}</h3>}
                <div className="overflow-x-auto rounded-lg border border-neutral-200 shadow-sm">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-neutral-50 to-neutral-100 border-b border-neutral-200">
                        {item.tables[0].headers.map((header, headerIndex) => (
                          <th
                            key={headerIndex}
                            className="px-6 py-4 text-left font-semibold text-neutral-900 text-sm uppercase tracking-wide"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      {item.tables[0].rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-neutral-50 transition-colors">
                          {row.map((cell, cellIndex) => {
                            const hasCheckmark = cell.includes('✅');
                            const hasXmark = cell.includes('❌');
                            
                            let content = cell;
                            let icon = null;
                            
                            if (hasCheckmark) {
                              content = cell.replace('✅', '').trim();
                              icon = <CheckCircle2 className="h-5 w-5 text-green-600 inline-block mr-2" />;
                            } else if (hasXmark) {
                              content = cell.replace('❌', '').trim();
                              icon = <XCircle className="h-5 w-5 text-red-600 inline-block mr-2" />;
                            }
                            
                            return (
                              <td
                                key={cellIndex}
                                className="px-6 py-4 text-neutral-800"
                              >
                                <div className="flex items-start">
                                  {icon}
                                  <span>{content}</span>
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                {item.tableFooter && (
                  <p className="mt-4 text-neutral-800">{item.tableFooter}</p>
                )}
              </div>
            </div>
          )}

          {/* For aor-cor-eor: Show second table after "How it works" */}
          {slug === 'aor-cor-eor' && item.tables && item.tables.length > 1 && item.tables[1] && (
            <div className="mt-10">
              <div className="mb-8">
                {item.tables[1].title && <h3 className="text-xl font-semibold text-neutral-900 mb-4">{item.tables[1].title}</h3>}
                <div className="overflow-x-auto rounded-lg border border-neutral-200 shadow-sm">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gradient-to-r from-neutral-50 to-neutral-100 border-b border-neutral-200">
                        {item.tables[1].headers.map((header, headerIndex) => (
                          <th
                            key={headerIndex}
                            className="px-6 py-4 text-left font-semibold text-neutral-900 text-sm uppercase tracking-wide"
                          >
                            {header}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-200">
                      {item.tables[1].rows.map((row, rowIndex) => (
                        <tr key={rowIndex} className="hover:bg-neutral-50 transition-colors">
                          {row.map((cell, cellIndex) => {
                            const hasCheckmark = cell.includes('✅');
                            const hasXmark = cell.includes('❌');
                            
                            let content = cell;
                            let icon = null;
                            
                            if (hasCheckmark) {
                              content = cell.replace('✅', '').trim();
                              icon = <CheckCircle2 className="h-5 w-5 text-green-600 inline-block mr-2" />;
                            } else if (hasXmark) {
                              content = cell.replace('❌', '').trim();
                              icon = <XCircle className="h-5 w-5 text-red-600 inline-block mr-2" />;
                            }
                            
                            return (
                              <td
                                key={cellIndex}
                                className="px-6 py-4 text-neutral-800"
                              >
                                <div className="flex items-start">
                                  {icon}
                                  <span>{content}</span>
                                </div>
                              </td>
                            );
                          })}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Why it matters */}
          {item.why && item.why.length > 0 && (
            <div className="mt-10">
              <h3 className="text-xl font-semibold text-neutral-900">
                {item.whyTitle || 'Why it matters'}
              </h3>
              <ul className="mt-3 list-disc pl-5 text-neutral-800 space-y-2">
                {item.why.map((line, i) => {
                  const isWarning = line.startsWith('❌');
                  const isSuccess = line.startsWith('✅');
                  const cleanText = isWarning ? line.replace('❌', '').trim() : 
                                   isSuccess ? line.replace('✅', '').trim() : line;
                  
                  if (line === '') {
                    return <div key={i} className="h-2"></div>;
                  }
                  
                  if (isWarning) {
                    return (
                      <li key={i} className="list-none -ml-5">
                        <div className="bg-red-50 border border-red-100 rounded-lg px-4 py-3 text-red-900">
                          {cleanText}
                        </div>
                      </li>
                    );
                  }
                  
                  if (isSuccess) {
                    return (
                      <li key={i} className="list-none -ml-5">
                        <div className="bg-green-50 border border-green-100 rounded-lg px-4 py-3 text-green-900">
                          {cleanText}
                        </div>
                      </li>
                    );
                  }
                  
                  return <li key={i}>{line}</li>;
                })}
              </ul>
            </div>
          )}

          {/* Example */}
          {item.example && (
            <div className="mt-10">
              {slug !== 'aor-cor-eor' && (
                <h3 className="text-xl font-semibold text-neutral-900">Example</h3>
              )}
              <p className={slug === 'aor-cor-eor' ? 'text-neutral-800 leading-relaxed' : 'mt-3 text-neutral-800 leading-relaxed'}>{item.example}</p>
            </div>
          )}

          {/* Tables - Show normally for non-aor-cor-eor and non-payroll-cycle pages */}
          {slug !== 'aor-cor-eor' && slug !== 'payroll-cycle' && item.tables && item.tables.length > 0 && (
            <div className="mt-10">
              {item.tables.map((table, tableIndex) => (
                <div key={tableIndex} className="mb-8">
                  {table.title && <h3 className="text-xl font-semibold text-neutral-900 mb-4">{table.title}</h3>}
                  <div className="overflow-x-auto rounded-lg border border-neutral-200 shadow-sm">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-gradient-to-r from-neutral-50 to-neutral-100 border-b border-neutral-200">
                          {table.headers.map((header, headerIndex) => (
                            <th
                              key={headerIndex}
                              className="px-6 py-4 text-left font-semibold text-neutral-900 text-sm uppercase tracking-wide"
                            >
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-neutral-200">
                        {table.rows.map((row, rowIndex) => (
                          <tr key={rowIndex} className="hover:bg-neutral-50 transition-colors">
                            {row.map((cell, cellIndex) => {
                              // Check if cell contains checkmark or X icons
                              const hasCheckmark = cell.includes('✅');
                              const hasXmark = cell.includes('❌');
                              
                              let content = cell;
                              let icon = null;
                              
                              if (hasCheckmark) {
                                content = cell.replace('✅', '').trim();
                                icon = <CheckCircle2 className="h-5 w-5 text-green-600 inline-block mr-2" />;
                              } else if (hasXmark) {
                                content = cell.replace('❌', '').trim();
                                icon = <XCircle className="h-5 w-5 text-red-600 inline-block mr-2" />;
                              }
                              
                              return (
                                <td
                                  key={cellIndex}
                                  className="px-6 py-4 text-neutral-800"
                                >
                                  <div className="flex items-start">
                                    {icon}
                                    <span>{content}</span>
                                  </div>
                                </td>
                              );
                            })}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Related terms */}
          {item.related && item.related.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-semibold text-neutral-900">
                {item.relatedTitle || 'Related Terms'}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {item.related.map((r) => (
                  <Link
                    key={r.href}
                    href={r.href}
                    className="inline-flex items-center gap-1 rounded-full border border-black/10 bg-white px-3 py-1.5 text-sm text-neutral-800 hover:bg-black/5"
                  >
                    <Link2 className="h-4 w-4" />
                    {r.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Back link */}
          <div className="mt-8">
            <Link
              href="/glossary"
              className="inline-flex items-center gap-2 text-sm text-neutral-700 hover:underline"
            >
              <BookOpen className="h-4 w-4" />
              Back to all terms
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
