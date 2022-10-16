import { Link } from 'react-router-dom'
function Dashboard(){

    const styleTable = {
        borderBottom:"0.25px solid rgba(0, 0, 0, 0.2",
        borderCollapse:"collapse" ,  
        fontWeight:"900"
    }

    return(
        <div>
            <img id="dash_logo" src="onecode_s.png" alt="onecode logo"/>
            <nav id="dashboard">
                <ul id='dash_nav'>
                    <li>
                       <Link  className='d_link' to="/dashboard">Dashboard</Link>
                    </li>
                    <li>
                        <Link className='d_link' to="/Jobs">Jobs</Link>
                    </li>
                    <li>
                        <Link className='d_link' to="/profile">Hi, Username</Link>
                    </li>
                    <li>
                    </li>
                </ul>
                <img id='profile' src='dash_logo2.png' alt='profile'/>
            </nav>
         
               <div id='r1'> 
            <table id='first_box'>
                <th className='problem_heading'>Problem of the day<img style={{ paddingLeft:"5px" }} src='arrow.png' alt='arrow'/></th>
                <tr className='columns'>
                    <th style={ styleTable} >Sr no.</th>
                    <th style={ styleTable } >Title</th>
                    <th style={ styleTable } >Difficulty</th>
                    <th style={ styleTable } ></th>
                </tr>
                <tr >
                    <td>1.</td>
                    <td>Log sum</td>
                    <td id='yellow'>Medium</td>
                    <td>
                        <button className='b_button'>
                            Solve
                        </button>
                    </td>
                </tr>
                <tr >
                    <td>2.</td>
                    <td>Longest substring with repeating characters</td>
                    <td id='green'>Easy</td>
                    <td>
                        <button className='b_button'>
                            Solve
                        </button>
                    </td>
                </tr>
                <tr >
                    <td>3.</td>
                    <td>Regular expression matching</td>
                    <td id='red'>Hard</td>
                    <td>
                        <button className='b_button'>
                            Solve
                        </button>
                    </td>
                </tr>
            </table>

            <div id='noti'>
                <div style={{ fontSize:"1.3rem" }}>Notification</div>
                <div id='noti_con'>
                <img src='gfg.png' alt='gfg logo'/>
                <p style={{ fontSize:"1.2rem", paddingLeft:"10rem" }}>Hackathon update for Geeksforgeeks</p>
                <div id='counter'>
                    1
                </div>
                </div>
                
            </div>
            
            </div>
           
           <div id='r2'>
            <div id='Mood'>
                <p className='problem_heading'>Mood</p>
                <p style={{ paddingTop:"1rem" ,fontWeight:"bold", marginBottom:"3rem" }} >Lets find some problem you can start solving based on difficulty level!</p>
                <button id='mood_b1'>Easy</button>
                <button id='mood_b2'>Medium</button>
                <button id='mood_b3'>Hard</button>
            </div>

            <table id="upcoming">
                <th className='problem_heading'>Upcoming Contest</th>
                <tr >
                    <th>Sr no.</th>
                    <th>Title</th>
                </tr>
                <tr>
                    <td>1.</td>
                    <td>xyz.hackathon</td>
                    <td><img style={{ width:"2rem" }} src='Leet.png' alt='leet logo'/></td>
                    <td><img src='calander.png' alt='calander logo'/></td>
                    <td><img src='ex_link.png' alt='link logo'/> </td>
                </tr>
                <tr>
                    <td>2.</td>
                    <td>xyz.hackathon</td>
                    <td><img style={{ width:"2rem" }} src='hackerearth.png' alt='leet logo'/></td>
                    <td><img src='calander.png' alt='calander logo'/></td>
                    <td><img src='ex_link.png' alt='link logo'/> </td>
                </tr>
            </table>
            </div>  
         

            <table id='trending'>
                <th className='problem_heading'>Trending problems</th>
                <tr className='columns'>
                    <th>Sr no.</th>
                    <th>Title</th>
                    <th>Difficulty</th>
                    <th>Users</th>
                    <th>Total submissions</th>
                </tr>
                <tr className='tren_row'>
                    <td>1.</td>
                    <td>Log sum</td>
                    <td id='yellow'>Medium</td>
                    <td>1234</td>
                    <td>5678</td>
                    <td>
                        <button className='b_button'>
                            Solve
                        </button>
                    </td>
                </tr>
                <tr className='tren_row'>
                    <td>2.</td>
                    <td>Log sum</td>
                    <td id='yellow'>Medium</td>
                    <td>1234</td>
                    <td>5678</td>
                    <td>
                        <button className='b_button'>
                            Solve
                        </button>
                    </td>
                </tr>
            </table>

           
            </div>
        


        
    )
}
export default Dashboard;