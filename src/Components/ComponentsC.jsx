import { Data , Data1 } from '../App'
import {useContext} from 'react'

const ComponentsC = () => {

    const UserName = useContext(Data);
    const Age = useContext(Data1);

  return (

    <h1>My name is {UserName} and I am {Age} years old. Components C</h1>


    
    // <Data.Consumer> 
    //     { (name) => {
    //         // return <h1>{name}</h1>

    //         return (
    //             <Data1.Consumer>
    //                 {(age) => {
    //                     return <h1>My name is {name} and I am {age} years old. Components C</h1>
    //                 }}
    //             </Data1.Consumer>
    //         )
    //     }}
    //     </Data.Consumer>

  )
}

export default ComponentsC