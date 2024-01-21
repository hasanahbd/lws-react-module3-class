import { useState } from 'react';
export default function Counter({showCounter=true}) {
    
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);
  
    let className = 'counter';
    if (hover) {
      className += ' hover';
    }
    if(showCounter){
      className += ' show';
    }else{
        className += ' hide';
    }
  
    return (
      <div
        className={className}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}
      >
        <h1>{score}</h1>
        <button onClick={() => setScore(score + 1)}>
          Add one
        </button>
      </div>
    );
  }