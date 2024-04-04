import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const anotherElement = (
  <a href='https://www.youtube.com/'>Click</a>
)

// React does not allow us to create element as we want
const reactElement = {
  type: "a",
  props: {
    href: "https://www.youtube.com/",
    target: "_blank",
  },
  children: "click me to visit youtube",
};

// We have to do it using React.createElement() method where we pass the element as shon below
const reactnewElement = React.createElement(
  'a',
  {
    href: "https://www.youtube.com/",
    target: "_blank",
    style: {
      backgroundColor : "white",
    },
  },
  "Click me",
)

ReactDOM.createRoot(document.getElementById('root')).render(
  reactnewElement
)
