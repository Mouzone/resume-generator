import "../styles/Form.css"

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

    return (
        <div id="personalInput">
            <h2> Personal Details </h2>
            <Input
                label="Full Name"
                value={ state["name"] }
                handleChange={ changeName }
                />
            <Input
                label="Email"
                value={ state["email"] }
                handleChange={ changeEmail }
                />
            <Input
                label="Phone Number"
                value={ state["phone"] }
                handleChange={ changePhone }
                />
            <Input
                label="Address"
                value={ state["address"] }
                handleChange={ changeAddress }
                />
        </div>
    )
}

function Education({ state, setState }) {
    function changeSchool(e) {
        setState({ ...state, school: e.target.value })
    }

    function changeDegree(e) {
        setState({ ...state, degree: e.target.value })
    }

    function changeStart(e) {
        setState({ ...state, start: e.target.value })
    }

    function changeEnd(e) {
        setState({ ...state, end: e.target.value })
    }

    function changeLocation(e) {
        setState({ ...state, location: e.target.value })
    }

    return (
        <div id="educationInput">
            <h2> Education </h2>
            <Input
                label="School"
                value={ state["school"] }
                handleChange={ changeSchool }
            />
            <Input
                label="Degree"
                value={ state["degree"] }
                handleChange={ changeDegree }
            />
            <div className="dates">
                <Input
                    label="Start"
                    value={ state["start"] }
                    handleChange={ changeStart }
                />
                <Input
                    label="End"
                    value={ state["end"] }
                    handleChange={ changeEnd }
                />
            </div>
            <Input
                label="Location"
                value={ state["location"] }
                handleChange={ changeLocation }
            />
        </div>
    )
}

function Experience({ state, setState }) {
    function changeCompany(e) {
        setState({ ...state, company: e.target.value })
    }

    function changePosition(e) {
        setState({ ...state, position: e.target.value })
    }

    function changeStart(e) {
        setState({ ...state, start: e.target.value })
    }

    function changeEnd(e) {
        setState({ ...state, end: e.target.value })
    }

    function changeLocation(e) {
        setState({ ...state, location: e.target.value })
    }

    function changeDescription(e) {
        setState({ ...state, description: e.target.value })
    }

    return (
        <div id="experienceInput">
            <h2> Professional Experience </h2>
            <Input
                label="Company Name"
                value={ state["company"] }
                handleChange={ changeCompany }
            />
            <Input
                label="Position"
                value={ state["position"] }
                handleChange={ changePosition }
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
            <label>
                Description
                {' '}
                <textarea
                    value={state["description"]}
                    onChange={changeDescription}
                />
            </label>
        </div>
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

export { Personal, Education, Experience }