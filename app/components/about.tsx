import Image from "next/image";

function About() {
    return (
        <>
            <div className="flex items-center">
                <Image
                    className="m-2 rounded-xl"
                    src="/eu.png"
                    alt=""
                    width={130}
                    height={130}
                />
                <div className="flex px-7 text-justify">
                    I am an engineer that believes in contributing to the world
                    with creativity and innovation. I have a strong background
                    working with Matlab/Simulink/C/C++ in the Control System
                    context and solid programming skills. I have a passion to
                    use engineering to get to new solutions and to be involved
                    in a challenging environment and energetic people.
                </div>
            </div>
        </>
    );
}

export default About;
