import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { AiOutlineFileText } from "react-icons/ai";
import Paragraph from "./paragraph";

function AboutMe() {
    async function handleBla() {
        try {
            const url: string =
                process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL || "";

            const data = {
                content: "hello, this is a message from my nextjs appication",
                username: "mado portfolio",
            };

            const result = await axios.post(url!, data);

            if (result.status === 204) {
                console.log("message sent succesffully");
            }
        } catch (error) {
            console.error("failed to send message: ", error);
        }
    }

    const LinkContacts = (
        <>
            <div className="flex items-center justify-center py-5 text-center text-[40px]">
                <Link
                    target="_blank"
                    className="mr-10 hover:text-gray-900"
                    href="https://www.linkedin.com/in/danielvie"
                >
                    <FaLinkedin />
                </Link>

                <Link
                    target="_blank"
                    href="https://www.github.com/danielvie"
                    className="mr-10 hover:text-gray-900"
                >
                    <FaGithub />
                </Link>

                <Link
                    target="_blank"
                    href="./cv-daniel-vieira.pdf"
                    className="hover:text-gray-900"
                >
                    <div className="flex items-center justify-center text-center ">
                        <div>
                            <AiOutlineFileText />
                        </div>
                        <div className="ml-2 text-lg">download CV</div>
                    </div>
                </Link>
            </div>
        </>
    );
    const CompleteText = (
        <>
            <Paragraph>
                Hi, I&apos;m Daniel! <br />I am a control systems engineer with
                over 10 years of experience in aerospace industry working with
                control, guidance, navigation, Model Based Design using
                Matlab/Simulink and I have solid programming skills in
                C/C++/Python for embedded systems.
            </Paragraph>
            <Paragraph>
                I am passionate about innovating engineering solutions and
                thrive in dynamic environments surrounded by enthusiastic
                individuals.
            </Paragraph>
            <Paragraph>
                I started my professional experience working in the development
                of the Brazilian Guided Rocket. First developing a Simulink
                model to simulate the dynamics of the vehicle and then working
                in the design of the Guidance, Navigation and Control.
            </Paragraph>
            <Paragraph>
                In our workflow, the model was developed in Simulink and then we
                used the Simulink Coder to auto generate C++ code to be used in
                the Hardware In The Loop tests and also to be embedded in the
                flight computer.
            </Paragraph>
            <Paragraph>
                I&apos;m also still active in my academic path, researching in a
                Ph.D. program the use of predictive control for non-linear
                On-Off actuators submitted to dwell-time constraints, some
                example of the application of the work are: controlled power
                converters and attitude regulation of rockets and satellites in
                the upper atmosphere.
            </Paragraph>
        </>
    );

    return (
        <>
            <div className="mb-5 flex items-center justify-center">
                <div className="flex flex-col items-start">
                    <Image
                        className="z-20 m-2 mr-8 rounded-full"
                        src="/eu.png"
                        alt=""
                        width={130}
                        height={130}
                    />
                    <div className="relative mt-10">
                        {/* <div className="absolute top-[30px] -translate-x-[20px]"> */}
                        <div className="absolute -top-[39px] left-[30px]">
                            <div className="absolute -left-[40px] -top-[41px] h-[80px] w-[80px] rounded-full bg-gray-800"></div>
                            <div className="absolute -right-[40px] -top-[41px] h-[80px] w-[80px] rounded-full bg-gray-800"></div>
                            <div className="h-[41px] w-[80px] bg-sky-800 "></div>
                        </div>
                        <div className="rounded-xl bg-sky-800 p-7 pb-0 text-justify leading-7">
                            {CompleteText}
                            {LinkContacts}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutMe;
