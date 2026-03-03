"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { PenTool, Box, Camera, Bot, Gamepad2 } from "lucide-react";

export default function Skills() {
    const { t } = useLanguage();

    const skills = [
        {
            name: "Graphic Design",
            level: "Basic (Adobe Photoshop)",
            icon: <PenTool className="w-8 h-8" />,
        },
        {
            name: "3D Modeling",
            level: "Basic (Blender)",
            icon: <Box className="w-8 h-8" />,
        },
        {
            name: "Photography",
            level: "Basic",
            icon: <Camera className="w-8 h-8" />,
        },
        {
            name: "Robotics",
            level: "Intermediate (Coding & 3D Parts)",
            icon: <Bot className="w-8 h-8" />,
        },
        {
            name: "Game Development",
            level: "Learning (Unity Engine)",
            icon: <Gamepad2 className="w-8 h-8" />,
        },
    ];

    return (
        <section id="skills" className="py-24 px-6 border-t border-white/5">
            <div className="container mx-auto max-w-5xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-4">
                        {t("skills.title")}
                    </h2>
                    <div className="h-1 w-20 bg-[#00f0ff] mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group bg-[#0a0a1a]/60 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-[#00f0ff]/50 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] transition-all duration-300"
                        >
                            <div className="w-14 h-14 rounded-xl bg-gray-800/80 flex items-center justify-center text-gray-400 group-hover:text-[#00f0ff] group-hover:bg-[#00f0ff]/10 transition-colors mb-6">
                                {skill.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
                            <p className="text-sm text-gray-400">{skill.level}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
