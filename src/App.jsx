import { Link } from "react-router-dom"
import {useState} from "react"

const Title = () => {
  return (
    <h1>
      Hello World!
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
      <div>
      <Link className="text-light" to='/about'>About</Link>
      <Title />
      </div>
      <div>
        <button 
        onClick={() => setCount(count+1)}
        >Count With Me</button>
        {count}
      </div>

    </div>
  )
}


export default App
