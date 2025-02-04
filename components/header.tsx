type HeaderParams = {
    text?: String,
    subText?: String,
}

function Header({text, subText}: HeaderParams) {
    return (
        <>
        <div>{text}</div>
        <div>{subText}</div>
        </>
    );
}

export default Header;