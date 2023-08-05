import Nav from "./nav";

function Header() {
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
            <Nav />
        </>
    );
}

export default Header;
