"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

export default function ContactFooter() {
    const { t } = useLanguage();

    const socialLinks = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/bangkitbayu",
            icon: <Linkedin className="w-6 h-6" />,
            color: "hover:text-[#0a66c2]",
        },
        {
            name: "GitHub",
            url: "https://www.github.com/WhayBot",
            icon: <Github className="w-6 h-6" />,
            color: "hover:text-white",
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/myy.ul",
            icon: <Instagram className="w-6 h-6" />,
            color: "hover:text-[#e1306c]",
        },
    ];

    return (
        <footer id="contact" className="relative pt-24 pb-12 px-6 border-t border-white/5 bg-gradient-to-t from-[#00f0ff]/5 to-transparent">
            <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-space-grotesk text-white mb-6">
                        {t("contact.title")}
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        {t("about.description").substring(0, 100)}...
                    </p>

                    <a
                        href="mailto:bangkitbayua354@gmail.com"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-bold text-lg hover:bg-[#00f0ff] hover:shadow-[0_0_20px_rgba(0,240,255,0.6)] hover:shadow-[#00f0ff] transition-all duration-300"
                    >
                        <Mail className="w-5 h-5" />
                        {t("contact.button")}
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex justify-center items-center gap-6 mb-12"
                >
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3 rounded-full bg-gray-900 border border-gray-800 text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-gray-600 hover:shadow-lg ${link.color}`}
                        >
                            <span className="sr-only">{link.name}</span>
                            {link.icon}
                        </a>
                    ))}
                </motion.div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <a href="#" className="flex items-center gap-2 group">
                        <div className="flex items-center opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xl font-black font-space-grotesk tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600 group-hover:from-[#00f0ff] group-hover:to-blue-600 transition-all duration-500">
                                NOVA
                            </span>
                        </div>
                    </a>
                    <p className="text-sm text-gray-500 text-center md:text-right">
                        © {new Date().getFullYear()} Bangkit Bayu Alfaris. All rights reserved.
                        <br />
                        <span className="text-xs">Built with Next.js, Tailwind & Framer Motion</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
