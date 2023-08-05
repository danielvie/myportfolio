import Link from "next/link";
import React from "react";
import { IconBaseProps } from "react-icons"; // Import other icons if needed

type ContactProps = {
    icon: React.ReactElement<IconBaseProps>;
    text: string;
    link: string;
};

const Contact: React.FC<ContactProps> = ({ icon, text, link }) => {
    const container =
        link.trim() !== "" ? (
            <Link
                target="_blank"
                href={link}
                className="flex hover:text-sky-500"
            >
                <div className="p-1 text-3xl">{icon}</div>
                <div className="p-2">{text}</div>
            </Link>
        ) : (
            <div className="flex">
                <div className="p-1 text-3xl">{icon}</div>
                <div className="p-2">{text}</div>
            </div>
        );

    return container;
};

export default Contact;
