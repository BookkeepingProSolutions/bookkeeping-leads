export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                            BookkeepingPro Solutions
                        </h3>
                        <p className="text-gray-400 mb-4">
                            Fast, accurate, and affordable bookkeeping services tailored specifically for construction businesses of all sizes.
                        </p>
                        <p className="text-gray-400">
                            Helping you maximize profits while minimizing tax burdens.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Services</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>• Bookkeeping for Construction</li>
                            <li>• Strategic Financial Planning</li>
                            <li>• Payroll Services</li>
                            <li>• Tax Services</li>
                            <li>• Job Costing & Profitability Analysis</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-4">Get In Touch</h4>
                        <div className="space-y-3 text-gray-400">
                            <p className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                contact@bookkeepingpro-solutions.com
                            </p>
                            <p className="flex items-center gap-2">
                                <svg className="w-5 h-5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                                </svg>
                                www.bookkeepingpro-solutions.com
                            </p>
                            <div className="mt-4">
                                <a
                                    href="#contact-form"
                                    className="inline-block bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold px-6 py-3 rounded-lg transition-all transform hover:scale-105"
                                >
                                    Schedule Free Consultation
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
                    <p>&copy; {new Date().getFullYear()} BookkeepingPro Solutions. All rights reserved.</p>
                    <p className="mt-2 text-sm">
                        Serving construction businesses nationwide with expert bookkeeping and financial services.
                    </p>
                </div>
            </div>
        </footer>
    );
}
