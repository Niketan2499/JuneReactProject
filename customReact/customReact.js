const mainContainer=document.querySelector('#root')

customRender(reactElement, mainContainer)

//object formation

const reactElement = {
  type:'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'
}

function customRender(reactElement, container){
  const domElement = document.createElement(reactElement.type)
  // domElement.innerHTML=reactElement.children
  // domElement.setAttribute('href',reactElement.props.href)
  // domElement.setAttribute('target',reactElement.target)
  // Set the innerHTML or textContent to the children
  if (typeof reactElement.children === 'string') {
    domElement.textContent = reactElement.children;
  }
  for(const prop in reactElement.props){
    if (prop==='children') continue;
    domElement.setAttribute(prop,reactElement.props[prop])
  }
  container.appendChild(domElement)
}






