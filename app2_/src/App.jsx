import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/helloworld'
import { HelloWorld } from './components/helloworld'
import { HelloWorld2 } from './components/helloworld2'
import { createElement } from 'react'
import { Info } from './components/info'

function App() {
  // return createElement(HelloWorld2, null) 
  let me = new Info();
  me.setAll('susgoma', '+375 29 111-11-11', '@susogoma12309');
  return (
    <>
      <HelloWorld2></HelloWorld2>
      <HelloWorld></HelloWorld>
      <me.render></me.render>
    </>
  )
}

export default App
