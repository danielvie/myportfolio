function Header() {
    return (
        <>
            <div className="flex h-12 w-full items-center justify-center bg-gray-700 uppercase">
                <div className="flex-1 bg-sky-600 px-4 text-white sm:py-3"></div>
                <div className="h-full flex-auto text-center hover:bg-blue-500">
                    home
                </div>
                <div className="h-full w-2 flex-auto text-center hover:bg-blue-500">
                    about
                </div>
                <div className="h-full flex-auto text-center hover:bg-blue-500">
                    resume
                </div>
                <div className="h-full flex-auto text-center hover:bg-blue-500">
                    work
                </div>
                <div className="h-full flex-auto text-center hover:bg-blue-500">
                    contact
                </div>
                <div className="flex-1"></div>
            </div>
        </>
    );
}

export default Header;
