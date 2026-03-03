"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
    { key: "about", href: "#about" },
    { key: "skills", href: "#skills" },
    { key: "projects", href: "#projects" },
    { key: "experience", href: "#experience" },
    { key: "contact", href: "#contact" },
];

export default function Navbar() {
    const { t, language, setLanguage } = useLanguage();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === "id" ? "en" : "id");
    };

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={cn(
                "fixed top-0 inset-x-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-[#050511]/70 backdrop-blur-md border-b border-[#00f0ff]/10 py-4 shadow-[0_0_15px_rgba(0,240,255,0.05)]"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
                <a href="#" className="flex items-center gap-2 group">
                    <div className="flex items-center">
                        <span className="text-2xl font-black font-space-grotesk tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 group-hover:from-[#00f0ff] group-hover:to-blue-600 transition-all duration-500">
                            NOVA
                        </span>
                    </div>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link.key}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-white hover:drop-shadow-[0_0_8px_rgba(0,240,255,0.8)] transition-all"
                        >
                            {t(`nav.${link.key}`)}
                        </a>
                    ))}
                    <div className="h-4 w-[1px] bg-gray-700 mx-2" />
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-gray-700 bg-gray-800/50 hover:bg-gray-700 hover:border-[#00f0ff]/50 transition-all text-xs font-semibold text-gray-300 hover:text-white uppercase"
                        aria-label="Toggle Language"
                    >
                        <Globe className="w-3.5 h-3.5" />
                        {language}
                    </button>
                </nav>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center justify-center w-8 h-8 rounded-full border border-gray-700 bg-gray-800/50 text-xs font-semibold text-gray-300 uppercase"
                    >
                        {language}
                    </button>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-gray-300 hover:text-white"
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#050511]/95 backdrop-blur-xl border-b border-gray-800 overflow-hidden"
                    >
                        <nav className="flex flex-col px-6 py-4 gap-4">
                            {NAV_LINKS.map((link) => (
                                <a
                                    key={link.key}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-medium text-gray-300 hover:text-[#00f0ff] py-2 border-b border-gray-800/50"
                                >
                                    {t(`nav.${link.key}`)}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
