interface block {
    from: string;
    to: string;
    company: string;
    role: string;
    children: React.ReactNode;
}

function ExperienceBlock(props: block) {
    return (
        <>
            <div className="my-6 rounded-xl bg-gray-800 p-6 text-justify leading-7 text-gray-300">
                <div className="my-3 text-xl text-white">
                    <div className="mx-7 inline-block">
                        ({props.from} - {props.to})
                    </div>
                    <div className="inline-block">
                        {props.company}, {props.role}
                    </div>
                </div>
                <div>{props.children}</div>
            </div>
        </>
    );
}

export default ExperienceBlock;
