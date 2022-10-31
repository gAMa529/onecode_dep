import React , {useState} from "react";
import LoginF from './components/LoginF'
import FlippableCard from "./components/flippable-card";
import { GoogleOAuthProvider } from '@react-oauth/google';

 


function App() {

  // const [ user, setUser] = useState({});

  // function handleCallbackResponse(response){
  //   console.log("encoded jwt id token: "+ response.credential);
  //   var userObject = jwt_decode(response.credential);
  //   console.log(userObject);
  //   setUser(userObject);
  //   document.getElementById("signInDiv").hidden = true;
  // }

  // function handleSignOut(event){
  //   setUser({});
  //   document.getElementById("signInDiv").hidden = false;
  // }
  // useEffect(() =>{
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id: "538447011626-l3k0sg7a3igkb3rua72h0aahpccaark2.apps.googleusercontent.com",
  //     callback: handleCallbackResponse
  //   });

  //   google.accounts.id.renderButton(
  //     document.getElementById("signInDiv"),
  //     {theme: "outline", size: "large"}
  //   );
  // },[])




  const adminUser = {
    email : "randeep@admin",
    password : "r123"
  }

  
  const [user, setUser] = useState({name: "", email: ""});
  const [error, setError] = useState("");

  const login = details =>{
    console.log(details);

    if(details.email === adminUser.email && details.password === adminUser.password){
    console.log("Logged In");
    setUser({
      name: details.name,
      email: details.email
    });
    }
    else{
    console.log("Invalid Details");
    setError("Invalid Details")
    }
  }

  const logout = () =>{
    setUser({name: "", email: ""});
  }

  return(
   
   <div className="App">
     {(user.email !== "")?
     (
       <div className = "welcome">
         <h2>welcome! <span>{user.name}</span></h2>
         <button onClick={logout}>logout</button>
       </div>
     ):(
       <LoginF login = {login} error = {error}/>
     )}
     <div className="Flip">
      <FlippableCard/>
      </div>
     
     {/* <div id = "signInDiv"></div>
    {
     Object.keys(user).length !== 0 &&
     <button onClick={ (e) => handleSignOut(e)}>sign out</button>

    }
    {
     //if sign in sfully
     user &&
     <div>
       <img src={user.picture}></img>
       <h3>{user.name}</h3>
     </div>
    } */}
   </div>
 
 );
  
}

export default App;
