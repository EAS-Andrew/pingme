"use client";
import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Contact() {
    return (
        <section id="contact" className="py-20 px-4 md:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Get in Touch</h2>
                        <p className="text-gray-400 mb-8">
                            Ready to transform your customer communications? Contact us to learn more about how we can help.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <EnvelopeIcon className="w-6 h-6 text-blue-400" />
                                <a href="mailto:contact@pingme.com" className="text-gray-300 hover:text-white transition-colors">
                                    contact@pingme.com
                                </a>
                            </div>
                            <div className="flex items-center space-x-4">
                                <PhoneIcon className="w-6 h-6 text-blue-400" />
                                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors">
                                    +1 (234) 567-890
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gray-800/50 rounded-lg p-8 border border-gray-700/50">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md 
                                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                        text-white placeholder-gray-500"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md 
                                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                        text-white placeholder-gray-500"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-2 bg-gray-900/50 border border-gray-700 rounded-md 
                                        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                                        text-white placeholder-gray-500"
                                    placeholder="Your message"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-6 py-3 bg-blue-500 text-white rounded-md font-medium
                                    hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 
                                    focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
} 