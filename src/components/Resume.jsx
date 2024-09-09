export default function Resume({ personal, education, experience }) {
    return (
        <>
            <div id="header">
                <h1> { personal["name"] }</h1>
                <div className="personalBar">
                    <p> { personal["email"] }</p>
                    <p> { personal["phone"] }</p>
                    <p> { personal["address"] }</p>
                </div>
            </div>
            <div id="Education">
                <h2> Education </h2>
                <div className="left">
                    <p> </p>
                </div>
            </div>
        </>
    )
}