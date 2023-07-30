import About from "./about";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";
import Titulo from "./titulo";

function main() {
    return (
        <>
            <div className="min-h-[83vh] justify-center bg-gray-900 p-4 pb-12 pt-14 text-center">
                <div className="m-auto w-5/6">
                    <Titulo id="about" text="About" />
                    <About />
                    <Titulo id="experience" text="Experience" />
                    <Experience />
                    <Titulo id="education" text="Education" />
                    <Education />
                    <Titulo id="projects" text="Projects" />
                    <Projects />
                </div>
            </div>
        </>
    );
}

export default main;
