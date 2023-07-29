import Image from "next/image";

function Header() {
    function handleScroolToElement(id: string) {
        const el = document.getElementById(id);
        el?.scrollIntoView({
            behavior: "smooth",
        });
    }

    return (
        <>
            <div className="fixed z-10 flex w-full items-center justify-center bg-gray-800">
                <Image
                    width={100}
                    height={180}
                    className="absolute left-[10px] top-[10px] rounded-2xl object-cover"
                    src="/eu.png"
                    alt="Card Image"
                />
                <div className="flex-1"></div>
                <button className="h-full flex-auto py-4 text-center text-orange-600 hover:bg-sky-800">
                    home
                </button>
                <button
                    onClick={() => handleScroolToElement("about")}
                    className="h-full flex-auto py-4 text-center hover:bg-sky-800"
                >
                    about
                </button>
                <button
                    onClick={() => handleScroolToElement("resume")}
                    className="h-full flex-auto py-4 text-center hover:bg-sky-800"
                >
                    resume
                </button>
                <button
                    onClick={() => handleScroolToElement("mywork")}
                    className="h-full flex-auto py-4 text-center hover:bg-sky-800"
                >
                    my work
                </button>
                <button
                    onClick={() => handleScroolToElement("contact")}
                    className="h-full flex-auto py-4 text-center hover:bg-sky-800"
                >
                    contact
                </button>
                <button className="flex-1"></button>
            </div>
        </>
    );
}

export default Header;
