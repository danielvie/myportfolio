import Image from "next/image";

function Card() {
    return (
        <>
            <button className="w-300px h-400px relative z-0 col-span-3 overflow-hidden rounded-2xl shadow-lg">
                <Image
                    width={300}
                    height={400}
                    className="z-0 h-full w-full object-cover"
                    src="/eu.png"
                    alt="Card Image"
                />
                <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 hover:opacity-80">
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity hover:opacity-100">
                        <h3 className="text-xl font-semibold text-sky-400">
                            Card Title
                        </h3>
                        <p className="mt-2 text-sm">
                            This is a small description for the card.
                        </p>
                    </div>
                </div>
            </button>
        </>
    );
}

export default Card;
