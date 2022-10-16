import React, { useState } from "react"
import { Link } from 'react-router-dom'

function Linking(){
    const[details, setDetails] = useState({
        gfg: "",
        Leet: "",
        hackerearth: "",
        hackerrank: ""
    });

async function pastegfg(){
    const paste = await navigator.clipboard.readText()
    setDetails((details)=>({...details, gfg: paste}))
}
async function pasteleet(){
    const paste = await navigator.clipboard.readText()
    setDetails((details)=>({...details, Leet: paste}))
}
async function pastehackerearth(){
    const paste = await navigator.clipboard.readText()
    setDetails((details)=>({...details, hackerearth: paste}))
}
async function pastehackerrank(){
    const paste = await navigator.clipboard.readText()
    setDetails((details)=>({...details, hackerrank: paste}))
}


    return(
        <div>
           <nav>
            <ul>
                <li>
                <img src="onecode.png" alt="onecode_logo"/>
                </li>
                <li>
                <Link to="/Dashboard">
                <button id="skip_button">Skip for now <img src="Vector_right.png" alt="skip"/> </button>
                </Link>
                </li>
            </ul>
           </nav>
            <p id="cent"> Link your profile and get started</p>
        
           <div className="con1">
               <button
               onClick={pastegfg}
               className="paste"><img src="paste.png" alt="paste"/> Paste</button>       
                <input 
                className="gfg" 
                type="text"
                value={details.gfg}
                placeholder="| Enter Geeks for geeks profile link"
                // onClick={()=>setDetails({...details, gfg:""})}
                onChange={(e) => setDetails({...details, gfg: e.target.value})}     
                />     
            <img id="gfg_logo" src="gfg.png" alt="gfg logo"/> 
            </div>

            <div className="con2">
                <input 
                className="Leet" 
                type="url"
                value={details.Leet}
                placeholder="| Enter Leetcode profile link"
                // onClick={()=>setDetails({...details, Leet:""})}  
                onChange={(e) => setDetails({...details, Leet: e.target.value})}   
                />     
                <img id="leet_logo" src="leet.png" alt="leet code logo"/>      
                <button onClick={pasteleet} className="paste" ><img src="paste.png" alt="paste"/>Paste</button>       
            </div>

            <div className="con3">
                <input 
                className="hackerearth" 
                type="text"
                value={details.hackerearth}
                placeholder="| Enter Hackerearth profile link"
                // onClick={()=>setDetails({...details, hackerearth:""})}
                onChange={(e) => setDetails({...details, hackerearth: e.target.value})}     
                />     
                <img id="hackerearth_logo" src="hackerearth.png" alt="hackerearth logo"/>      
                <button onClick={pastehackerearth} className="paste" ><img src="paste.png" alt="paste"/>Paste</button>       

            </div>

            <div className="con4">
                <input 
                className="hackerrank" 
                type="text"
                value={details.hackerrank}
                placeholder="| Enter HackerRank profile link"
                // onClick={()=>setDetails({...details, hackerrank:""})}  
                onChange={(e) => setDetails({...details, hackerrank: e.target.value})}   
                />     
                <img id="hackerrank_logo" src="hackerrank.png" alt="hackerrank logo"/>      
                <button onClick={pastehackerrank} className="paste" ><img src="paste.png" alt="paste"/>Paste</button>       

            </div>

            <button id="save_pref">Save preferences</button>

           </div>

      
    )
}


export default Linking;
