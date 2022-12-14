import { useState } from "react";
import Counting from "./Counting";
import Scrolling from "./Scrolling";

function App() {
  const [scrollingVisible, setScrollingVisible] = useState(true);

  return (
    <div style={{minHeight:1500}} >
        <Counting />
        <hr></hr>
        <button
          onClick={ () =>{
            setScrollingVisible(!scrollingVisible)
          }}
        >
          Change scrolling visible
        </button>
        {scrollingVisible && <Scrolling />}
    </div>
  );
}

export default App;
