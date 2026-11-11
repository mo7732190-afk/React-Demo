import { useState, useEffect, createContext } from 'react'
import Meals from './Components/Meals'
import Calculator from './Components/Calculator'
import ToggleBackgroundColor from './Components/ToggleBackgroundColor'
import HiddenSearchBar from './Components/HiddenSearchBar'
import Form from './Components/Form'












const App = () => {

  return (
    <div>
      <Meals/>
      <Calculator/>
      <ToggleBackgroundColor />
      <br />
      <br /><br />
      <HiddenSearchBar/>
      <br />
      <br />
      <Form/>
    </div>
  )
}











// export const Data = createContext()

// export const Data1 = createContext()


// const App = () => {

//   // const [data2, setData2] = useState([])

//   // useEffect(() => {
//   //   fetch('https://jsonplaceholder.typicode.com/posts')
//   //     .then((response) => {
//   //       if (!response.ok) throw new Error('Failed to fetch posts')
//   //       return response.json()
//   //     })
//   //     .then((posts) => setData2(Array.isArray(posts) ? posts : []))
//   //     .catch((error) => console.error(error))
//   // }, [])

// //   const [data, setData] = useState([])
  
// //   useEffect(() =>{
// //     async function getData(){
// //      const response =  await fetch('https://jsonplaceholder.typicode.com/posts')
// //      const data = await response.json()
// //      if (data && data.length) setData (data)
// //   }
// //     getData()
// // }, [])

// // const name = 'John Doe'
// // const age = 23

//   return (
//     <div>
//       {/* <ul>
//         {data2 && data2.map((item) => (
//           <section key={item.id}>
//             <li>{item.title}</li>
//             <li>Body --- {item.body}</li>
//           </section>
//         ))}
//       </ul>

//       <FetchDataEffect /> */}

// {/* 
//       <Data.Provider value={name}>
//         <Data1.Provider value={age}>
//       <ComponentsA  /> 
//           </Data1.Provider>
//       </Data.Provider> */}

//       {/* {data2.map((item) => <p key={item.id}>{item.title}</p>)} */}

//       <Meals/>

//     </div>
//   )
// }

export default App