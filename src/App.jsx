
import Card from './components/Card.jsx'

import './App.css'
function App() {
 
  let myObj1={
    name: "Niketan Sahu",
    age : 25
  }
  let myObj2={
    name: "Ankit Sahu",
    age : 26
  }
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>
       Tailwind Test
      </h1>
      <Card obj={myObj1}></Card>
      <Card obj={myObj2}/>
    </>
  )
}

export default App
