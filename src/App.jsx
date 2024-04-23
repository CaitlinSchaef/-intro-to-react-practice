import { Link } from "react-router-dom"
import {useState} from "react"

const Title = () => {
  return (
    <h1>
      Would you like to count numbers?
    </h1>
  )
}

const ContactLink = () => {
  return (
    <div>
      <Link to={'/contacts'}></Link>
    </div>
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
      <Link className="text-light" to='/contacts'>Contacts</Link>
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
  //Why does this do nothing??
  // const ContactLink = () => {
  //   return (
  //     <div>
  //       <Link style={{ color: '#fff' }} to={'/contacts'}>Contacts</Link>
  //     </div>
  //   )
  //  }
   
}


export default App
