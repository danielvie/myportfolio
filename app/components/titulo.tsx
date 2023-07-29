function Titulo(props: { id: string; text: string }) {
    return (
        <>
            <div
                id={props.id}
                className="my-1 justify-self-start p-3 text-left"
            >
                <label className="rounded-sm bg-sky-800 px-3 py-1">
                    {props.text}
                </label>
            </div>
        </>
    );
}

export default Titulo;
