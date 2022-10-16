import { useState } from "react"

function Quiz(){

    const [details, setDetails] = useState({
       Q_type: "", 
       Q_name: "",
       Q_timer: "",
       Q_des: "",
       Q_cat: ""
    });
    return(
        <div id="q_master">
            <header>
            <img src="quiz1.png" alt=""/>
            <h1>Create New Quiz</h1>
            </header>

            <div id="body">
            <aside>
                <ul>
                    <li className="aside">
                        <img src="quiz2.png" alt=""/>
                        <p>Quiz Edit</p>
                    </li>
                    <li className="aside">
                        <img src="quiz2.png" alt=""/>
                        <p>Data</p>
                    </li>
                    <li className="aside">
                        <img src="quiz2.png" alt=""/>
                        <p>Media</p>
                    </li>
                    <li className="aside">
                        {/* <img src="quiz3.png" alt=""/> */}
                        line ayegi yaha
                    </li>
                    <li className="aside">
                        <img src="quiz2.png" alt=""/>
                        <p>Options</p>
                    </li>
                    <li className="aside">
                        <img src="quiz2.png" alt=""/>
                        <p>Finish Up</p>
                    </li>
                </ul>
            </aside>
            <section>
                <label for="Q_type">Quiz Type: </label>
                <input type="text" id="Q_type"
                      onChange={(e) => setDetails({...details, Q_type: e.target.value})}/>
                      
                
                
                <label for="Q_name">Quiz Name: </label>
                <input type="text" id="Q_name"
                                      onChange={(e) => setDetails({...details, Q_name: e.target.value})}/>


                
                <label for="Q_timer">Quiz Timer: </label>
                <input type="time" id="Q_timer"
                                      onChange={(e) => setDetails({...details, Q_timer: e.target.value})}/>


                
                <label for="Q_des">Description: </label>
                <input type="text" id="Q_des"
                                      onChange={(e) => setDetails({...details, Q_des: e.target.value})}/>


                
                <label for="Q_cat">Category: </label>
                <input type="text" id="Q_cat"
                                      onChange={(e) => setDetails({...details, Q_cat: e.target.value})}/>

                <input type="submit" value="save"/>

                
            </section>
            </div>
        </div>
    )
}

export default Quiz;