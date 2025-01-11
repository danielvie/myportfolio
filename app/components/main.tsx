import AboutMe from "./about";
import ContactMe from "./contactme";
import Education from "./education";
import Experience from "./experience";
import Projects from "./projects";
import Title from "./title";

function Main() {
    return (
        <>
            <div className="justify-center p-4 pb-12 pt-[56px] text-center">
                <div className="m-auto w-11/12 sm:w-5/6">
                    <Title id="aboutme" text="About Me" />
                    <AboutMe />
                    <Title id="experience" text="Experience" />
                    <Experience />
                    <Title id="education" text="Education" />
                    <Education />
                    <Title id="projects" text="Projects" />
                    <Projects />
                    <Title id="contactme" text="Contact Me" />
                    {/* <ContactMe /> */}
                </div>
            </div>
        </>
    );
}

export default Main;
