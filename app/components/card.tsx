import Image from "next/image";

function Card(props: { img_addr: string }) {
    return (
        <>
            <button className="relative z-0 col-span-6 overflow-hidden rounded-2xl shadow-lg sm:col-span-4">
                <Image
                    width={200}
                    height={200}
                    className="z-0 h-full w-full object-cover"
                    src={props.img_addr}
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
