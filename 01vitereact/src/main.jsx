import { StrictMode } from 'react'
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
//THINGS IN MY APP AT THE END OF DAY CONVERTED INTO reactElement  so this should also be run right 
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank',
  },
  children: 'Click me to visit Google',
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MyApp />
  </StrictMode>,
)
