type block = {
    children: React.ReactNode;
    note?: string;
};

function Paragraph(props: block) {
    const color = props.note ? "bg-sky-600 p-2" : "";

    return (
        <>
            <div className={`mb-3 ${color}`}>{props.children}</div>
            {props.note ? (
                <div className="mb-4 ml-8 italic text-sky-500">
                    ({props.note})
                </div>
            ) : (
                <div></div>
            )}
        </>
    );
}

export default Paragraph;
