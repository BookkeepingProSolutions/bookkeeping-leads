export type NicheId = 'construction' | 'lawyer' | 'real-estate' | 'medical';

export interface Ebook {
    id: string;
    title: string;
    description: string;
    icon: string;
    savings: string;
    pages: string;
    filename: string;
}

export interface ValueProp {
    title: string;
    description: string;
    iconSvgPath: string;
}

export interface NicheData {
    id: NicheId;
    label: string;
    icon: string;
    trustBadge: string;
    headline: string;
    headlineHighlight: string;
    subheadline: string;
    valueProps: ValueProp[];
    ebooks: Ebook[];
    services: string[];
    companyPlaceholder: string;
    emailPlaceholder: string;
    theme: {
        bgGradient: string;
        highlightText: string;
        ctaGradient: string;
        ctaHoverGradient: string;
        accentBorder: string;
        accentRing: string;
        buttonBg: string;
    };
}

export const niches: Record<NicheId, NicheData> = {
    construction: {
        id: 'construction',
        label: 'Construction',
        icon: '🏗️',
        trustBadge: 'Top-Rated Bookkeeping Service in Dover, NJ',
        headline: 'Stop Leaving Money',
        headlineHighlight: 'On The Table',
        subheadline: 'Construction business owners overpay on taxes by $15,000-$50,000/year. Get our free expert guides and start keeping more of what you earn.',
        companyPlaceholder: 'ABC Construction LLC',
        emailPlaceholder: 'john@constructionco.com',
        theme: {
            bgGradient: 'from-blue-900 via-blue-850 to-blue-950',
            highlightText: 'from-orange-400 to-amber-400',
            ctaGradient: 'from-orange-500 to-amber-500',
            ctaHoverGradient: 'from-orange-600 to-amber-600',
            accentBorder: 'border-orange-500',
            accentRing: 'ring-orange-250',
            buttonBg: 'bg-orange-500 hover:bg-orange-600',
        },
        valueProps: [
            {
                title: 'Maximize Profits',
                description: 'Keep more of your hard-earned money',
                iconSvgPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            },
            {
                title: 'Industry Expertise',
                description: 'Construction-specific strategies (WIP, Job Costing)',
                iconSvgPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
            },
            {
                title: 'Fast & Accurate',
                description: 'Free up time to focus on building',
                iconSvgPath: 'M13 10V3L4 14h7v7l9-11h-7z',
            }
        ],
        ebooks: [
            {
                id: 'financial-tricks',
                title: '7 Financial Tricks for Construction Business Owners',
                description: 'Discover proven strategies to boost profits, reduce taxes, and master job costing. Learn about optimal business structures, accountable plans, and more.',
                icon: '💰',
                savings: 'Save $50,000-$150,000/year',
                pages: '12 pages',
                filename: '7-financial-tricks-construction.html'
            },
            {
                id: 'tax-checklist',
                title: 'Construction Business Tax Minimization Checklist',
                description: 'A comprehensive checklist of deductions, strategies, and year-end planning tactics specifically for construction businesses.',
                icon: '✅',
                savings: 'Save $15,000-$50,000/year',
                pages: '8 pages',
                filename: 'tax-minimization-checklist.html'
            },
            {
                id: 'scalable-blueprint',
                title: 'The Scalable Bookkeeping Blueprint',
                description: 'Go from solo contractor to multi-million dollar company with the right financial systems at each growth stage.',
                icon: '📊',
                savings: 'Build systems for long-term growth',
                pages: '10 pages',
                filename: 'scalable-bookkeeping-blueprint.html'
            }
        ],
        services: [
            'Job Costing & WIP Tracking',
            'Accounts Payable & Receivable',
            'Payroll & Certified Payroll',
            'Catch-Up & Clean-Up Bookkeeping',
            'CPA-Ready Financial Statements',
            'Financial Dashboards & KPIs'
        ]
    },
    lawyer: {
        id: 'lawyer',
        label: 'Law Firms',
        icon: '⚖️',
        trustBadge: 'Specialized Legal Bookkeeping & Trust Accounting',
        headline: 'Protect Your Practice,',
        headlineHighlight: 'Maximize Your Profits',
        subheadline: 'Law firm owners often overpay on taxes by $20,000-$60,000/year and risk compliance audits. Get our free guides to master IOLTA and reduce your tax bill.',
        companyPlaceholder: 'Smith & Associates Law LLC',
        emailPlaceholder: 'billing@smithlaw.com',
        theme: {
            bgGradient: 'from-slate-900 via-slate-800 to-slate-950',
            highlightText: 'from-amber-400 to-yellow-500',
            ctaGradient: 'from-amber-500 to-yellow-500',
            ctaHoverGradient: 'from-amber-600 to-yellow-600',
            accentBorder: 'border-amber-500',
            accentRing: 'ring-amber-250',
            buttonBg: 'bg-amber-500 hover:bg-amber-600',
        },
        valueProps: [
            {
                title: 'IOLTA Compliance',
                description: 'Never worry about trust account audits or state bar compliance failures',
                iconSvgPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.952 11.952 0 01-7.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
            },
            {
                title: 'Tax Minimization',
                description: 'Take advantage of legal-specific deductions and SSTB wage optimizations',
                iconSvgPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            },
            {
                title: 'Practice Efficiency',
                description: 'Reclaim hours spent on billing, retainer payouts, and invoices',
                iconSvgPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
            }
        ],
        ebooks: [
            {
                id: 'trust-accounting',
                title: 'Trust Accounting Demystified: IOLTA Compliance Guide',
                description: 'Learn step-by-step how to configure and execute three-way trust reconciliations. Protect your license and eliminate bar audit anxieties.',
                icon: '⚖️',
                savings: 'Secure 100% Trust Compliance',
                pages: '11 pages',
                filename: 'scalable-bookkeeping-blueprint-lawyers.html'
            },
            {
                id: 'tax-checklist-lawyers',
                title: 'Law Firm Tax Minimization Checklist: Deduct More',
                description: 'A comprehensive checklist of deductions, S-Corp strategies, and pension options tailored to legal practitioners.',
                icon: '✅',
                savings: 'Save $20,000-$60,000/year',
                pages: '7 pages',
                filename: 'tax-minimization-checklist-lawyers.html'
            },
            {
                id: 'scalable-blueprint-lawyers',
                title: 'The Scalable Law Firm Blueprint',
                description: 'Systemize utilization rates, realization metrics, and multi-partner accounting setups for sustainable practice growth.',
                icon: '📊',
                savings: 'Build systems for legal practice scaling',
                pages: '9 pages',
                filename: '7-financial-tricks-lawyers.html'
            }
        ],
        services: [
            'Three-Way Trust Reconciliation',
            'IOLTA & Trust Account Compliance',
            'Client Ledger Maintenance',
            'Practice Management Integrations (Clio, MyCase)',
            'Partner Distribution Reporting',
            'CPA-Ready Operating Financials'
        ]
    },
    'real-estate': {
        id: 'real-estate',
        label: 'Real Estate',
        icon: '🏠',
        trustBadge: 'Expert Real Estate Bookkeeping & Tax Strategy',
        headline: 'Maximize Your Yield,',
        headlineHighlight: 'Minimize Your Tax Bill',
        subheadline: 'Real estate investors and agents overpay on taxes by $10,000-$40,000/year. Download our free guides to master depreciation and expense tracking.',
        companyPlaceholder: 'Summit Real Estate Holdings LLC',
        emailPlaceholder: 'investments@summitrealestate.com',
        theme: {
            bgGradient: 'from-emerald-950 via-emerald-900 to-emerald-950',
            highlightText: 'from-amber-300 to-emerald-400',
            ctaGradient: 'from-emerald-500 to-teal-500',
            ctaHoverGradient: 'from-emerald-600 to-teal-600',
            accentBorder: 'border-emerald-500',
            accentRing: 'ring-emerald-250',
            buttonBg: 'bg-emerald-500 hover:bg-emerald-600',
        },
        valueProps: [
            {
                title: 'Maximize Depreciation',
                description: 'Utilize cost segregation, Section 179 write-offs, and 1031 exchanges',
                iconSvgPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
            },
            {
                title: 'Portfolio Tracking',
                description: 'Monitor clean rental P&Ls and capital accounts per property/unit',
                iconSvgPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
            },
            {
                title: 'Audit Protection',
                description: 'Pristine records that satisfy IRS real estate professional activity audits',
                iconSvgPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.952 11.952 0 01-7.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
            }
        ],
        ebooks: [
            {
                id: 'financial-tricks-re',
                title: '7 Financial Tricks for Real Estate Agents & Investors',
                description: 'Learn cost segregation, S-Corps for agents, 1031 exchanges, and how to maximize property depreciation scales.',
                icon: '🏠',
                savings: 'Boost Portfolio Yields',
                pages: '9 pages',
                filename: '7-financial-tricks-realestate.html'
            },
            {
                id: 'tax-checklist-re',
                title: 'Real Estate Business Tax Minimization Checklist',
                description: 'Audit your property expenses, home office, travel logging, and repair vs improvement allocations.',
                icon: '✅',
                savings: 'Save $10,000-$40,000/year',
                pages: '8 pages',
                filename: 'tax-minimization-checklist-realestate.html'
            },
            {
                id: 'scalable-blueprint-re',
                title: 'The Scalable Real Estate Bookkeeping Blueprint',
                description: 'Establish automated billing, class tracking per property, and DSCR metrics for seamless portfolio expansion.',
                icon: '📊',
                savings: 'Scale Systems to 50+ Doors',
                pages: '10 pages',
                filename: 'scalable-bookkeeping-blueprint-realestate.html'
            }
        ],
        services: [
            'Property-Level P&L Reporting',
            'Capital Accounts & Equity Tracking',
            'Security Deposit Escrow Reconciliation',
            '1031 Exchange Financial Audits',
            'Depreciation & Cost Segregation Support',
            'Property Management System Sync'
        ]
    },
    medical: {
        id: 'medical',
        label: 'Medical',
        icon: '🩺',
        trustBadge: 'HIPAA-Compliant Bookkeeping for Healthcare Providers',
        headline: 'Healthy Finances for Your',
        headlineHighlight: 'Medical Practice',
        subheadline: 'Healthcare practice owners overpay on taxes by $30,000-$80,000/year. Access our free guides to optimize patient profitability and protect compliance.',
        companyPlaceholder: 'Metro Dental Group PC',
        emailPlaceholder: 'drsmith@metrohealth.com',
        theme: {
            bgGradient: 'from-teal-950 via-cyan-900 to-teal-950',
            highlightText: 'from-cyan-300 to-teal-400',
            ctaGradient: 'from-cyan-500 to-teal-500',
            ctaHoverGradient: 'from-cyan-600 to-teal-600',
            accentBorder: 'border-cyan-500',
            accentRing: 'ring-cyan-250',
            buttonBg: 'bg-cyan-500 hover:bg-cyan-600',
        },
        valueProps: [
            {
                title: 'Practice Profitability',
                description: 'Optimize clinic overhead, staffing expenditures, and supply margins',
                iconSvgPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
            },
            {
                title: 'HIPAA-Compliant Books',
                description: 'Pristine ledgers with safe patient billing integrations that respect HIPAA regulations',
                iconSvgPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.952 11.952 0 01-7.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
            },
            {
                title: 'Specialized Tax Strategy',
                description: 'Take advantage of medical equipment expensing and R&D research credits',
                iconSvgPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
            }
        ],
        ebooks: [
            {
                id: 'financial-tricks-med',
                title: 'Practice Profit Boosters: 7 Tricks for Medical Practices',
                description: 'Master equipment write-offs under Section 179, audit clinical supplier margins, and optimize S-Corp PC structures.',
                icon: '🩺',
                savings: 'Boost Clinical Margin Yields',
                pages: '9 pages',
                filename: '7-financial-tricks-medical.html'
            },
            {
                id: 'tax-checklist-med',
                title: 'Medical Practice Tax Minimization Checklist',
                description: 'A detailed checklist covering liability insurance, CME travel, corporate setups, and retirement structures.',
                icon: '✅',
                savings: 'Save $30,000-$80,000/year',
                pages: '8 pages',
                filename: 'tax-minimization-checklist-medical.html'
            },
            {
                id: 'scalable-blueprint-med',
                title: 'The Scalable Healthcare Bookkeeping Blueprint',
                description: 'Integrate patient billing EHR data anonymously, configure class tracking per clinic facility, and automate staff payroll.',
                icon: '📊',
                savings: 'Reconcile EHR Payouts Safely',
                pages: '10 pages',
                filename: 'scalable-bookkeeping-blueprint-medical.html'
            }
        ],
        services: [
            'HIPAA-Compliant Bookkeeping Integration',
            'Insurance Merchant Claims Reconciliation',
            'Clinic Overhead & Staffing Analysis',
            'Facility-Level Class Tracking & Reporting',
            'Medical Supply and Waste Supplier Audits',
            'CPA-Ready Clinical Financials'
        ]
    }
};
