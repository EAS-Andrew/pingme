"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
    BeakerIcon,
    CircleStackIcon,
    PresentationChartLineIcon
} from '@heroicons/react/24/outline';

const steps = [
    {
        title: "Data Collection",
        description: "Securely collect and process customer interactions across all your communication channels",
        icon: CircleStackIcon
    },
    {
        title: "AI Analysis",
        description: "Advanced machine learning algorithms analyze patterns, sentiment, and key metrics",
        icon: BeakerIcon
    },
    {
        title: "Actionable Insights",
        description: "Transform raw data into strategic business decisions with comprehensive reporting",
        icon: PresentationChartLineIcon
    }
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-20 px-4 md:px-8 bg-gray-900/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">How It Works</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A streamlined process to transform your customer communication
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 relative">
                    {steps.map((step, index) => (
                        <motion.div
                            key={step.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-6">
                                    <step.icon className="w-8 h-8 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                                <p className="text-gray-400">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 