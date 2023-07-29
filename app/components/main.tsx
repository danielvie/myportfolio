import Card from "./card";
import Titulo from "./titulo";

function main() {
    return (
        <>
            <div className="min-h-[83vh] justify-center bg-gray-900 p-4 pt-14 text-center">
                <Titulo id="about" text="About" />
                <Titulo id="resume" text="Resume" />
                <Titulo id="mywork" text="My Work" />
                <div className="grid grid-cols-12 gap-10">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <Titulo id="contact" text="Contact" />
            </div>
        </>
    );
}

export default main;
