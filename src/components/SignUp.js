import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
// import CardFlip from "./CardFlip"


function SignUp() {
    

    const [details, setDetails] = useState({
        userName: "Enter username",
        org: "Enter organisation",
        email: "Enter email",
        contact: "Enter contact number",
    });
  
    const navigate = useNavigate();

    return (
        // <form className="t-centre" onSubmit={submitHandler}>
        //     <div className="inner_c">
        //         <label htmlFor="username"></label>
              
        //     </div>
        // </form>
        <div className="Signup">
       <img src="onecode.png" alt="one code logo" />
      
      <button id="back_link" onClick={() => navigate(-1)}> <img src="Vector.png" alt="back"/>  Back to login</button>
         <form id="sign">
         
      <p id="heading_sign">Sign Up now for free</p>
     <div id="inputs">
     <input 
      type="text" 
      name="userName" 
      id="uname"
    //   value={details.userName}
    placeholder="Enter username"
      onClick={()=>setDetails({...details, userName:""})}
      onChange={(e) => setDetails({...details, userName: e.target.value})}/>

      <input type="text" 
      name="org" 
      id="org"
    //   value={details.org}
    placeholder="Enter organisation"
      onClick={()=>setDetails({...details, org:""})}
      onChange={(e) => setDetails({...details, org: e.target.value})}/>

      <input type="email" 
      name="email" 
      id="email_sign"
    //   value={details.email}
    placeholder="Enter email"
      onClick={()=>setDetails({...details, email:""})}
      onChange={(e) => setDetails({...details, email: e.target.value})}/>

      <input 
      type='text' 
      name="contact" 
      pattern="[0-9]*" id="pno"
    //   value={details.contact}
    placeholder="Enter contact number"
      onClick={()=>setDetails({...details, contact:""})}
      onChange={(e) => setDetails({...details, contact: e.target.value})}/>
      <button id="sign_butt">Signup</button>
      <Link to="/Linking">skip signup</Link>
     </div>
         </form>
         <div className = "Flip">
       {/* <CardFlip/> */}
     </div>
     
     </div>
    )
} 

export default SignUp;
