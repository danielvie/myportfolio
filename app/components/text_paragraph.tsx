interface block {
    children: React.ReactNode;
}

function TextParagraph(props: block) {
    return (
        <>
            <div className="mb-3">{props.children}</div>
        </>
    );
}

export default TextParagraph;
