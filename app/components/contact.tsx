'use client'

import React from "react";
import { IconBaseProps } from "react-icons"; // Import other icons if needed

interface ContactProps {
    icon: React.ReactElement<IconBaseProps>;
    text: string;
    link: string;
}

const Contact: React.FC<ContactProps> = ({ icon, text, link }) => {
    const handleLink = (url: string) => {
        window.open(url, "_blank"); // Opens the link in a new tab
    };

    const container =
        link.trim() !== "" ? (
            <button
                onClick={() => handleLink(link)}
                className="flex hover:text-sky-500"
            >
                <div className="p-1 text-3xl">{icon}</div>
                <div className="p-2">{text}</div>
            </button>
        ) : (
            <div className="flex">
                <div className="p-1 text-3xl">{icon}</div>
                <div className="p-2">{text}</div>
            </div>
        );

    return container;
};

export default Contact;
