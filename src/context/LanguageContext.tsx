"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "id" | "en";

interface LanguageContextProps {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

// Simple dictionary for the portfolio
const translations: Record<Language, Record<string, string>> = {
    id: {
        "nav.about": "Tentang",
        "nav.skills": "Keahlian",
        "nav.projects": "Proyek",
        "nav.experience": "Pengalaman",
        "nav.contact": "Kontak",
        "about.greeting": "Halo, saya",
        "about.role": "Pelajar SMA | Graphic Designer | Robotics Enthusiast",
        "about.description": "Saya adalah seorang pelajar SMA kelas 11 yang memiliki antusiasme besar terhadap desain grafis, robotika, 3D modeling, dan teknologi permainan. Saya senang mengeksplorasi hal-hal baru dan terus mengasah kreativitas saya.",
        "skills.title": "Keahlian & Teknologi",
        "projects.title": "Proyek Utama",
        "experience.title": "Pendidikan & Pengalaman",
        "contact.title": "Mari Terhubung",
        "contact.button": "Kirim Email",
        // Projects
        "proj.dusk.title": "DUSK (Dust Unification and Sweeping Keeper)",
        "proj.dusk.desc": "Sebuah robot pembersih lantai pintar yang dirancang untuk secara otomatis membersihkan debu dan kotoran. Dilengkapi dengan sensor cerdas untuk navigasi ruangan.",
        "proj.mist.title": "Mist-Ify",
        "proj.mist.desc": "Sebuah alat budidaya jamur tiram otomatis yang mengontrol kelembaban dan suhu secara mandiri. Membantu petani jamur untuk meningkatkan hasil panen dengan teknologi efisien.",
        "proj.fog.title": "Field of Gray",
        "proj.fog.desc": "Sebuah proyek game 2.5D Top-Down RPG yang dibuat dengan menggunakan Unity Engine. Menawarkan pengalaman bermain taktis dengan gaya visual yang unik.",
        // Educations & Experiences
        "edu.sd.title": "MI Terpadu Logaritma Kedungjati",
        "edu.sd.time": "2015 - 2020",
        "edu.smp.title": "SMP PGRI 1 Sempor",
        "edu.smp.time": "2021 - 2023",
        "edu.sma.title": "International Class Program SMA Muhammadiyah Gombong",
        "edu.sma.time": "2024 - Sekarang",
        "exp.pt.title": "Magang - PT Helber Elektronika Indonesia",
        "exp.pt.time": "Juni - Agustus 2025",
        "exp.pt.desc": "Program magang di perusahaan elektronika, memperdalam ilmu robotika dan integrasi komponen.",
        "exp.icp.title": "Panitia - ICP Leadership Camp",
        "exp.icp.time": "Agustus - Oktober 2025",
        "exp.icp.desc": "Berperan sebagai panitia dalam acara kemah kepemimpinan tingkat sekolah.",
    },
    en: {
        "nav.about": "About",
        "nav.skills": "Skills",
        "nav.projects": "Projects",
        "nav.experience": "Experience",
        "nav.contact": "Contact",
        "about.greeting": "Hello, I am",
        "about.role": "High School Student | Graphic Designer | Robotics Enthusiast",
        "about.description": "I am an 11th-grade high school student with a huge enthusiasm for graphic design, robotics, 3D modeling, and game development. I enjoy exploring new things and continuously honing my creativity.",
        "skills.title": "Skills & Technologies",
        "projects.title": "Featured Projects",
        "experience.title": "Education & Experience",
        "contact.title": "Let's Connect",
        "contact.button": "Send Email",
        // Projects
        "proj.dusk.title": "DUSK (Dust Unification and Sweeping Keeper)",
        "proj.dusk.desc": "A smart floor-cleaning robot designed to automatically sweep dust and dirt. Equipped with intelligent sensors for room navigation.",
        "proj.mist.title": "Mist-Ify",
        "proj.mist.desc": "An automated oyster mushroom cultivation tool that autonomously controls humidity and temperature. Helps mushroom farmers increase crop yields efficiently.",
        "proj.fog.title": "Field of Gray",
        "proj.fog.desc": "A 2.5D Top-Down RPG game project created using the Unity Engine. Offers a tactical gameplay experience with unique visual styles.",
        // Educations & Experiences
        "edu.sd.title": "Logaritma Islamic Elementary School",
        "edu.sd.time": "2015 - 2020",
        "edu.smp.title": "PGRI Sempor Junior High School",
        "edu.smp.time": "2021 - 2023",
        "edu.sma.title": "Muhammadiyah Gombong Senior High School",
        "edu.sma.time": "2024 - Present",
        "exp.pt.title": "Internship - PT Helber Elektronika Indonesia",
        "exp.pt.time": "June - August 2025",
        "exp.pt.desc": "Internship program at an electronics company, deepening knowledge in robotics and component integration.",
        "exp.icp.title": "Committee - ICP Leadership Camp",
        "exp.icp.time": "August - October 2025",
        "exp.icp.desc": "Acted as a committee member for the school's leadership camp event.",
    },
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("id");

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
