import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import App from '../src/components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
   <App />,
    document.body.appendChild(document.createElement('div')),
  )
})

//<%= java_script_pack_tag 'hello_react' %>