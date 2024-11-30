import React  from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp()
{
  return(
    <div>
      <h1>custom app !</h1>
    </div>
  )
}
//THINGS IN MYAPP AT THE END OF DAY CONVERTED INTO reactElement  so this should also be run right 
const ReactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click me to visit Google',
};
 const newElement=React.createElement(
  'a',
  {href:'https://google.com',target:'_blank'},
  'click me to visit google'
 )

const anotherElement=(
  <a href="https://google.com" target='_blank'>visit google</a>
)
createRoot(document.getElementById('root')).render(
  
    
    
    
    newElement
 
)
