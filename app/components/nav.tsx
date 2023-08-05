function Nav() {
    function handleScroolToElement(id: string) {
        const el = document.getElementById(id);

        if (el) {
            const headerHeight = 60;
            const elementPostition = el.getBoundingClientRect().top;
            const offsetPostion = elementPostition - headerHeight;

            window.scrollBy({
                top: offsetPostion,
                behavior: "smooth",
            });
        }
    }

    return (
        <>
            <div className="fixed z-50 flex h-[75px] w-full items-center justify-center bg-gray-700 shadow-md shadow-gray-900">
                <div className="flex-1"></div>
                <button
                    onClick={() => handleScroolToElement("about")}
                    className="h-full flex-auto py-4 text-center hover:bg-sky-800"
                >
                    about
                </button>
                <button
                    onClick={() => handleScroolToElement("experience")}
                    className="h-full flex-auto py-4 text-center hover:bg-sky-800"
                >
                    experience
                </button>
                <button
                    onClick={() => handleScroolToElement("education")}
                    className="h-full flex-auto py-4 text-center hover:bg-sky-800"
                >
                    education
                </button>
                <button
                    onClick={() => handleScroolToElement("projects")}
                    className="h-full flex-auto py-4 text-center hover:bg-sky-800"
                >
                    projects
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

export default Nav;
