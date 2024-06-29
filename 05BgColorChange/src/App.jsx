import { useState } from "react"

export default function App() {
  const [color,setColor]=useState("olive")
  //onClick={ yaha function dena pdta he jo fucntion return kare ya toh function ka ref dedo }
  return (
    <div className="w-full h-screen duration-200 flex items-center justify-center" style={{backgroundColor:color}}>

      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-2 rounded-3xl ">
        
      <button 
          onClick={()=>setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
      <button 
          onClick={()=>setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
      <button 
          onClick={()=>setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
      <button 
          onClick={()=>setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{backgroundColor: "yellow"}}
          >Yellow</button>
          <button 
          onClick={()=>setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "pink"}}
          >Pink</button>
          <button 
          onClick={()=>setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "purple"}}
          >Purple</button>
      </div>
    </div>
  )
}