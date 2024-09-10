import { useState } from 'react'
import { Personal, Education, Experience } from "./Form.jsx";
import Resume from "./Resume.jsx"
import '../styles/App.css'
// todo: change education and experience to a list/object to contain multiple objects
function App() {
    // todo: change education and experience to objects iwth a toShow() value that has keys
    // -- then folows the keys to the value inside the object called items and shows it
    const [ personal, setPersonal ] = useState( { name: "Jeff Teague",
                                                                 email: "jeffteague@gmail.com",
                                                                 phone: "971-822-3334",
                                                                 address: "Indianapolis, Indiana "})
    const [ education, setEducation ] = useState(
        {
                    show: [0, 1],
                    items: {
                        0: {
                            school: "Pike High School",
                            degree: "High School",
                            start: "9/2003",
                            end: "6/2007",
                            location: "Indianapolis, IN"
                        },
                        1: {
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
                    show: [0],
                    items: {
                        0: {
                            company: "Atlanta Hawks",
                            position: "Point Guard",
                            start: "10/2009",
                            end: "7/2016",
                            location: "Atlanta, Georgia",
                            description: "1x All-Star, Playoffs every year, " +
                                "4 conference semi-finals appearance, " +
                                "1 conference finals appearance"
                        }
                    }
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
