"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { ExternalLink, Github } from "lucide-react";

export default function Projects() {
    const { t } = useLanguage();

    const projects = [
        {
            id: "dusk",
            image: "bg-gradient-to-br from-blue-900/40 to-black",
            tags: ["Robotics", "IoT", "C++"],
        },
        {
            id: "mist",
            image: "bg-gradient-to-br from-emerald-900/40 to-black",
            tags: ["Automation", "Agriculture", "Arduino"],
        },
        {
            id: "fog",
            image: "bg-gradient-to-br from-purple-900/40 to-black",
            tags: ["Game Dev", "Unity", "C#"],
        },
    ];

    return (
        <section id="projects" className="py-24 px-6 relative border-t border-white/5">
            <div className="container mx-auto max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold font-space-grotesk text-white mb-4">
                        {t("projects.title")}
                    </h2>
                    <div className="h-1 w-20 bg-[#00f0ff] mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group relative rounded-2xl overflow-hidden bg-[#0a0a1a]/80 backdrop-blur-sm border border-white/10 hover:border-[#00f0ff]/50 transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
                        >
                            <div className={`w-full h-48 ${project.image} relative overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                                {/* Abstract Image Placeholder for now */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:scale-110 transition-transform duration-700">
                                    <div className="w-32 h-32 rounded-full border border-white/20 blur-[2px]" />
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-white mb-3 font-space-grotesk group-hover:text-[#00f0ff] transition-colors">
                                    {t(`proj.${project.id}.title`)}
                                </h3>
                                <p className="text-sm text-gray-400 leading-relaxed mb-6 flex-grow">
                                    {t(`proj.${project.id}.desc`)}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-gray-300 border border-white/10"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-[#00f0ff] transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
