import "../styles/Resume.css"
export default function Resume({ personal, education, experience }) {
    return (
        <div id="resume">
            <div id="personal">
                <h1> { personal[ "name" ] }</h1>
                <div id="personalBar">
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6M20 6L12 11L4 6H20M20 18H4V8L12 13L20 8V18Z"/>
                        </svg>
                        { personal[ "email" ] }
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/>
                        </svg>
                        { personal[ "phone" ] }
                    </p>
                    <p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/>
                        </svg>
                        { personal[ "address" ] }
                    </p>
                </div>
            </div>

            {(education[ "show" ].length) > 0 &&
                    <Items
                        isEducation={ true }
                        state={ education }
                    />
            }

            {(experience[ "show" ].length) > 0 &&
                <Items
                    isEducation={ false }
                    state={ experience }
                />
            }
        </div>
    )
}

function Items({ isEducation, state }) {
    return (
        <div id={ isEducation ? "education" : "experience" }>
            <h2> { isEducation ? "Education" : "Professional Experience" }</h2>
            <div className="items">
                {Object.entries(state["items"]).map(([ key, item ]) => {
                    if (state["show"].includes(key)) {
                        return (
                            <div key={ key } className="item">
                                <Left start={ item["start"] }
                                      end={ item["end"] }
                                      location={ item["location"] }
                                />
                                {isEducation ?
                                    <EducationRight school={ item["school"] }
                                                    degree={ item["degree"] }
                                    /> :
                                    <ExperienceRight company={ item["company"] }
                                                     position={ item["position"] }
                                                     description={ item["description"] }
                                    />
                                }
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

function Left({ start, end, location }) {
    return (
        <div className="left">
            <p> {start} - {end} </p>
            <p> {location} </p>
        </div>
    )
}

function EducationRight({ school, degree }) {
    return (
        <div className="right">
            <p> {school} </p>
            <p> {degree} </p>
        </div>
    )
}

function ExperienceRight({ company, position, description }) {
    return (
        <div className={"right"}>
            <p> {company} </p>
            <p> {position} </p>
            <p> {description} </p>
        </div>
    )
}