"use client";
import { motion } from "framer-motion";
import {
    ChartBarIcon,
    BoltIcon,
    CommandLineIcon,
    ArrowTrendingUpIcon,
    ChatBubbleLeftRightIcon,
    CogIcon
} from '@heroicons/react/24/outline';

const features = [
    {
        title: "Analytics Dashboard",
        description: "Real-time metrics and insights from your customer conversations",
        icon: ChartBarIcon
    },
    {
        title: "Automated Processing",
        description: "AI-powered analysis of conversations and customer sentiment",
        icon: BoltIcon
    },
    {
        title: "Integration API",
        description: "Seamless integration with your existing communication tools",
        icon: CommandLineIcon
    },
    {
        title: "Trend Analysis",
        description: "Identify patterns and opportunities in customer interactions",
        icon: ArrowTrendingUpIcon
    },
    {
        title: "Smart Responses",
        description: "AI-suggested responses based on conversation context",
        icon: ChatBubbleLeftRightIcon
    },
    {
        title: "Custom Configuration",
        description: "Tailor the system to your specific business needs",
        icon: CogIcon
    }
];

export default function Features() {
    return (
        <section id="features" className="py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold mb-4">Powerful Features</h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Everything you need to understand and improve your customer interactions
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-lg bg-gray-800/50 border border-gray-700/50 hover:border-gray-600/50 transition-colors"
                        >
                            <feature.icon className="w-8 h-8 text-blue-400 mb-4" />
                            <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
                            <p className="text-gray-400">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
} 