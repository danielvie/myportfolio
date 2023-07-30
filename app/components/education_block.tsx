interface block {
    from: string;
    to: string;
    title: string;
    city: string;
    school: string;
    children: React.ReactNode;
}

function EducationBlock(props: block) {
    return (
        <>
            <div className="my-6 rounded-xl bg-gray-800 p-6 text-justify leading-7 text-gray-300">
                <div className="my-3 text-xl text-white">
                    <div className="mr-7 inline-block">
                        ({props.from} - {props.to})
                    </div>
                    <div className="inline-block">{props.school}</div>
                </div>
                <div className="my-2">
                    <div>{props.title}</div>
                    <div>{props.city}</div>
                </div>
                <div className="italic">{props.children}</div>
            </div>
        </>
    );
}

export default EducationBlock;
