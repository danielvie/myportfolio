import React from "react";
import { useState } from "react";
import { FaEnvelope, FaEnvelopeOpen } from "react-icons/fa";

type block = {
    from: string;
    to: string;
    project: string;
    organization: string;
    function: string;
    keywords: string;
    children: React.ReactNode;
};

function ProjectBlock(props: block) {
    const [isChildrenVisible, setIsChildrenVisible] = useState(false);

    function toglleChildrenVisibility() {
        setIsChildrenVisible(!isChildrenVisible);
    }

    let txt: string = "";
    if (props.children) {
        const children = React.Children.toArray(props.children);
        if (React.isValidElement(children[0])) {
            txt = (children[0].props.children as string).slice(0, 30);
        }
    }

    return (
        <>
            <button
                onClick={toglleChildrenVisibility}
                className="group relative col-span-1 min-h-[350px] w-full rounded-xl bg-gray-700 p-6 text-justify leading-7 text-gray-300 hover:bg-sky-800"
            >
                <div className="absolute right-3 top-3 text-3xl text-gray-800">
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
                    <div className="my-4 italic">
                        {txt.trim() == "" ? "[ ... ]" : `[ ${txt}... ]`}
                    </div>
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
