function Title(props: { id: string; text: string }) {
    return (
        <>
            <div id={props.id}></div>
            <div className="sticky top-[60px] z-30 my-1 justify-self-start text-left">
                <div className="w-[10em] rounded-sm  bg-sky-900 px-3 py-2 pr-5 shadow-sm shadow-gray-800">
                    {props.text}
                </div>
            </div>
        </>
    );
}

export default Title;
