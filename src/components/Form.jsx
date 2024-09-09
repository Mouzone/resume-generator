function Personal( {state, setState} ) {
    function changeName(e) {
        setState( {...state, name: e.target.value} )
    }

    function changeEmail(e) {
        setState( {...state, email: e.target.value} )
    }

    function changePhone(e) {
        setState( {...state, phone: e.target.value} )
    }

    function changeAddress(e) {
        setState( {...state, address: e.target.value} )
    }

    return (
        <>
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
        </>
    )
}

function Education( {state, setState} ) {
    function changeSchool(e) {
        setState( {...state, school: e.target.value} )
    }

    function changeDegree(e) {
        setState( {...state, degree: e.target.value} )
    }

    function changeStart(e) {
        setState( {...state, start: e.target.value} )
    }

    function changeEnd(e) {
        setState( {...state, end: e.target.value} )
    }

    function changeLocation(e) {
        setState( {...state, location: e.target.value})
    }

    return (
        <>
            <Input
                label="School"
                value={state["school"]}
                handleChange={changeSchool}
            />
            <Input
                label="Degree"
                value={state["degree"]}
                handleChange={changeDegree}
            />
            <Input
                label="Start"
                value={state["start"]}
                handleChange={changeStart}
            />
            <Input
                label="End"
                value={state["end"]}
                handleChange={changeEnd}
            />
            <Input
                label="Location"
                value={state["location"]}
                handleChange={changeLocation}
            />
        </>
    )
}

function Experience(state, setState) {

}

function Input( {label, value, handleChange} ) {
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