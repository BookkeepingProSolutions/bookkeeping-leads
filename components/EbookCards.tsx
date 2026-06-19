"use client";

import { useState } from "react";
import { niches, NicheId } from "@/lib/nicheConfig";

export default function EbookCards({ activeNicheId }: { activeNicheId: NicheId }) {
    const data = niches[activeNicheId];
    const ebooks = data.ebooks;
    const [selectedEbook, setSelectedEbook] = useState<string | null>(null);


    const handleDownload = (ebookId: string) => {
        setSelectedEbook(ebookId);
        // Scroll to form and set the selected guide in contact form
        const formElement = document.getElementById('contact-form');
        if (formElement) {
            formElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            // Sync with select element in form
            const selectElement = document.getElementById('selectedEbook') as HTMLSelectElement;
            if (selectElement) {
                selectElement.value = ebookId;
                // Dispatch change event to update react state in ContactForm
                const event = new Event('change', { bubbles: true });
                selectElement.dispatchEvent(event);
            }
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
                        Each guide is packed with actionable strategies tailored specifically for {data.label.toLowerCase()} businesses.
                        Download one, two, or all three—completely free.
                    </p>
                </div>

                {/* Ebook Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {ebooks.map((ebook) => {
                        const isSelected = selectedEbook === ebook.id;
                        return (
                            <div
                                key={ebook.id}
                                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${
                                    isSelected
                                        ? `${data.theme.accentBorder} ring-4 ${data.theme.accentRing}`
                                        : 'border-gray-200 hover:border-gray-400'
                                }`}
                            >
                                {/* Selected Badge */}
                                {isSelected && (
                                    <div className={`absolute -top-3 -right-3 ${data.theme.buttonBg} text-white px-4 py-1 rounded-full text-sm font-bold shadow-lg`}>
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
                                        className={`w-full font-bold py-3 px-6 rounded-lg transition-all duration-200 cursor-pointer ${
                                            isSelected
                                                ? `${data.theme.buttonBg} text-white`
                                                : 'bg-blue-900 hover:bg-blue-800 text-white'
                                        }`}
                                    >
                                        {isSelected ? 'Download This Guide ↓' : 'Get This Guide Free'}
                                    </button>
                                </div>
                            </div>
                        );
                    })}
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
                            <div className="text-gray-700">{data.label} Partners Supported</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-blue-900 mb-2">Fast</div>
                            <div className="text-gray-700">Instant Access Link</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
