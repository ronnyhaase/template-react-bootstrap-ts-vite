import React from 'react'
import { Button, Container } from 'react-bootstrap'

import logo from './logo.svg'

function App() {
  return (
    <main className="h-100 d-flex align-items-center">
      <Container className="text-center">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <div className="p-3 rounded-3 bg-dark">
          <p>This project was bootstrapped with:</p>
          <p>
            <Button
              className="me-1"
              href="https://vitejs.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite
            </Button>
            <Button
              className="me-1"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </Button>
            <Button
              className="me-1"
              href="https://getbootstrap.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Bootstrap
            </Button>
            <Button
              className="me-1"
              href="https://react-bootstrap.github.io/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React-Bootstrap
            </Button>
            <Button
              className="me-1"
              href="https://sass-lang.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              SCSS
            </Button>
            <Button
              className="me-1"
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TypeScript
            </Button>
          </p>
          <p className="text-muted">Learn more about this template in the README</p>
        </div>
      </Container>
    </main>
  )
}

export default App
