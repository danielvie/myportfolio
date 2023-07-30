interface block {
    from: string;
    to: string;
    company: string;
    role: string;
    city: string;
    children: React.ReactNode;
}

function ExperienceBlock(props: block) {
    return (
        <>
            <div className="my-6 rounded-xl bg-gray-800 p-6 text-justify text-gray-300">
                <div className="my-3 text-xl text-white">
                    <div className="mr-7 inline-block">
                        ({props.from} - {props.to})
                    </div>
                    <div className="inline-block">
                        {props.company}, {props.role}
                    </div>
                </div>
                <div className="mb-7">{props.city}</div>
                <div>{props.children}</div>
            </div>
        </>
    );
}

export default ExperienceBlock;
