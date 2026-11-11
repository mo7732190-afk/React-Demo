import React from 'react';
import ComponentsC from './ComponentsC'; 
import { Data } from '../App';

const ComponentsB = () => {
    return (
        <Data.Consumer>
            {(name) => {
                return (
                    <div>
                        <h1>My name is {name} Components B</h1>
                        
                        {/* 2. Yahan ComponentC ko render karein */}
                        <ComponentsC /> 
                    </div>
                );
            }}
        </Data.Consumer>
    );
}

export default ComponentsB;