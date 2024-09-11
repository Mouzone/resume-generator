import "../styles/Form.css"
import { useState } from "react";

function Personal({ state, setState }) {

    const [ show, setShow ] = useState(false)
    function changeShow() {
        setShow(!show)
    }
    function curryChange(key){
        return (e) => {
            setState({ ...state, [key]: e.target.value })
        }
    }

    const labels_for_value = {
        name: "Full Name",
        email: "Email",
        phone: "Phone Number",
        address: "Address"
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
                    { show ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M7,15L12,10L17,15H7Z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M7,10L12,15L17,10H7Z"/>
                            </svg>
                        )
                    }
                </button>
            </div>
            { show && (
                <div className="bottom">
                    { Object.entries(state).map(([key, value]) => {
                        return <Input
                            label={ labels_for_value[key] }
                            value={ value }
                            handleChange={ curryChange(key) }/>
                    })}
                </div>
            )}
        </div>
    )
}

function StandardInputs({ isEducation, state, setState }) {
    const [show, setShow] = useState(false)
    const [edit, setEdit] = useState(null)

    function changeShow() {
        setShow(!show)
    }

    function changeEdit(key) {
        setEdit(key)
    }

    function changeVisibility(key){
        const old_show = state["show"]
        const new_show = old_show.includes(key)
            ? old_show.filter(item => item !== key)
            : [...old_show, key]
        setState({...state, show: new_show})
    }

    function createNew() {
        const new_key = crypto.randomUUID();
        const new_item = isEducation
            ? { company: "", position: "", start: "", end: "", location: "", description: "" }
            : { school: "", degree: "", start: "", end: "", location: "" }

        const new_items = { ...state["items"], [new_key]: new_item }

        setState({ show: [...state["show"], new_key], items: new_items })
        changeEdit(new_key)
    }

    return (
        <div id={ isEducation ? "educationInput" : "experienceInput" }>
            <div className="top">
                <h2>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path
                            d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z"/>
                    </svg>
                    { isEducation ? "Education" : "Professional Experience"}
                </h2>
                <button onClick={ changeShow } style={ { background: 'none', border: 'none', cursor: 'pointer' } }>
                    { show ? (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M7,15L12,10L17,15H7Z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <path d="M7,10L12,15L17,10H7Z"/>
                            </svg>
                        )
                    }
                </button>
            </div>
            { (show && (edit === null)) && (
                <div className="bottom">
                    <ul>
                        {Object.entries(state["items"]).map(([item_id, item]) =>
                            <ObjectElement
                                isEducation={ isEducation }
                                key={ item_id }
                                item={ item }
                                handleChange={ () => changeVisibility(item_id) }
                                showIcon={ state["show"].includes(item_id) }
                                handleEdit={ () => changeEdit(item_id) }>
                            </ObjectElement>
                        )}
                    </ul>
                    <button onClick={ createNew } style={ { background: 'none', border: 'none', cursor: 'pointer' } }
                            className="newItem">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z"/>
                        </svg>
                    </button>
                </div>
            )}

            {(show && (edit !== null)) && (
                <Edit
                    isEducation={ isEducation }
                    state={ state }
                    setState={ setState }
                    to_edit={ edit }
                    setEdit={ setEdit }>
                </Edit>
            )}
        </div>
    )
}

