
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Headers from './components/Header';
import Carousels from './components/Carousel';
import Cards from './components/cards';
import Footer from './components/Footer';
import books from './components/data';
import { useState } from 'react';
import Addbook from './components/Addbook';
function App() {
const [listbooks,setlistbooks]=useState(books)
console.log(listbooks);

// const [title,settitle]=useState("")
//  console.log(title)
//   var [counter,setcounter]=useState(0)
// console.log(counter)
  return (
    <div className="App">
      <Headers/>
      <Addbook listbooks={listbooks} setlistbooks={setlistbooks}/>         
      {/* <input type="text" placeholder='put the title of book' onChange={(event)=>settitle(event.target.value)}/>
      <button onClick={()=>setcounter(counter+1)}>click me</button>
      <h1>{counter}</h1> */}
      <Carousels/>
      <Cards wajdi={listbooks} setlistbooks={setlistbooks}/>
      <Footer/>
    </div>
  )
}

export default App
