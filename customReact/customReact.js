const mainContainer = document.getElementById("root");

const reactElement = {
  type: "a",
  props: {
    href: "https://www.youtube.com/",
    target: "_blank",
  },
  children: "click me to visit youtube",
};

function customInput(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type);
    /*
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    */
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]); 
    } 
    mainContainer.appendChild(domElement);
};

customInput(reactElement, mainContainer);