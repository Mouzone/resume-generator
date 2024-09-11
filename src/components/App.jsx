// todo: REFACTORING!!
import { useState } from 'react'
import { Personal, Education, Experience } from "./Form.jsx";
import Resume from "./Resume.jsx"
import '../styles/App.css'
function App() {
    // todo: drag and drop ordering
    const [ personal, setPersonal ] = useState( { name: "Jeff Teague",
                                                                 email: "jeffteague@gmail.com",
                                                                 phone: "971-822-3334",
                                                                 address: "Indianapolis, Indiana "})
    const first = crypto.randomUUID()
    const second = crypto.randomUUID()
    const third = crypto.randomUUID()
    const fourth = crypto.randomUUID()
    const fifth = crypto.randomUUID()
    const sixth = crypto.randomUUID()
    const seventh = crypto.randomUUID()
    const eighth = crypto.randomUUID()
    const [ education, setEducation ] = useState(
        {
                    show: [first, second],
                    items: {
                        [first]: {
                            school: "Pike High School",
                            degree: "High School",
                            start: "9/2003",
                            end: "6/2007",
                            location: "Indianapolis, IN"
                        },
                        [second]: {
                            school: "Wake Forest",
                            degree: "Basketball",
                            start: "9/2007",
                            end: "5/2009",
                            location: "Winston-Salem, NC"
                        }
                    }
        })
    const [ experience, setExperience ] = useState(
        {
                    show: [first, second, seventh, eighth],
                    items: {
                        [first]: {
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
                        [second]: {
                            company: "Indiana Pacers",
                            position: "Point Guard",
                            start: "7/2016",
                            end: "7/2017",
                            location: "Indianapolis, Indiana",
                            description: "1 playoff appearance",
                        },
                        [third]: {
                            company: "Minnesota Timberwolves",
                            position: "Point Guard",
                            start: "7/2017",
                            end: "1/2020",
                            location: "Minneapolis, Minnesota",
                            description: "1 playoff appearance"
                        },
                        [fourth]: {
                            company: "Atlanta Hawks",
                            position: "Backup Point Guard",
                            start: "1/2020",
                            end: "7/2020",
                            location: "Atlanta, Georgia",
                            description: ""
                        },
                        [fifth]: {
                            company: "Boston Celtics",
                            position: "Backup Point Guard",
                            start: "7/2020",
                            end: "3/2021",
                            location: "Boston, Massachusetts",
                            description: ""
                        },
                        [sixth]: {
                            company: "Milwaukee Bucks",
                            position: "Backup Point Guard",
                            start: "4/2021",
                            end: "7/2021",
                            location: "Milwaukee, Wisconsin",
                            description: "1 NBA Championship"
                        },
                        [seventh]: {
                            company: "Atlanta Hawks",
                            position: "Regional Scout",
                            start: "3/2022",
                            end: "4/2023",
                            location: "Atlanta, Georgia",
                            description: ""
                        },
                        [eighth]: {
                            company: "Pike High School",
                            position: "Basketball Coach",
                            start: "4/2023",
                            end: "Present",
                            location: "Indianapolis, Indiana",
                            description: ""
                        }
                    }
        })
    const [ originals, _ ] = useState( {
                                                                    personal:personal,
                                                                    education: education,
                                                                    experience: experience
                                                                })

    function clear() {
        setPersonal({name: "", email: "", phone: "", address: ""})

        const blank_state = {show: [], items: {}}
        setEducation(blank_state)
        setExperience(blank_state)
    }

    function loadExample() {
        setPersonal(originals["personal"])
        setEducation(originals["education"])
        setExperience(originals["experience"])
    }
    return (
        <>
            <div id="inputs">
                <Personal
                    state={personal}
                    setState={setPersonal}
                />
                <Education
                    state={education}
                    setState={setEducation}
                />
                <Experience
                    state={experience}
                    setState={setExperience}
                />
                <div className="template-buttons">
                    <button onClick={clear} style={{cursor: "pointer"}}>
                        Clear
                    </button>
                    <button onClick={loadExample} style={{cursor: "pointer"}}>
                        Load Example
                    </button>
                </div>
            </div>
            <Resume
                personal={personal}
                education={education}
                experience={experience}
            />
        </>
    )
}

export default App
