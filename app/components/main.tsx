import { useEffect, useState } from "react";
import About from "./about";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";
import Title from "./title";

function Main() {
    return (
        <>
            <div className="min-h-[83vh] justify-center bg-gray-900 p-4 pb-12 pt-[70px] text-center">
                <div className="m-auto w-11/12 sm:w-5/6">
                    <Title id="about" text="About" />
                    <About />
                    <Title id="experience" text="Experience" />
                    <Experience />
                    <Title id="education" text="Education" />
                    <Education />
                    <Title id="projects" text="Projects" />
                    <Projects />
                </div>
            </div>
        </>
    );
}

export default Main;
