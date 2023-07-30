import About from "./about";
import Card from "./card";
import Education from "./education";
import Experience from "./experience";
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
                    <div className="grid grid-cols-12 gap-10">
                        <Card img_addr="/fundo_eng.png" />
                        <Card img_addr="/fundo_eng.png" />
                        <Card img_addr="/fundo_eng.png" />
                        <Card img_addr="/fundo_eng.png" />
                        <Card img_addr="/fundo_eng.png" />
                        <Card img_addr="/fundo_eng.png" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default main;
