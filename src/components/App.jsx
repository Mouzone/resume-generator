import { useState } from 'react'
import { Personal, Education, Experience } from "./Form.jsx";
import Resume from "./Resume.jsx"
import '../styles/App.css'
function App() {
    const [ personal, setPersonal ] = useState( { name: "Jeff Teague",
                                                                 email: "jeffteague@gmail.com",
                                                                 phone: "971-822-3334",
                                                                 address: "Indianapolis, Indiana "})
    const [ education, setEducation ] = useState(
        {
                    show: [0, 1],
                    items: [
                            {
                                school: "Pike High School",
                                degree: "High School",
                                start: "9/2003",
                                end: "6/2007",
                                location: "Indianapolis, IN"
                            },
                            {
                                school: "Wake Forest",
                                degree: "Basketball",
                                start: "9/2007",
                                end: "5/2009",
                                location: "Winston-Salem, NC"
                            }
                        ]
                    })
    const [ experience, setExperience ] = useState(
        {
                    show: [0, 1, 6, 7],
                    items: [
                            {
                                company: "Atlanta Hawks",
                                position: "Point Guard",
                                start: "7/2009",
                                end: "7/2016",
                                location: "Atlanta, Georgia",
                                description: "1 All-Star appearance, " +
                                    "7 playoffs appearances, " +
                                    "4 conference semi-finals appearance, " +
                                    "1 conference finals appearance"
                            },
                            {
                                company: "Indiana Pacers",
                                position: "Point Guard",
                                start: "7/2016",
                                end: "7/2017",
                                location: "Indianapolis, Indiana",
                                description: "1 playoff appearance",
                            },
                            {
                                company: "Minnesota Timberwolves",
                                position: "Point Guard",
                                start: "7/2017",
                                end: "1/2020",
                                location: "Minneapolis, Minnesota",
                                description: "1 playoff appearance"
                            },
                            {
                                company: "Atlanta Hawks",
                                position: "Backup Point Guard",
                                start: "1/2020",
                                end: "7/2020",
                                location: "Atlanta, Georgia",
                                description: ""
                            },
                            {
                                company: "Boston Celtics",
                                position: "Backup Point Guard",
                                start: "7/2020",
                                end: "3/2021",
                                location: "Boston, Massachusetts",
                                description: ""
                            },
                            {
                                company: "Milwaukee Bucks",
                                position: "Backup Point Guard",
                                start: "4/2021",
                                end: "7/2021",
                                location: "Milwaukee, Wisconsin",
                                description: "1 NBA Championship"
                            },
                            {
                                company: "Atlanta Hawks",
                                position: "Regional Scout",
                                start: "3/2022",
                                end: "4/2023",
                                location: "Atlanta, Georgia",
                                description: ""
                            },
                            {
                                company: "Pike High School",
                                position: "Basketball Coach",
                                start: "4/2023",
                                end: "Present",
                                location: "Indianapolis, Indiana",
                                description: ""
                            }
                        ]
                    })

    // todo: for education and experience:
    // -- on dropdown show School / Company
    // -- clicking on the School / Company brings up form with values prefilled and edited
    // ---- cancel button does not add any changes, save button saves changes
    // -- button to add new School / Company
    // ---- brings up same form, but no pre filled values with same buttons
    // -- each School / Company have visibility icon that when clicked hide / show it on Resume
    return (
        <>
            <div id="inputs">
                <Personal
                    state={ personal }
                    setState={ setPersonal }
                />
                <Education
                    state={ education }
                    setState={ setEducation }
                />
                <Experience
                    state={ experience }
                    setState={ setExperience }
                />
            </div>
            <Resume
                personal={ personal }
                education={ education }
                experience={ experience }
            />
        </>
    )
}

export default App
