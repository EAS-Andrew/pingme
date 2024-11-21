"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="min-h-[100vh] flex items-center justify-center px-4 md:px-8 pt-20">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mb-8"
                >
                    <Image
                        src="/images/logo-enterprise.svg"
                        alt="Enterprise Logo"
                        width={250}
                        height={67}
                        className="mx-auto"
                    />
                </motion.div>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight"
                >
                    Transform Customer Conversations into
                    <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"> Actionable Insights</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                    className="mt-6 text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
                >
                    Leverage AI to analyze customer interactions, identify trends, and make data-driven decisions to improve your business.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <button className="px-8 py-3 bg-white text-gray-900 rounded-md font-medium hover:bg-gray-100 transition-colors">
                        Get in Touch
                    </button>
                </motion.div>
            </div>
        </section>
    );
} 