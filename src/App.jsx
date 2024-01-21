import { useState } from 'react';
import Counter from './components/Counter';
import "./Style.css";
export default function App() {
  const [isPlayerA, setIsPlayerA] = useState(true);
  return (
    <div>

      {isPlayerA ? (
        <Counter  person="Taylor" />
      ) : (
        <Counter  person="Sarah" />
      )}
          {/* two components are same in the tree, just change of props, so component will not rerender*/}

      {isPlayerA ? (
        <Counter key="t" person="Taylor" />
      ) : (
        <Counter key="s" person="Sarah" />
      )}
      {/* by passing the key,  */}

      {isPlayerA && <Counter  person="Taylor" />}
      {!isPlayerA && <Counter  person="Sarah" />}
      {/* this will create new component in render tree each time */}


      <button onClick={() => {
        setIsPlayerA(!isPlayerA);
      }}>
        Next player!
      </button>
    </div>
  );
}