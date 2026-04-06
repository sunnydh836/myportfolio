import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const highlights = [
    {
        id: 1,
        stat: "100+",
        label: "LeetCode Problems",
        detail: "Active problem solver with a 80-day max streak. Consistently sharpening DSA skills in C++."
    },
    {
        id: 2,
        stat: "5+",
        label: "Hackathons",
        detail: "Participated in and won multiple hackathons including the SIH 2025 internal selection round."
    },
    {
        id: 3,
        stat: "5",
        label: "Projects Built",
        detail: "Notes app, e-commerce clone, image gallery,Customer Segmentation Dashboard, and a browser game — all crafted with real-world skills."
    }
];

export default function Testimonials() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                ".test-header",
                { opacity: 0, y: 30 },
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

            if (containerRef.current) {
                gsap.fromTo(
                    containerRef.current.children,
                    { opacity: 0, scale: 0.9 },
                    {
                        opacity: 1,
                        scale: 1,
                        duration: 0.8,
                        stagger: 0.2,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: containerRef.current,
                            start: "top 75%",
                        }
                    }
                );
            }
        });

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-6 md:px-12 lg:px-24 bg-[#050505] text-white w-full relative z-30">
            <div className="flex flex-col items-center text-center mb-16 md:mb-24 test-header">
                <p className="text-gray-400 uppercase tracking-widest text-sm mb-4 font-semibold">About Me</p>
                <h2 className="text-5xl md:text-7xl font-bold font-serif italic max-w-3xl mb-8">Who I Am</h2>
                <p className="text-gray-400 leading-relaxed text-lg max-w-2xl">
                    B.Tech Computer Science student (2027) from Meerut, UP with strong foundations in Frontend Development and problem solving.
                    Skilled in building responsive web applications using React, JavaScript, and Tailwind CSS.
                    Hackathon winner with leadership and teamwork experience.
                </p>
            </div>

            <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {highlights.map((item) => (
                    <div
                        key={item.id}
                        className="interactable bg-[#111] p-10 rounded-[2 rem] border border-gray-800 hover:bg-[#151515] transition-colors duration-500 text-center"
                    >
                        <p className="text-6xl md:text-7xl font-bold font-serif italic text-white mb-2">{item.stat}</p>
                        <p className="text-gray-300 font-bold text-xl mb-4">{item.label}</p>
                        <p className="text-gray-500 leading-relaxed text-sm">{item.detail}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
