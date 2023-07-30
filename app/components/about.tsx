import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
    const handleLink = (url: string) => {
        window.open(url, "_blank"); // Opens the link in a new tab
    };

    return (
        <>
            <div className="flex items-center justify-center">
                <div className="flex items-start">
                    <Image
                        className="z-20 m-2 mr-8 rounded-full"
                        src="/eu.png"
                        alt=""
                        width={130}
                        height={130}
                    />
                    <div className="relative">
                        <div className="diag-box">
                            <div className="cut-up"></div>
                            <div className="main"></div>
                            <div className="cut-bottom"></div>
                        </div>
                        <div className="ml-5 max-w-[800px] rounded-xl bg-gray-700 p-7 pb-0 text-justify leading-7">
                            Hi, I&apos;m Daniel! <br />I am an engineer that
                            believes in contributing to the world with
                            creativity and innovation. I have a strong
                            background working with Matlab/Simulink/C/C++ in the
                            Control System context and solid programming skills.
                            I have a passion to use engineering to get to new
                            solutions and to be involved in a challenging
                            environment and energetic people.
                            <div className="flex items-center justify-center py-5 text-center text-[40px]">
                                <button
                                    onClick={() =>
                                        handleLink(
                                            "https://www.linkedin.com/in/danielvie"
                                        )
                                    }
                                    className="mr-10 hover:text-sky-600"
                                >
                                    <FaLinkedin />
                                </button>

                                <button
                                    onClick={() =>
                                        handleLink(
                                            "https://www.github.com/danielvie"
                                        )
                                    }
                                    className="hover:text-sky-600"
                                >
                                    <FaGithub />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
