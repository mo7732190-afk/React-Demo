import React from 'react'
import ComponentsB from './ComponentsB'
import { Data1 } from '../App'

const ComponentsA = () => {
    return (
        <Data1.Consumer>
            {(age) => {
                return (
                <div>
                    <h1>My age is {age} Components A</h1>
                    <ComponentsB />
                </div>
                );
            }}
        </Data1.Consumer>
    );
}

export default ComponentsA
