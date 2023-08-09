import {
    FaChevronUp,
    FaPhoneSquare,
    FaLinkedin,
    FaGithub,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ContactLink from "./contact_link";

function Footer() {
    function handleScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }

    return (
        <>
            <div className="relative min-h-[200px] bg-gray-900 p-6">
                <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 justify-center">
                    <button onClick={handleScrollToTop}>
                        <FaChevronUp className="h-10 w-20 rounded-full bg-sky-800 p-2 text-white hover:bg-sky-900" />
                    </button>
                </div>

                <div className="my-5 text-left">
                    <ContactLink
                        icon={<FaPhoneSquare />}
                        text="+31 6 28937512"
                        link=""
                    />
                    <ContactLink
                        icon={<MdEmail />}
                        text="danielvie@gmail.com"
                        link="mailto:danielvie@gmail.com"
                    />
                    <ContactLink
                        icon={<FaLinkedin />}
                        text="in/danielvie"
                        link="https://www.linkedin.com/in/danielvie"
                    />
                    <ContactLink
                        icon={<FaGithub />}
                        text="danielvie"
                        link="https://www.github.com/danielvie"
                    />
                </div>
            </div>
        </>
    );
}

export default Footer;
