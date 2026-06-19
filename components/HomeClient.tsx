"use client";

import { useState } from "react";
import { niches, NicheId } from "@/lib/nicheConfig";
import Hero from "@/components/Hero";
import EbookCards from "@/components/EbookCards";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function HomeClient({ initialNiche }: { initialNiche: string }) {
    // Validate initial niche or default to construction
    const validNiche = (initialNiche in niches) ? (initialNiche as NicheId) : "construction";
    const [activeNiche, setActiveNiche] = useState<NicheId>(validNiche);

    // Sync URL when tab changes without full page reload
    const handleNicheChange = (id: NicheId) => {
        setActiveNiche(id);
        const url = new URL(window.location.href);
        url.searchParams.set("niche", id);
        window.history.pushState(null, "", url.toString());
    };

    return (
        <main className="min-h-screen bg-slate-50 transition-colors duration-500">
            {/* Header / Logo Navigation */}
            <header className="bg-white/95 border-b border-gray-200 py-4 px-4 sticky top-0 z-50 shadow-sm backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-blue-700 bg-clip-text text-transparent">
                            BookkeepingPro Solutions
                        </span>
                    </div>
                    {/* Dynamic Tabs Selector */}
                    <nav className="flex bg-gray-100 p-1.5 rounded-full border border-gray-200 overflow-x-auto max-w-full">
                        {Object.values(niches).map((n) => {
                            const isSelected = activeNiche === n.id;
                            return (
                                <button
                                    key={n.id}
                                    onClick={() => handleNicheChange(n.id)}
                                    className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-bold transition-all whitespace-nowrap cursor-pointer ${
                                        isSelected
                                            ? `${niches[n.id].theme.buttonBg} text-white shadow-md transform scale-105`
                                            : "text-gray-600 hover:text-gray-900 hover:bg-gray-250/50"
                                    }`}
                                >
                                    <span>{n.icon}</span>
                                    <span>{n.label}</span>
                                </button>
                            );
                        })}
                    </nav>
                </div>
            </header>

            <Hero activeNicheId={activeNiche} />
            <EbookCards key={activeNiche} activeNicheId={activeNiche} />
            <ContactForm key={activeNiche} activeNicheId={activeNiche} />
            <Footer activeNicheId={activeNiche} />
        </main>
    );
}
