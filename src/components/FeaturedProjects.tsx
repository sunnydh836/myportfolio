import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import flipkart from "../assets/asset/flipkart clone.png";
import Notes from "../assets/asset/notes app.png";
import ui from "../assets/asset/ui project.png";
import Imagegallery from "../assets/asset/gallery app.png";
import Tictactoe from "../assets/asset/tic tac.png";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: 1,
        title: "Flipkart UI Clone",
        category: "HTML · CSS · JavaScript",
        description: "Developed a pixel-perfect, responsive clone of the Flipkart homepage with dynamic UI interactions, product carousels, and a fully functional navigation bar.",
        image: flipkart,
        year: "2025",
        link:"https://sunnydh836.github.io/flipkart_clone/",
    },
    {
        id: 2,
        title: "Customer Segmentation Dashboard",
        category: "React - Responsive UI",
        description: "Developed a responsive customer segmentation dashboard using React, featuring dynamic card components to visually represent different digital banking customer categories.",
        image: ui,
        year: "2025",
        link:"https://reactuiprojectf.vercel.app/",
    },
    {
        id: 3,
        title: "Image Gallery App",
        category: "React - Public API",
        description: "Developed a responsive image gallery using React that fetches images from a public API and displays them with pagination for seamless browsing.",
        image: Imagegallery,
        year: "2026",
        link:"https://gallery-rihpflyn3-sunnydh836-7024s-projects.vercel.app/",
    },
    {
        id: 4,
        title: "Tic Tac Toe Game",
        category: "JavaScript - Game Logic",
        description: "Created an interactive Tic Tac Toe game with dynamic game state handling, win detection logic, and reset functionality.",
        image: Tictactoe,
        year: "2025",
        link:"https://sunnydh836.github.io/tic_tac_game/",
    },
    {
        id: 5,
        title: "Notes Manager App",
        category: "React - Local Storage",
        description: "Developed a notes management application where users can create, view, and delete notes with persistent storage using browser localStorage.",
        image: Notes,
        year: "2026",
        link:"https://notesapp-one-alpha.vercel.app/",
    }
];

export default function FeaturedProjects() {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate Header
            gsap.fromTo(headerRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                    }
                }
            );

            // Animate Project Cards
            if (projectsRef.current) {
                const cards = projectsRef.current.children;
                gsap.fromTo(cards,
                    { opacity: 0, y: 100 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        stagger: 0.2,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: projectsRef.current,
                            start: "top 85%",
                        }
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24 bg-black text-white w-full relative z-30">
            <div ref={headerRef} className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24">
                <div>
                    <p className="text-gray-400 uppercase tracking-widest text-sm mb-4 font-semibold">Selected Work</p>
                    <h2 className="text-5xl md:text-7xl font-bold italic font-serif tracking-tight">Featured<br />Projects</h2>
                </div>
                {/* <button className="interactable mt-8 md:mt-0 group flex items-center gap-3 text-lg border-b border-white pb-1 hover:text-gray-300 transition-colors">
                    View All Work
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button> */}
            </div>

            <div ref={projectsRef} className="flex flex-col gap-16 md:gap-32">
                {projects.map((project, index) => (
                    <div key={project.id} className={`flex flex-col ${index % 2 !== 0 ? 'md:flex-col-reverse lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center group interactable cursor-pointer`}>
                        <div className="w-full lg:w-3/5 overflow-hidden rounded-xl">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[400px] md:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale hover:grayscale-0"
                            />
                        </div>
                        <div className="w-full lg:w-2/5 flex flex-col justify-center">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-gray-400 tracking-wider text-sm">{project.category}</span>
                                <span className="text-gray-500 font-serif italic">{project.year}</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold mb-4 group-hover:text-gray-300 transition-colors">{project.title}</h3>
                            <p className="text-gray-500 leading-relaxed mb-6 group-hover:text-gray-400 transition-colors">{project.description}</p>
                            <button className="w-12 h-12 rounded-full border border-gray-600 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                                <a href={project.link}><ArrowUpRight className="w-6 h-6" /></a>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
