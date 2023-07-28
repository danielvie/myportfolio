function Header() {
    return (
        <>
            <div className="flex w-full h-12 bg-gray-700 justify-center items-center uppercase">
                <div className="flex-1 text-white px-4 bg-sky-600 sm:py-3"></div>
                <div className="flex-auto h-full text-center hover:bg-blue-500">
                    home
                </div>
                <div className="flex-auto h-full text-center w-2 hover:bg-blue-500">
                    about
                </div>
                <div className="flex-auto h-full text-center hover:bg-blue-500">
                    resume
                </div>
                <div className="flex-auto h-full text-center hover:bg-blue-500">
                    work
                </div>
                <div className="flex-auto h-full text-center hover:bg-blue-500">
                    contact
                </div>
                <div className="flex-1"></div>
            </div>

            <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">
                blaa
            </button>
            <div className="p-4 text-lg bg-red-500 flex">Content here</div>
        </>
    );
}

export default Header;
