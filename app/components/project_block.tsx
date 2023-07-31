"use client";

import { useState } from "react";
import { FaEnvelope, FaEnvelopeOpen } from "react-icons/fa";

interface block {
    from: string;
    to: string;
    project: string;
    organization: string;
    function: string;
    keywords: string;
    children: React.ReactNode;
}

function ProjectBlock(props: block) {
    const [isChildrenVisible, setIsChildrenVisible] = useState(false);

    function toglleChildrenVisibility() {
        setIsChildrenVisible(!isChildrenVisible);
    }

    return (
        <>
            <button
                onClick={toglleChildrenVisibility}
                className="group relative col-span-1 min-h-[350px] w-full rounded-xl bg-gray-800 p-6 text-justify leading-7 text-gray-300 hover:bg-sky-900"
            >
                <div className="absolute right-5 top-5 text-4xl text-gray-900 group-hover:text-sky-950">
                    {isChildrenVisible ? <FaEnvelopeOpen /> : <FaEnvelope />}
                </div>
                <div className="my-3 text-xl">
                    <div>
                        <label className="mr-2 font-bold text-white">
                            Period:
                        </label>
                        {props.from} - {props.to}
                    </div>
                    <div>
                        <label className="mr-2 font-bold text-white">
                            Organization:
                        </label>
                        {props.organization}
                    </div>
                    <div>
                        <label className="mr-2 font-bold text-white">
                            Project:
                        </label>
                        {props.project}
                    </div>
                    <div>
                        <label className="mr-2 font-bold text-white">
                            Function:
                        </label>
                        {props.function}
                    </div>
                </div>
                {isChildrenVisible ? (
                    <div className="my-4 italic">{props.children}</div>
                ) : (
                    <div className="my-4 italic">...</div>
                )}
                <div className="italic">
                    <label className="mr-2 font-bold text-white">
                        Keywords:
                    </label>
                    {props.keywords}
                </div>
            </button>
        </>
    );
}

export default ProjectBlock;
