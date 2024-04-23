import { Link } from "react-router-dom"





function About() {
  return (
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link> <br></br>
      <Link className="text-primary" to='/contacts'>Contacts</Link> <br></br>
      <h1>About Page</h1>
    </div>
  )
}


export default About
