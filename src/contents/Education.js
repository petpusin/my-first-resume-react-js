import React, { Component } from "react";
import Widecard from "../components/Widecard";

class Education extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Education</h1>
                <Widecard title='Bachelor of Engineering, Faculty of computer engineering' where='Chiang Mai university' from='2017' to='2020' gpa='2.62' />
                <Widecard title='Science and Mathematics Program' where='Phuket Wittayalai School' from='2012' to='2017' gpa='2.33' />
            </div>
        )
    }
}

export default Education;