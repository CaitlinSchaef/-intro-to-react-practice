// Add a link to Contacts from App and About.  
// Add a link back to home screen from Contacts.  
// Add a component on Contacts with the names of everyone in your cohort. 

import { Link } from "react-router-dom"
// import {useState} from "react" use this if you use state


function ContactLink() {
 return (
   <div className="p-5">
     <Link to='/'>{'<- Back'}</Link>
     <h1>Contact Page</h1>
   </div>
 )
}

// the link to = '/' the slash is the home page app 


export default ContactLink