function Edit({isEducation, state, setState, to_edit, setEdit}) {
    function changeCompany(e) {
        const updatedItems = {
            ...state["items"],
            [to_edit]: {
                ...state["items"][to_edit],
                company: e.target.value
            }
        }
        setState({ ...state, items: updatedItems })
    }

    function changeSchool(e) {
        const updatedItems = {
            ...state["items"],
            [to_edit]: {
                ...state["items"][to_edit],
                school: e.target.value
            }
        }
        setState({ ...state, items: updatedItems })
    }

    function changePosition(e) {
        const updatedItems = {
            ...state["items"],
            [to_edit]: {
                ...state["items"][to_edit],
                position: e.target.value
            }
        }
        setState({ ...state, items: updatedItems })
    }

    function changeDegree(e) {
        const updatedItems = {
            ...state["items"],
            [to_edit]: {
                ...state["items"][to_edit],
                degree: e.target.value
            }
        }
        setState({ ...state, items: updatedItems })
    }

    function changeStart(e) {
        const updatedItems = {
            ...state["items"],
            [to_edit]: {
                ...state["items"][to_edit],
                start: e.target.value
            }
        }
        setState({ ...state, items: updatedItems })
    }

    function changeEnd(e) {
        const updatedItems = {
            ...state["items"],
            [to_edit]: {
                ...state["items"][to_edit],
                end: e.target.value
            }
        }
        setState({ ...state, items: updatedItems })
    }

    function changeLocation(e) {
        const updatedItems = {
            ...state["items"],
            [to_edit]: {
                ...state["items"][to_edit],
                location: e.target.value
            }
        }
        setState({ ...state, items: updatedItems })
    }

    function changeDescription(e) {
        const updatedItems = {
            ...state["items"],
            [to_edit]: {
                ...state["items"][to_edit],
                description: e.target.value
            }
        }
        setState({ ...state, items: updatedItems })
    }

    const [ original, setOriginal ] = useState(state)
    function exit() {
        setEdit(null)
    }

    function cancelChange() {
        if (original["show"][original["show"].length - 1] === to_edit) {
            if (Object.values(original["items"][to_edit]).every(value => value === "")) {
                delete original["items"][to_edit]
                original["show"].pop()
            }
        }
        exit()
        setState({ ...original })
    }

    return (
        <div className="bottom">
            <Input
                label={ isEducation ? "School" : "Company Name" }
                value={ isEducation ? state["items"][to_edit]["school"] : state["items"][to_edit]["company"] }
                handleChange={ isEducation ? changeSchool : changeCompany }
            />
            <Input
                label={ isEducation ? "Degree" : "Position" }
                value={ isEducation ? state["items"][to_edit]["degree"] : state["items"][to_edit]["position"] }
                handleChange={ isEducation ? changeDegree : changePosition }
            />
            <div className="dates">
                <Input
                    label="Start Date"
                    value={ state["items"][to_edit]["start"] }
                    handleChange={ changeStart }
                />
                <Input
                    label="End Date"
                    value={ state["items"][to_edit]["end"] }
                    handleChange={ changeEnd }
                />
            </div>
            <Input
                label="Location"
                value={ state["items"][to_edit]["location"] }
                handleChange={ changeLocation }
            />
            { !isEducation && (
                <label>
                    Description
                    {' '}
                    <textarea
                        value={ state["items"][to_edit]["description"] }
                        onChange={ changeDescription }
                    />
                </label>
            )}
            <div className="buttons">
                <button onClick={cancelChange} style={ { cursor: "pointer" } }> Cancel </button>
                <button onClick={exit} style={ { cursor: "pointer" } }> Save </button>
            </div>
        </div>
    )
}

// todo: for description make it keep formatting of the input instead of making it one line
// todo: edge case when company name isn't put in the edit component is not selectable for that object
function ObjectElement({ isEducation, id, item, handleChange, showIcon, handleEdit }) {
    return (
        <li key={id}>
            <h3 onClick={ handleEdit } style={ { cursor: "pointer" } }> { isEducation ? item["school"] : item["company"] }  </h3>
            <button onClick={ handleChange } style={{background: 'none', border: 'none', cursor: 'pointer'}}>
                { showIcon ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M11.5,18C15.5,18 18.96,15.78 20.74,12.5C18.96,9.22 15.5,7 11.5,7C7.5,7 4.04,9.22 2.26,12.5C4.04,15.78 7.5,18 11.5,18M11.5,6C16.06,6 20,8.65 21.86,12.5C20,16.35 16.06,19 11.5,19C6.94,19 3,16.35 1.14,12.5C3,8.65 6.94,6 11.5,6M11.5,8C14,8 16,10 16,12.5C16,15 14,17 11.5,17C9,17 7,15 7,12.5C7,10 9,8 11.5,8M11.5,9C9.57,9 8,10.57 8,12.5C8,14.43 9.57,16 11.5,16C13.43,16 15,14.43 15,12.5C15,10.57 13.43,9 11.5,9Z"/>
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path
                                d="M2.54,4.71L3.25,4L20,20.75L19.29,21.46L15.95,18.11C14.58,18.68 13.08,19 11.5,19C6.94,19 3,16.35 1.14,12.5C2.11,10.5 3.63,8.83 5.5,7.68L2.54,4.71M11.5,18C12.79,18 14.03,17.77 15.17,17.34L14.05,16.21C13.32,16.71 12.45,17 11.5,17C9,17 7,15 7,12.5C7,11.55 7.29,10.68 7.79,9.95L6.24,8.41C4.57,9.38 3.19,10.8 2.26,12.5C4.04,15.78 7.5,18 11.5,18M20.74,12.5C18.96,9.22 15.5,7 11.5,7C10.35,7 9.23,7.19 8.19,7.53L7.41,6.75C8.68,6.26 10.06,6 11.5,6C16.06,6 20,8.65 21.86,12.5C20.95,14.39 19.53,16 17.79,17.13L17.07,16.4C18.6,15.44 19.87,14.1 20.74,12.5M11.5,8C14,8 16,10 16,12.5C16,13.32 15.78,14.08 15.4,14.74L14.66,14C14.88,13.54 15,13.04 15,12.5C15,10.57 13.43,9 11.5,9C10.96,9 10.46,9.12 10,9.34L9.26,8.6C9.92,8.22 10.68,8 11.5,8M8,12.5C8,14.43 9.57,16 11.5,16C12.17,16 12.79,15.81 13.32,15.5L8.5,10.68C8.19,11.21 8,11.83 8,12.5Z"/>
                        </svg>
                )}
            </button>
        </li>
    )
}

function Input({label, value, handleChange}) {
    return (
        <label>
            {label}
            {' '}
            <input
                value={value}
                onChange={handleChange}
            />
        </label>
    )
}

export {Personal, StandardInputs }