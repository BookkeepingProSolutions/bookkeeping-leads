"use client";

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        selectedEbook: "all"
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitting(false);
        setSubmitted(true);

        // In a real implementation, you would:
        // 1. Send data to your backend API
        // 2. Trigger email notification to BookkeepingPro Solutions
        // 3. Provide download link or email the PDF
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (submitted) {
        return (
            <section id="contact-form" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
                <div className="max-w-2xl mx-auto text-center">
                    <div className="bg-white rounded-2xl shadow-2xl p-12 border-4 border-green-500">
                        <div className="text-6xl mb-6">🎉</div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Success!</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Check your email for your free guide(s). We've sent you instant access!
                        </p>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
                            <p className="text-gray-800">
                                <strong>What's Next?</strong><br />
                                Our team will review your information and may reach out to discuss how we can help optimize your construction business finances.
                            </p>
                        </div>
                        <button
                            onClick={() => setSubmitted(false)}
                            className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-all"
                        >
                            Download Another Guide
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section id="contact-form" className="py-20 px-4 bg-gradient-to-b from-white to-blue-50">
            <div className="max-w-2xl mx-auto">
                <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-t-4 border-orange-500">
                    {/* Form Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                            Get Your Free Guide(s)
                        </h2>
                        <p className="text-gray-600">
                            Enter your information below for instant access. No credit card required.
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                                Full Name *
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                placeholder="John Smith"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                                Email Address *
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                placeholder="john@constructionco.com"
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                                Phone Number *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                placeholder="(555) 123-4567"
                            />
                        </div>

                        {/* Company */}
                        <div>
                            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                                Company Name *
                            </label>
                            <input
                                type="text"
                                id="company"
                                name="company"
                                required
                                value={formData.company}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                                placeholder="ABC Construction LLC"
                            />
                        </div>

                        {/* Guide Selection */}
                        <div>
                            <label htmlFor="selectedEbook" className="block text-sm font-semibold text-gray-700 mb-2">
                                Which guide would you like? *
                            </label>
                            <select
                                id="selectedEbook"
                                name="selectedEbook"
                                required
                                value={formData.selectedEbook}
                                onChange={handleChange}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition-all"
                            >
                                <option value="all">All Three Guides (Recommended)</option>
                                <option value="financial-tricks">7 Financial Tricks</option>
                                <option value="tax-checklist">Tax Minimization Checklist</option>
                                <option value="scalable-blueprint">Scalable Bookkeeping Blueprint</option>
                            </select>
                        </div>

                        {/* Privacy Notice */}
                        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-600">
                            <p>
                                🔒 Your information is safe with us. We respect your privacy and will never share your data.
                                By submitting, you'll receive your free guide(s) and occasional helpful tips for construction business owners.
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className={`w-full font-bold py-4 px-8 rounded-lg text-lg transition-all transform hover:scale-105 shadow-lg ${isSubmitting
                                    ? 'bg-gray-400 cursor-not-allowed'
                                    : 'bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white'
                                }`}
                        >
                            {isSubmitting ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Processing...
                                </span>
                            ) : (
                                'Get Instant Access Now →'
                            )}
                        </button>
                    </form>

                    {/* Trust Badges */}
                    <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            No spam
                        </div>
                        <div className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            Instant access
                        </div>
                        <div className="flex items-center gap-1">
                            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            100% free
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
