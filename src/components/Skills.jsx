import React from 'react'
import { skills } from '../data';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Skills() {
    const value = 0.66;

    return (
        <>
            {skills.map(({ title, percentage }, index) => {
                return (
                    <div className="progress__box" key={index}>
                        <div className="progress__circle mx-auto">
                        {/* <CircularProgressbar value={value} maxValue={1} text={`${value * 100}%`} /> */}
                        {/* or */}
                        <CircularProgressbar strokeWidth={7.5} text={`${percentage}%`} value={percentage} />
                        </div>

                        <div className="skills_title text-center"> {title}</div>
                    </div>

                )
            })}
        </>
    )
}

export default Skills
