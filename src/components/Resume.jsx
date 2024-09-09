import "../styles/Resume.css"

export default function Resume({ personal, education, experience }) {
    return (
        <div id="resume">
            <div id="personal">
                <h1> {personal["name"]}</h1>
                <div id="personalBar">
                    <p> {personal["email"]} </p>
                    <p> {personal["phone"]} </p>
                    <p> {personal["address"]} </p>
                </div>
            </div>
            <div id="education">
                <h2> Education </h2>
                <div className="items">
                    <div className="item">
                        <div className="left">
                            <p> {education["start"]} - {education["end"]} </p>
                            <p> {education["location"]} </p>
                        </div>
                        <div className="right">
                            <p> {education["school"]} </p>
                            <p> {education["degree"]} </p>
                        </div>
                    </div>

                </div>
            </div>
            <div id="experience">
                <h2> Professional Experience </h2>
                <div className="items">
                    <div className="item">
                        <div className="left">
                            <p> {experience["start"]} - {experience["end"]} </p>
                            <p> {experience["location"]} </p>
                        </div>
                        <div className={"right"}>
                            <p> {experience["company"]} </p>
                            <p> {experience["position"]} </p>
                            <p> {experience["description"]} </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}