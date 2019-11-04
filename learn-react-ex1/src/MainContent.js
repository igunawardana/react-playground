import React from "react"

function MainContent() {

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay
    if (hours < 12) {
        timeOfDay = "Morning"
    } else if (hours >= 12 && hours < 17) {
        timeOfDay = "Afternoon"
    } else {
        timeOfDay = "Night"
    }
    return (
        <div>
            <h2>Good {timeOfDay} </h2>
            <h5>Select from below</h5>
            <input type="checkbox" value="Sinhala" /> Sinhala <br />
            <input type="checkbox" value="Spain" /> Spain <br />
            <input type="checkbox" value="German" /> German <br />
            <input type="checkbox" value="English" /> English <br />
        </div>
    )
}

export default MainContent