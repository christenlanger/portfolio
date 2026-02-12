import { useRef, type RefObject } from "react";

import dataAbout from "./data/about.json";

import Header from "./components/Header";
import List from "./components/List";
import Portfolio from "./components/Portfolio";
import SkillsList from "./components/SkillsList";
import Contact from "./components/Contact";

export default function App() {
    const aboutRef = useRef<HTMLElement | null>(null);
    const skillsRef = useRef<HTMLElement | null>(null);
    const portfolioRef = useRef<HTMLElement | null>(null);
    const contactRef = useRef<HTMLElement | null>(null);

    const handleScroll = (target: RefObject<HTMLElement | null>) => {
        target.current?.scrollIntoView({ behavior: "smooth" });
    }

    const headerLinks = [
        {
            title: "About",
            callback: () => {
                handleScroll(aboutRef);
            }
        },
        {
            title: "Skills",
            callback: () => {
                handleScroll(skillsRef);
            }
        },
        {
            title: "Projects",
            callback: () => {
                handleScroll(portfolioRef);
            }
        },
        {
            title: "Contact",
            callback: () => {
                handleScroll(contactRef);
            }
        }
    ];

    return (
        <>
            <Header links={headerLinks} />
            <List ref={aboutRef} title="About Me" list={dataAbout.items} className="max-w-3xl text-center" />
            <SkillsList ref={skillsRef} />
            <Portfolio ref={portfolioRef} />
            <Contact ref={contactRef} />
        </>
    );
}