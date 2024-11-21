"use client";
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="fixed w-full z-50 bg-gradient-to-b from-[#0f172a]/95 to-transparent"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link href="/" className="flex-shrink-0">
                        <Image
                            src="/images/logo.svg"
                            alt="PingMe Logo"
                            width={160}
                            height={42}
                            className="w-auto h-[42px] opacity-90 hover:opacity-100 transition-opacity"
                            priority
                        />
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        <Link href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
                            Features
                        </Link>
                        <Link href="#how-it-works" className="text-sm text-gray-300 hover:text-white transition-colors">
                            How It Works
                        </Link>
                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="bg-white/10 backdrop-blur-sm text-white px-5 py-2 rounded-md text-sm font-medium 
                                hover:bg-white/20 transition-colors border border-white/10"
                        >
                            Get Started
                        </motion.button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-white p-2">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}