import React, { useEffect, useState } from 'react';

export default function Navbar() {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            { threshold: 0.5 }
        );

        sections.forEach(section => observer.observe(section));

        return () => {
            sections.forEach(section => observer.unobserve(section));
        };
    }, []);

    return (
        <nav className="text-center text-lg font-light tracking-wider fixed mt-[150px] hidden lg:block xl:block 2xl:block">
            <a href="#home">
                <p className={`p-10 -rotate-90 font-manrope transition-all duration-300 ease-in-out ${activeSection === 'home' ? 'underline underline-offset-4 ' : ''}`}>
                    home
                </p>
            </a>
            <a href="#cases">
                <p className={`p-10 -rotate-90 font-manrope transition-all duration-300 ease-in-out ${activeSection === 'cases' ? 'underline underline-offset-4' : ''}`}>
                    cases
                </p>
            </a>
            <a href="#projetos">
                <p className={`p-10 -rotate-90 font-manrope transition-all duration-300 ease-in-out ${activeSection === 'projetos' ? 'underline underline-offset-4' : ''}`}>
                    projetos
                </p>
            </a>
            <a href="#sobre">
                <p className={`p-10 -rotate-90 font-manrope transition-all duration-300 ease-in-out ${activeSection === 'sobre' ? 'underline underline-offset-4' : ''}`}>
                    sobre
                </p>
            </a>
            <a href="#contato">
                <p className={`p-10 -rotate-90 font-manrope transition-all duration-300 ease-in-out ${activeSection === 'contato' ? 'underline underline-offset-4' : ''}`}>
                    contato
                </p>
            </a>
        </nav>
    );
}
