import axios from "axios";
import { useState } from "react";

function ContactMe() {
    const [msgSent, setMsgSent] = useState(false);

    function handleResetMsgSent() {
        setMsgSent(false);
    }

    async function handleSend() {
        const input_name = (
            document.getElementById("contact_input_name") as HTMLInputElement
        ).value;
        const input_email = (
            document.getElementById("contact_input_email") as HTMLInputElement
        ).value;
        const input_subject = (
            document.getElementById("contact_input_subject") as HTMLInputElement
        ).value;
        const input_message = (
            document.getElementById(
                "contact_input_message"
            ) as HTMLTextAreaElement
        ).value;

        let msg = `\`\`\`\n`;
        msg += `name ....: ${input_name}\n`;
        msg += `email ...: ${input_email}\n`;
        msg += `subject .: ${input_subject}\n`;
        msg += `\`\`\`\n`;
        msg += `${input_message}`;

        try {
            const result = await axios.post("/api/sendMessage", {
                msg,
            });

            if (result.status == 204) {
                console.log("message sent succesffully");
                setMsgSent(true);
            }
        } catch (error) {
            console.error("failed to send message: ", error);
        }
    }

    return (
        <>
            <div className="m-auto w-3/4 items-center justify-center">
                <div className="mb-3 flex items-center justify-center">
                    <div className="w-[85px] text-right">Name:</div>
                    <div className="ml-2 flex-auto">
                        <input
                            id="contact_input_name"
                            className="w-full rounded-md bg-gray-300 p-3 text-gray-800 focus:bg-gray-100"
                            type="text"
                        />
                    </div>
                </div>
                <div className="mb-3 flex items-center justify-center">
                    <div className="w-[85px] text-right">Email:</div>
                    <div className="ml-2 flex-auto">
                        <input
                            id="contact_input_email"
                            className="w-full rounded-md bg-gray-300 p-3 text-gray-800 focus:bg-gray-100"
                            type="text"
                        />
                    </div>
                </div>
                <div className="mb-3 flex items-center justify-center">
                    <div className="w-[85px] text-right">Subject:</div>
                    <div className="ml-2 flex-auto">
                        <input
                            id="contact_input_subject"
                            className="w-full rounded-md bg-gray-300 p-3 text-gray-800 focus:bg-gray-100"
                            type="text"
                        />
                    </div>
                </div>
                <div className="mb-3 flex items-start justify-center">
                    <div className="w-[85px] text-right">Message:</div>
                    <div className="ml-2 flex-auto">
                        <textarea
                            id="contact_input_message"
                            className="w-full rounded-md bg-gray-300 p-3 text-gray-800 focus:bg-gray-100"
                            rows={10}
                        />
                    </div>
                </div>
                {msgSent ? (
                    <button
                        onClick={handleResetMsgSent}
                        className="rounded-md bg-green-800 px-4 py-2"
                    >
                        MESSAGE SENT!
                    </button>
                ) : (
                    <button
                        onClick={handleSend}
                        className="rounded-md bg-sky-800 px-4 py-2 hover:bg-sky-900"
                    >
                        SEND MESSAGE
                    </button>
                )}
            </div>
        </>
    );
}

export default ContactMe;
