import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

const anotherElement = (  
    <>
    <h1> Evaluated expresion in 4th parameter entered</h1>
    </>
)
//react wale developers ne render method k liye iss tarha ka object expect kia he-----
const reactElement= React.createElement ('a',{href: 'https://youtube.com', target: '_blank'}, 'click me to visit Youtube', anotherElement )

//by default babble inject krega isko 

ReactDOM.createRoot(document.getElementById('root')).render(
    // App()
    reactElement
    // <App/>
)
