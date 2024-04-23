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
     const ContactLink = () => {
        return (
          <div>
            <Link style={{ color: '#fff' }} to={'/contacts'}>Contacts</Link>
          </div>
        )
       }
  )
}


export default About
