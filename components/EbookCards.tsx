"use client";

import { useState } from "react";

interface Ebook {
    id: string;
    title: string;
    description: string;
    icon: string;
    savings: string;
    pages: string;
    filename: string;
}

const ebooks: Ebook[] = [
    {
        id: "financial-tricks",
        title: "7 Financial Tricks for Construction Business Owners",
        description: "Discover proven strategies to boost profits, reduce taxes, and master job costing. Learn about optimal business structures, accountable plans, and more.",
        icon: "💰",
        savings: "Save $50,000-$150,000/year",
        pages: "12 pages",
        filename: "7-financial-tricks-construction.html"
    },
    {
        id: "tax-checklist",
        title: "Construction Business Tax Minimization Checklist",
        description: "A comprehensive checklist of deductions, strategies, and year-end planning tactics specifically for construction businesses.",
        icon: "✅",
        savings: "Save $15,000-$50,000/year",
        pages: "8 pages",
        filename: "tax-minimization-checklist.html"
    },
    {
        id: "scalable-blueprint",
        title: "The Scalable Bookkeeping Blueprint",
        description: "Go from solo contractor to multi-million dollar company with the right financial systems at each growth stage.",
        icon: "📊",
        savings: "Build systems for long-term growth",
        pages: "10 pages",
        filename: "scalable-bookkeeping-blueprint.html"
    }
];

export default function EbookCards() {
    const [selectedEbook, setSelectedEbook] = useState<string | null>(null);

    const handleDownload = (ebookId: string) => {
        setSelectedEbook(ebookId);
        // Scroll to form
        const formElement = document.getElementById('contact-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section id="ebooks" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Choose Your Free Guide
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Each guide is packed with actionable strategies tailored specifically for construction businesses.
                        Download one, two, or all three—completely free.
                    </p>
                </div>

                {/* Ebook Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {ebooks.map((ebook) => (
                        <div
                            key={ebook.id}
                            className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${selectedEbook === ebook.id ? 'border-orange-500 ring-4 ring-orange-200' : 'border-gray-200 hover:border-orange-400'
                                }`}
                        >
                            {/* Selected Badge */}
                            {selectedEbook === ebook.id && (
                                <div className="absolute -top-3 -right-3 bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg">
                                    Selected
                                </div>
                            )}

                            <div className="p-8">
                                {/* Icon */}
                                <div className="text-6xl mb-4">{ebook.icon}</div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold text-gray-900 mb-3 min-h-[60px]">
                                    {ebook.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 mb-6 min-h-[100px]">
                                    {ebook.description}
                                </p>

                                {/* Savings Badge */}
                                <div className="bg-green-50 border border-green-200 rounded-lg px-4 py-2 mb-4">
                                    <p className="text-green-800 font-semibold text-sm">💎 {ebook.savings}</p>
                                </div>

                                {/* Pages Info */}
                                <p className="text-sm text-gray-500 mb-6">{ebook.pages}</p>

                                {/* CTA Button */}
                                <button
                                    onClick={() => handleDownload(ebook.id)}
                                    className={`w-full font-bold py-3 px-6 rounded-lg transition-all duration-200 ${selectedEbook === ebook.id
                                            ? 'bg-orange-500 hover:bg-orange-600 text-white'
                                            : 'bg-blue-900 hover:bg-blue-800 text-white'
                                        }`}
                                >
                                    {selectedEbook === ebook.id ? 'Download This Guide ↓' : 'Get This Guide Free'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-8 text-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <div className="text-3xl font-bold text-blue-900 mb-2">100%</div>
                            <div className="text-gray-700">Free - No Credit Card Required</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-900 mb-2">10,000+</div>
                            <div className="text-gray-700">Construction Businesses Served</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-900 mb-2">Fast</div>
                            <div className="text-gray-700">Instant Download</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
