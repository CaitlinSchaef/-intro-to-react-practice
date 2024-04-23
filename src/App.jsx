import { Link } from "react-router-dom"
import {useState} from "react"

const Title = () => {
  return (
    <h1>
      Would you like to count numbers?
    </h1>
  )
}
 

function App() {
  let [count, setCount] = useState(0)
  
  return (
    <div 
      className="bg-primary h-100 p-5"
      style={{ color: 'white' }}
    >
      {/* this  isn't calling the ContactLink function?*/}
      <div>
      <Link className="text-light" to='/contacts'>Contacts</Link> <br></br>
      <Link className="text-light" to='/about'>About</Link>
      <Title />
      </div>
      <div>
        <button 
        onClick={() => setCount(count+1)}
        >Infinite Count With Me!</button>
        <br></br>
        <h3>{count}</h3>
      </div>
    </div>
  )
}


export default App
