"use client";

import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
    // try:
    // data = {
    //     'content': msg,
    //     'username': 'mado scientisto'
    // }
    // for url in url_web_hook:
    //     print('url:', url)
    //     print(data)
    //     requests.post(url, json = data)
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
                        <div className="absolute top-[30px] -translate-x-[20px]">
                            <div className="absolute -left-[1px] top-0 h-[40px] w-[41px] rounded-br-full bg-gray-900"></div>
                            <div className="absolute -left-[1px] bottom-0 h-[40px] w-[41px] rounded-tr-full bg-gray-900"></div>
                            <div className="h-[80px] w-[41px] bg-sky-700"></div>
                        </div>
                        <div className="ml-5 max-w-[800px] rounded-xl bg-sky-700 p-7 pb-0 text-justify leading-7">
                            Hi, I&apos;m Daniel! <br />I am an engineer that
                            believes in contributing to the world with
                            creativity and innovation. I have a strong
                            background working with Matlab/Simulink/C/C++ in the
                            Control System context and solid programming skills.
                            I have a passion to use engineering to get to new
                            solutions and to be involved in a challenging
                            environment and energetic people.
                            <div className="flex items-center justify-center py-5 text-center text-[40px]">
                                <Link
                                    target="_blank"
                                    className="mr-10 hover:text-cyan-400"
                                    href="https://www.linkedin.com/in/danielvie"
                                >
                                    <FaLinkedin />
                                </Link>

                                <Link
                                    target="_blank"
                                    href="https://www.github.com/danielvie"
                                    className="hover:text-cyan-400"
                                >
                                    <FaGithub />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
