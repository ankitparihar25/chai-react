
function customRender(reactElement,container){
  /*  const domElement=document.createElement
    (reactElement.type)
    domElement.innerHTML=reactElement.Children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    container.appendChild(domElement)
}

const reactElement={
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    Children:'click me to visit google'
    */
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
  
    for (const prop in reactElement.props) {
      domElement.setAttribute(prop, reactElement.props[prop]);
    }
  
    container.appendChild(domElement);
  }
  
  const reactElement = {
    type: 'a',
    props: {
      href: 'https://google.com',
      target: '_blank',
    },
    children: 'Click me to visit Google',
  };
  
  const mainContainer = document.querySelector('#root');
  customRender(reactElement, mainContainer);

  //In this case, the rendered output will be:
 // <a href="https://google.com" target="_blank">Click me to visit Google</a>

 //This would appear inside the element with the ID root in the webpage, and the text
 // "Click me to visit Google" will be clickable, opening Google in a new tab.








