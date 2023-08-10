import axios from "axios";
import { useState } from "react";

enum STATE_MSG {
    IDLE = 0,
    SENDING,
    SENT,
}

function ContactMe() {
    const [msgSent, setMsgSent] = useState(STATE_MSG.IDLE);

    async function handleSend() {
        console.log("Begin:handleSend");
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

        let msg = "_ _";
        msg += "```\n";
        msg += `name ....: ${input_name}\n`;
        msg += `email ...: ${input_email}\n`;
        msg += `subject .: ${input_subject}\n`;
        msg += "```\n";
        msg += input_message;
        msg += "_ _\n";
        msg += "_ _\n";
        msg += "```";
        msg += "end of message";
        msg += "```";

        try {
            setMsgSent(STATE_MSG.SENDING);
            const result = await axios.post("/api/sendMessage", {
                msg,
            });

            if (result.status == 204) {
                console.log("message sent succesffully");
                setMsgSent(STATE_MSG.SENT);
                setTimeout(() => {
                    setMsgSent(STATE_MSG.IDLE);
                }, 10000);
            }
        } catch (error) {
            console.error("failed to send message: ", error);
        }
    }

    return (
        <>
            <div className="m-auto mt-8 items-center justify-center md:w-5/6">
                <div className="mb-3 flex items-center justify-center">
                    <div className="w-[10ex] text-right">Name:</div>
                    <div className="ml-2 flex-auto">
                        <input
                            id="contact_input_name"
                            className="w-full rounded-md bg-gray-300 p-3 text-gray-800 focus:bg-gray-100"
                            type="text"
                        />
                    </div>
                </div>
                <div className="mb-3 flex items-center justify-center">
                    <div className="w-[10ex] text-right">Email:</div>
                    <div className="ml-2 flex-auto">
                        <input
                            id="contact_input_email"
                            className="w-full rounded-md bg-gray-300 p-3 text-gray-800 focus:bg-gray-100"
                            type="text"
                        />
                    </div>
                </div>
                <div className="mb-3 flex items-center justify-center">
                    <div className="w-[10ex] text-right">Subject:</div>
                    <div className="ml-2 flex-auto">
                        <input
                            id="contact_input_subject"
                            className="w-full rounded-md bg-gray-300 p-3 text-gray-800 focus:bg-gray-100"
                            type="text"
                        />
                    </div>
                </div>
                <div className="mb-3 flex items-start justify-center">
                    <div className="w-[10ex] text-right">Message:</div>
                    <div className="ml-2 flex-auto">
                        <textarea
                            id="contact_input_message"
                            className="w-full rounded-md bg-gray-300 p-3 text-gray-800 focus:bg-gray-100"
                            rows={10}
                        />
                    </div>
                </div>
                {msgSent == STATE_MSG.SENDING ? (
                    <button className="rounded-md bg-orange-800 px-4 py-2">
                        <label className="animate-pulse">SENDING...</label>
                    </button>
                ) : msgSent == STATE_MSG.SENT ? (
                    <button className="rounded-md bg-green-800 px-4 py-2">
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
