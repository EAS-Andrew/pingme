export default function Footer() {
    return (
        <footer className="bg-gray-900/50 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Product</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Features</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Pricing</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">API</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Company</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">About</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Blog</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Resources</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Documentation</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Support</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Status</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Legal</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Terms</a></li>
                            <li><a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Security</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800">
                    <p className="text-gray-500 text-sm text-center">
                        © {new Date().getFullYear()} PingMe. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
} 