function ContactMe() {
    function handleSend() {
        const input_name = (
            document.getElementById("contact_input_name") as HTMLInputElement
        ).value;
        const input_email = (
            document.getElementById("contact_input_email") as HTMLInputElement
        ).value;
        const input_title = (
            document.getElementById("contact_input_title") as HTMLInputElement
        ).value;
        const input_message = (
            document.getElementById(
                "contact_input_message"
            ) as HTMLTextAreaElement
        ).value;

        console.log("input_name:", input_name);
        console.log("input_email:", input_email);
        console.log("input_title:", input_title);
        console.log("input_message:", input_message);
    }

    return (
        <>
            <div className="m-auto w-3/4 items-center justify-center">
                <div className="mb-3 flex items-center justify-center">
                    <div className="w-[70px] text-right">Name:</div>
                    <div className="ml-4 flex-auto">
                        <input
                            id="contact_input_name"
                            className="w-full rounded-md bg-gray-300 p-3 text-gray-800 focus:bg-gray-100"
                            type="text"
                        />
                    </div>
                </div>
                <div className="mb-3 flex items-center justify-center">
                    <div className="w-[70px] text-right">Email:</div>
                    <div className="ml-4 flex-auto">
                        <input
                            id="contact_input_email"
                            className="w-full rounded-md bg-gray-300 p-3 text-gray-800 focus:bg-gray-100"
                            type="text"
                        />
                    </div>
                </div>
                <div className="mb-3 flex items-center justify-center">
                    <div className="w-[70px] text-right">Title:</div>
                    <div className="ml-4 flex-auto">
                        <input
                            id="contact_input_title"
                            className="w-full rounded-md bg-gray-300 p-3 text-gray-800 focus:bg-gray-100"
                            type="text"
                        />
                    </div>
                </div>
                <div className="mb-3 flex items-start justify-center">
                    <div className="w-[70px] text-right">Message:</div>
                    <div className="ml-4 flex-auto">
                        <textarea
                            id="contact_input_message"
                            className="w-full rounded-md bg-gray-300 p-3 text-gray-800 focus:bg-gray-100"
                            rows={10}
                        />
                    </div>
                </div>
                <button
                    onClick={handleSend}
                    className="rounded-md bg-sky-800 px-4 py-2 hover:bg-sky-900"
                >
                    SEND
                </button>
            </div>
        </>
    );
}

export default ContactMe;
