"use client";

import { niches, NicheId } from "@/lib/nicheConfig";

export default function Hero({ activeNicheId }: { activeNicheId: NicheId }) {
    const data = niches[activeNicheId];

    return (
        <section className={`relative overflow-hidden bg-gradient-to-br ${data.theme.bgGradient} text-white transition-all duration-700`}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
                <div className="text-center">
                    {/* Trust Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full mb-8">
                        <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm font-medium">{data.trustBadge}</span>
                    </div>

                    {/* Main Headline */}
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        {data.headline}
                        <span className={`block bg-gradient-to-r ${data.theme.highlightText} bg-clip-text text-transparent`}>
                            {data.headlineHighlight}
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: data.subheadline }} />

                    {/* CTA */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <a
                            href="#ebooks"
                            className={`group inline-flex items-center gap-2 bg-gradient-to-r ${data.theme.ctaGradient} hover:${data.theme.ctaHoverGradient} text-white font-bold px-8 py-4 rounded-lg text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl`}
                        >
                            Get Your Free Guides
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a>
                    </div>

                    {/* Dynamic Value Props */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {data.valueProps.map((prop, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-full mb-4">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={prop.iconSvgPath} />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-lg mb-2">{prop.title}</h3>
                                <p className="text-blue-200 text-sm">{prop.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Wave Divider */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
                    <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="rgb(248 250 252)" />
                </svg>
            </div>
        </section>
    );
}
