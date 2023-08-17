import axios from "axios";
import { useState } from "react";

enum STATE_MSG {
    IDLE = 0,
    SENDING,
    SENT,
    ERROR,
}

function ContactMe() {
    const [msgSent, setMsgSent] = useState(STATE_MSG.IDLE);

    function checkInput(
        element: HTMLInputElement | HTMLTextAreaElement,
        msg: string
    ) {
        const color = "bg-orange-200";
        if (element.value.trim() === "") {
            element.setAttribute("placeholder", msg);
            element?.classList.add(color);

            setTimeout(() => {
                element?.classList.remove(color);
            }, 3000);

            return false;
        }
        element?.classList.remove(color);
        return true;
    }

    async function handleSend() {
        console.log("Begin:handleSend");

        const i_name = document.getElementById(
            "contact_input_name"
        ) as HTMLInputElement;
        const name = i_name.value;

        const i_email = document.getElementById(
            "contact_input_email"
        ) as HTMLInputElement;
        const email = i_email.value;

        const i_subject = document.getElementById(
            "contact_input_subject"
        ) as HTMLInputElement;
        const subject = i_subject.value;

        const i_message = document.getElementById(
            "contact_input_message"
        ) as HTMLTextAreaElement;
        const message = i_message.value;

        // check if name is filled
        const name_isvalid = checkInput(i_name, "name cannot be empty!");
        const email_isvalid = checkInput(i_email, "email cannot be empty!");
        const message_isvalid = checkInput(
            i_message,
            "message cannot be empty!"
        );

        const isValid = name_isvalid && email_isvalid && message_isvalid;

        if (!isValid) {
            setMsgSent(STATE_MSG.ERROR);
            setTimeout(() => {
                setMsgSent(STATE_MSG.IDLE);
            }, 4000);
            return false;
        }

        // create message to send
        let msg = "_ _";
        msg += "```\n";
        msg += `name ....: ${name}\n`;
        msg += `email ...: ${email}\n`;
        msg += `subject .: ${subject}\n`;
        msg += "```\n";
        msg += message;
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
                    <div className="w-[10ex] text-right">
                        Name<sup className="text-sky-300">*</sup>:
                    </div>
                    <div className="ml-2 flex-auto">
                        <input
                            id="contact_input_name"
                            className="w-full rounded-md bg-gray-300 p-3 text-gray-800 focus:bg-gray-100"
                            type="text"
                        />
                    </div>
                </div>
                <div className="mb-3 flex items-center justify-center">
                    <div className="w-[10ex] text-right">
                        Email<sup className="text-sky-300">*</sup>:
                    </div>
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
                    <div className="w-[10ex] text-right">
                        Message<sup className="text-sky-300">*</sup>:
                    </div>
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
                        <span className="animate-pulse">SENDING...</span>
                    </button>
                ) : msgSent == STATE_MSG.SENT ? (
                    <button className="rounded-md bg-green-800 px-4 py-2">
                        MESSAGE SENT!
                    </button>
                ) : msgSent == STATE_MSG.ERROR ? (
                    <button className="rounded-md bg-red-800 px-4 py-2">
                        <span className="animate-pulse">NOT VALID!!</span>
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
