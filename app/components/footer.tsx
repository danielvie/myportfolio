import { ChevronUpIcon } from "@heroicons/react/24/solid";

function Footer() {
    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <>
            <div className="relative min-h-[300px] bg-gray-800">
                <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 justify-center">
                    <button onClick={handleScrollToTop}>
                        <ChevronUpIcon className="h-12 w-12 rounded-full bg-gray-600 p-1 text-white hover:bg-sky-800" />
                    </button>
                </div>
            </div>
        </>
    );
}

export default Footer;
