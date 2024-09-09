import { useState } from 'react'
import { Personal, Education, Experience } from "./Form.jsx";
import Resume from "./Resume.jsx"
import '../styles/App.css'

function App() {
    const [ personal, setPersonal ] = useState( { name: "Jeff Teague",
                                                                 email: "jeffteague@gmail.com",
                                                                 phone: "971-822-3334",
                                                                 address: "Indianapolis, Indiana "})
    const [ education, setEducation ] = useState( { school: "Wake Forest",
                                                                   degree: "Basketball",
                                                                   start: "9/2007",
                                                                   end: "5/2009",
                                                                   location: "Winston-Salem, North Carolina"
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

    return (
        <>
            <div className="inputs">
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
