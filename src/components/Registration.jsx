 import { useState } from "react"

const Registration = () => {
    
    return (
        <div className="registraion">
        <h1>Registration Form</h1>
       <form action="">
          <label htmlFor="">
           <p> Full Name:</p>
            <input type="text" placeholder="Full Name" />
          </label><br />
          <label htmlFor="">
           <p> Email:</p>
            <input type="email" placeholder="Email" />
          </label> 
          <label htmlFor="">
           <p> Phone Number:</p>
            <input type="tel" placeholder="Phone Number" id="" />
          </label>
          <label htmlFor="">
           <p> Password:</p>
            <input type="password" placeholder="Password" />
          </label>

          <button type="submit">Register</button>
        </form>
        </div>
    )
}
export default Registration