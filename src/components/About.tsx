"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image";

export default function About() {
    const { t } = useLanguage();

    return (
        <section
            id="about"
            className="min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6"
        >
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative group mb-8"
            >
                {/* The Factory Must Grow */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#00f0ff]/50 to-blue-600/50 blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-[#00f0ff]/30 z-10">
                    <Image
                        src="/bayuface.svg"
                        alt="Bangkit Bayu Alfaris"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-center max-w-2xl mx-auto"
            >
                <h2 className="text-[#00f0ff] font-space-grotesk tracking-widest text-sm font-semibold uppercase mb-4">
                    Ad Nova Per Aspera
                </h2>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-space-grotesk text-white mb-6">
                    <span className="text-gray-400 font-inter text-2xl md:text-3xl block mb-2">{t("about.greeting")}</span>
                    Bangkit Bayu Alfaris
                </h1>

                <div className="inline-block border border-gray-700 bg-gray-900/50 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
                    <p className="text-sm md:text-base text-gray-300 font-medium">
                        {t("about.role")}
                    </p>
                </div>

                <p className="text-base md:text-lg text-gray-400 leading-relaxed text-balance">
                    {t("about.description")}
                </p>
            </motion.div>
        </section>
    );
}
