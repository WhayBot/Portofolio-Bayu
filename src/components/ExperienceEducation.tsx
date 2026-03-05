"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { GraduationCap, Briefcase } from "lucide-react";

export default function ExperienceEducation() {
    const { t } = useLanguage();

    const education = [
        {
            titleKey: "edu.sma.title",
            timeKey: "edu.sma.time",
        },
        {
            titleKey: "edu.smp.title",
            timeKey: "edu.smp.time",
        },
        {
            titleKey: "edu.sd.title",
            timeKey: "edu.sd.time",
        },
    ];

    const experience = [
        {
            titleKey: "exp.aus.title",
            timeKey: "exp.aus.time",
            descKey: "exp.aus.desc",
        },
        {
            titleKey: "exp.pt.title",
            timeKey: "exp.pt.time",
            descKey: "exp.pt.desc",
        },
        {
            titleKey: "exp.icp.title",
            timeKey: "exp.icp.time",
            descKey: "exp.icp.desc",
        },
    ];

    return (
        <section id="experience" className="py-24 px-6 relative border-t border-white/5">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-4">
                        {t("experience.title")}
                    </h2>
                    <div className="h-1 w-20 bg-[#00f0ff] mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8">
                    {/* Stop Coal, Go Nuclear */}
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-blue-900/30 text-blue-400 border border-blue-500/20">
                                <GraduationCap className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white font-space-grotesk">Education</h3>
                        </div>

                        <div className="space-y-8 pl-4 border-l-2 border-gray-800">
                            {education.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-6"
                                >
                                    <div className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-[#050511] border-2 border-blue-500" />
                                    <span className="text-sm font-medium text-blue-400 mb-1 block">
                                        {t(item.timeKey)}
                                    </span>
                                    <h4 className="text-lg font-bold text-gray-200 mb-2">
                                        {t(item.titleKey)}
                                    </h4>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <div className="p-3 rounded-xl bg-purple-900/30 text-purple-400 border border-purple-500/20">
                                <Briefcase className="w-6 h-6" />
                            </div>
                            <h3 className="text-2xl font-bold text-white font-space-grotesk">Experience</h3>
                        </div>

                        <div className="space-y-8 pl-4 border-l-2 border-gray-800">
                            {experience.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative pl-6"
                                >
                                    <div className="absolute -left-[35px] top-1.5 w-4 h-4 rounded-full bg-[#050511] border-2 border-purple-500" />
                                    <span className="text-sm font-medium text-purple-400 mb-1 block">
                                        {t(item.timeKey)}
                                    </span>
                                    <h4 className="text-lg font-bold text-gray-200 mb-2">
                                        {t(item.titleKey)}
                                    </h4>
                                    <p className="text-sm text-gray-400 leading-relaxed">
                                        {t(item.descKey)}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
