import { useState } from 'react';
import Counter1 from './components/Counter1';
import "./Style.css";
export default function App() {
  const [showB, setShowB] = useState(true);
  return (
    <div>
      <Counter1 showCounter={showB} />
      <label>
        <input
          type="checkbox"
          checked={showB}
          onChange={e => {
            setShowB(e.target.checked)
          }}
        />
        {showB ? "Hide" : "Show"}
      </label>
    </div>
  );
}