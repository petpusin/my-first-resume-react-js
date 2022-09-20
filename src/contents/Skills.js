import React, { Component } from "react";

class Skills extends Component {
    constructor(props) {
        super(props);

        this.state = {
            'mySkills': ['HTML',
                'CSS',
                'JS',
                'ReactJs',
                'TS',
                'NestJs',
                'HTML',
                'HTML',
                'HTML',
                'HTML',
                'HTML',]
        }
    }

    render() {
        return (
            <div className="condiv skills">
                <h1 className="subtopic">Skills</h1>
                <ul>
                    {this.state.mySkills.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Skills;