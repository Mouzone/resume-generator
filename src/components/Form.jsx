import "../styles/Form.css"
import { useState } from "react";
// todo: work on list view, with data structures and implement edit portion later
function Personal({ state, setState }) {
    function changeName(e) {
        setState({ ...state, name: e.target.value })
    }

    function changeEmail(e) {
        setState({ ...state, email: e.target.value })
    }

    function changePhone(e) {
        setState({ ...state, phone: e.target.value })
    }

    function changeAddress(e) {
        setState({ ...state, address: e.target.value })
    }

    const [ show, setShow ] = useState(false)
    function changeShow() {
        setShow(!show)
    }

    return (
        <div id="personalInput">
            <div className="top">
                <h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z"/>
                    </svg>
                    Personal Details
                </h2>
                <button onClick={changeShow} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
                    {show ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M7,10L12,15L17,10H7Z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M7,15L12,10L17,15H7Z"/>
                            </svg>
                        )
                    }
                </button>
            </div>
            { show && (
                <div className="bottom">
                    <Input
                        label="Full Name"
                        value={state["name"]}
                        handleChange={changeName}
                    />
                    <Input
                        label="Email"
                        value={state["email"]}
                        handleChange={changeEmail}
                    />
                    <Input
                        label="Phone Number"
                        value={state["phone"]}
                        handleChange={changePhone}
                    />
                    <Input
                        label="Address"
                        value={state["address"]}
                        handleChange={changeAddress}
                    />
                </div>
            )}
        </div>
    )
}

function Education({ state, setState }) {
    const [ show, setShow ] = useState(false)
    function changeShow() {
        setShow(!show)
    }

    return (
        <div id="educationInput">
            <div className="top">
                <h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                            d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3M18.82 9L12 12.72L5.18 9L12 5.28L18.82 9M17 16L12 18.72L7 16V12.27L12 15L17 12.27V16Z"/>
                    </svg>
                    Education
                </h2>
                <button onClick={changeShow} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
                    { show ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M7,10L12,15L17,10H7Z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M7,15L12,10L17,15H7Z"/>
                            </svg>
                        )
                    }
                </button>

            </div>
            { show && (
                <ul>
                    { state["show"].map(
                        key => <li key={key}> { state["items"][key]["school"] } </li>
                    ) }
                </ul>
                // <Edit
                //     isEducation={ true }
                //     state={ state }
                //     setState={ setState }
                // >
                // </Edit>
            )}
        </div>
    )
}

function Experience({state, setState}) {
    const [show, setShow] = useState(false)

    function changeShow() {
        setShow(!show)
    }

    return (
        <div id="experienceInput">
            <div className="top">
                <h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z"/>
                    </svg>
                    Professional Experience
                </h2>
                <button onClick={changeShow} style={{background: 'none', border: 'none', cursor: 'pointer'}}>
                    { show ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M7,10L12,15L17,10H7Z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M7,15L12,10L17,15H7Z"/>
                            </svg>
                        )
                    }
                </button>
            </div>
            { show && (
                <Edit
                    isEducation={ false }
                    state={ state }
                    setState={ setState }
                >
                </Edit>
            )}
        </div>
    )

}

function Edit({ isEducation, state, setState }) {
    function changeCompany(e) {
        setState({...state, company: e.target.value})
    }

    function changeSchool(e) {
        setState({...state, school: e.target.value})
    }

    function changePosition(e) {
        setState({...state, position: e.target.value})
    }

    function changeDegree(e) {
        setState({...state, degree: e.target.value})
    }

    function changeStart(e) {
        setState({...state, start: e.target.value})
    }

    function changeEnd(e) {
        setState({...state, end: e.target.value})
    }

    function changeLocation(e) {
        setState({...state, location: e.target.value})
    }

    function changeDescription(e) {
        setState({...state, description: e.target.value})
    }

    return (
        <div className="bottom">
            <Input
                label={ isEducation ? "School" : "Company Name" }
                value={ isEducation ? state["school"] : state["company"] }
                handleChange={ isEducation ? changeCompany : changeSchool }
            />
            <Input
                label={ isEducation ? "Degree" : "Position" }
                value={ isEducation ? state["degree"] : state["position"] }
                handleChange={ isEducation ? changeDegree : changePosition }
            />
            <div className="dates">
                <Input
                    label="Start Date"
                    value={ state["start"] }
                    handleChange={ changeStart }
                />
                <Input
                    label="End Date"
                    value={ state["end"] }
                    handleChange={ changeEnd }
                />
            </div>
            <Input
                label="Location"
                value={ state["location"] }
                handleChange={ changeLocation }
            />
            { !isEducation && (
                <label>
                    Description
                    {' '}
                    <textarea
                        value={ state["description"] }
                        onChange={ changeDescription }
                    />
                </label>
            )}
        </div>
    )
}

function Input({ label, value, handleChange }) {
    return (
        <label>
            {label}
            {' '}
            <input
                value={ value }
                onChange={ handleChange }
            />
        </label>
    )
}

export { Personal, Education, Experience }