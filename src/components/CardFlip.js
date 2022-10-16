import ReactCardFlip from "react-card-flip";
import { useState } from "react"


const CardFlip = () =>{
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
          <div id="p1">
          <button className="book_button" onClick={handleClick}></button>
          </div>
  
        <div id="p2">
          <button className="book_button" onClick={handleClick}></button>
        </div>
  
        
      </ReactCardFlip>
    )
  };

  export default CardFlip;
  