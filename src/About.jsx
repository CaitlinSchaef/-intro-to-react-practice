import { Link } from "react-router-dom"

// import About from './About'
import App from './App'
import ErrorPage from './ErrorPage'
import Contacts from './Contacts'


function About() {
  return (
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
      <h1>About Page</h1>
    </div>
  )
}


export default About
