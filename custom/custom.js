function customRender(reactElement, container){
const domElement = document.createElement(reactElement.type)
domElement.innerHTML = reactElement.children
document.setAttribute('href', reactElement.props.href)
document.setAttribute("target", reactElement.props.target);
container.appendChild(domElement)
}

const reactElement = {
    type: 'a',
    props:{
        href:"https://google.com",
        target:'_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector("#root")
customRender(reactElement, mainContainer)