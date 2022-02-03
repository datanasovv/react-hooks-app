import React from 'react'
import { ThemeContextConsumer } from './ThemeContext'

export default function Navbar() {
  return (
    <ThemeContextConsumer>
      {(context) => (
        <div className='row'>
            <div>React Context App</div>
          {context.theme}
          <button onClick={context.toggleTheme}>Toggle Theme</button>
        </div>
      )}
    </ThemeContextConsumer>
  )
}
