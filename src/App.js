import { useState } from "react";
import "./App.css";
import ReactPlayer from "react-player";
import Home from "./Components/Home/Home";


function App() {
  const [vol, changeVol] = useState(1);
  const [play, setplayback] = useState(false);
  const [videostate, setvideostate] = useState("Play");
  return (

    <Home />
    // <div className="App">
    //   <ReactPlayer
    //     url="https://youtu.be/uMuwKRKWSec"
    //     volume={vol}
    //     playing={play}
    //   ></ReactPlayer>

    //   <button
    //     onClick={() => {
    //       setplayback(!play);
    //       setvideostate(play ? "Play" : "Pause");
    //     }}
    //   >
    //     {videostate}
    //   </button>
    // </div>
  );
}

export default App;
