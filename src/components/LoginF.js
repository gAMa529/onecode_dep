import React, { useState, useEffect } from "react";
// import { GoogleLogin, GoogleLogout } from "react-google-login";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom"

function LoginF({ login, error }) {
  const [details, setDetail] = useState({
    name: "",
    email: "enter email",
    password: "enter password",
  });

  const submitHandler = (e) => {
    e.preventDefault();

    login(details);
  };
  return (
    <form className="text-centre" onSubmit={submitHandler}>
      <div id="logo">
        <img src="onecode.png" alt="one code logo" />
      </div>
      <div className="form-inner">
        <h2 id="heading">Log in to your account</h2>
        {error !== "" ? <div className="error">{error}</div> : ""}
        {/* <div className='form-group'>
                <label htmlFor="name">Name:</label>
                <input type="text" name = "name" id = "name" onChange={e => setDetail({...details,name: e.target.value})} value = {details.name}/>
            </div> */}
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="email"
            name="email"
            id="email"
            onClick={() => setDetail({...details, email:""})}
            onChange={(e) => setDetail({ ...details, email: e.target.value })}
            // value={details.email}
            placeholder="Enter Email"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password"></label>
          <input
            type="password"
            name="password"
            id="password"
            onClick={() => setDetail({...details, password:""})}
            onChange={(e) =>
              setDetail({ ...details, password: e.target.value })
            }
            // value={details.password}
            placeholder="password
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            "
          />
        </div>
        <input id="login_button" type="submit" value="Login" />
        <div className="OR">OR</div>
        <div className="alternate">Signin using</div>
      
        <div id = "GLogin">
        <Glogin/>
        </div>
        <p id="p_rec">Click here for password recovery</p>      
        <div id="new_sign">
       Not registered yet? - <Link id="new_sign_link" to="/SignUp">Sign up for free</Link>
       </div>  
      </div>
      
    </form>
  );
}

export default LoginF;


function Glogin(){
   const [ user, setUser] = useState({});

  function handleCallbackResponse(response){
    console.log("encoded jwt id token: "+ response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
    setUser(userObject);
    document.getElementById("signInDiv").hidden = true;
  }

  function handleSignOut(event){
    setUser({});
    document.getElementById("signInDiv").hidden = false;
  }
  useEffect(() =>{
    /* global google */
    google.accounts.id.initialize({
      client_id: "538447011626-l3k0sg7a3igkb3rua72h0aahpccaark2.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {type: "icon", shape:"circle"}
    );
  },[])

  return (
    <div>
     <div id = "signInDiv"></div>
    
     {
      //if sign in sfully
      user &&
      <div>
       
        <img src={user.picture} alt="user"></img>
        <h3>{user.name}</h3>
      </div>
     }
      {
      Object.keys(user).length !== 0 &&
      <button onClick={ (e) => handleSignOut(e)}>sign out</button>

     }
    </div>
  );
}





