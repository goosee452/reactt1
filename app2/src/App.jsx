import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './components/helloworld'
import { HelloWorld } from './components/helloworld'
import { HelloWorld2 } from './components/helloworld2'
import { createElement } from 'react'
import { Info } from './components/info'
import { City } from './components/cityInfo';

function App() {
  // return createElement(HelloWorld2, null) 
  let me = new Info();
  me.setAll('susgoma', '+375 29 111-11-11', '@susogoma12309');
  let city = new City;
  city.setInfo('Minsk', 'Belarus');
  city.setSrc('../src/assets/Lady_Liberty_under_a_blue_sky_(cropped).jpg', '../src/assets/unnamed.jpg', '../src/assets/Susremaster.webp');
  console.log(city.imgSrc[0]);
  return (
    <>
      <HelloWorld2></HelloWorld2>
      <HelloWorld></HelloWorld>
      <me.render></me.render>
      <city.render></city.render>
    </>
  )
}

export default App
