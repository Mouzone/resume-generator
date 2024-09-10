import { useState } from 'react'
import { Personal, Education, Experience } from "./Form.jsx";
import Resume from "./Resume.jsx"
import '../styles/App.css'
// todo: change education and experience to a list/object to contain multiple objects
function App() {
    const [ personal, setPersonal ] = useState( { name: "Jeff Teague",
                                                                 email: "jeffteague@gmail.com",
                                                                 phone: "971-822-3334",
                                                                 address: "Indianapolis, Indiana "})
    const [ education, setEducation ] = useState( { school: "Wake Forest",
                                                                   degree: "Basketball",
                                                                   start: "9/2007",
                                                                   end: "5/2009",
                                                                   location: "Winston-Salem, NC"
    })
    const [ experience, setExperience ] = useState({ company: "Atlanta Hawks",
                                                                    position: "Point Guard",
                                                                    start: "10/2009",
                                                                    end: "7/2016",
                                                                    location: "Atlanta, Georgia",
                                                                    description: "1x All-Star, PLayoffs every year, " +
                                                                                 "4 conference semi-finals appearance, " +
                                                                                 "1 conference finals appearance"
    })
    const [ section_to_show, setSectionToShow ] = useState( "personal")

    const show_personal = section_to_show === "personal"
    const show_education = section_to_show === "education"
    const show_experience = section_to_show === "experience"

    return (
        <>
            <div id="inputs">
                <Personal
                    state={ personal }
                    setState={ setPersonal }
                    show={ show_personal }
                />
                <Education
                    state={ education }
                    setState={ setEducation }
                    show={ show_education }
                />
                <Experience
                    state={ experience }
                    setState={ setExperience }
                    show={ show_experience }
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
