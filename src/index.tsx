import * as React from 'react'
import { render } from 'react-dom'
import './declarations'
import { App } from './App';

const container = document.createElement('div')
document.body.appendChild(container)

render(<App/>, container)
