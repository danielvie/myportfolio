interface block {
    children: React.ReactNode;
}

function ExperienceBullet(props: block) {
    return (
        <>
            <div className="mb-3">{props.children}</div>
        </>
    );
}

export default ExperienceBullet;
