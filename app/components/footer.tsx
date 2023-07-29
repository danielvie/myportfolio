import {
    FaChevronUp,
    FaPhoneSquare,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <>
            <div className="relative min-h-[200px] bg-gray-800 p-6">
                <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 justify-center">
                    <button onClick={handleScrollToTop}>
                        <FaChevronUp className="h-12 w-12 rounded-full bg-gray-600 p-2 text-white hover:bg-sky-800" />
                    </button>
                </div>

                <div className="my-5 text-left">
                    <h1 className="text-xl font-bold text-sky-400">Contact</h1>

                    <div className="flex">
                        <div className="p-1 text-3xl">
                            <FaPhoneSquare />
                        </div>
                        <div className="p-2">+31 6 28937512</div>
                    </div>
                    <div className="flex">
                        <div className="p-1 text-3xl">
                            <MdEmail />
                        </div>
                        <div className="p-2">danielvie@gmail.com</div>
                    </div>
                    <div className="flex">
                        <div className="p-1 text-3xl">
                            <FaLinkedin />
                        </div>
                        <div className="p-2">in/danielvie</div>
                    </div>
                    <div className="flex">
                        <div className="p-1 text-3xl">
                            <FaGithub />
                        </div>
                        <div className="p-2">danielvie</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
