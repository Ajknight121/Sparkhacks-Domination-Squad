import { useState } from "react";
import spaceBackground from "./images/space-background.gif";
import rainImg from "./images/rainhappy-blue.png";
import wateringCanImg from "./images/clip-art-watering-can.png";
import WeatherDay from "./components/weatherDay";
import "./App.css";

function App() {
  const [rain, setRain] = useState(true);
  return (
    <>
      {/* <div className='container w-full h-screen relative'>
        <img src={spaceBackground} className="background-img absolute top-0 left-0 w-full h-full object-cover"/>
      </div> */}
      <div className="dashboard w-full h-screen bg-amber-700">
        <div className="relative w-full h-14">
          <img
            src={spaceBackground}
            className="background-img top-0 left-0 w-full h-full object-cover"
          />
          <div className="text-white text-3xl absolute top-1">
            <h1>My garden dashboard</h1>
          </div>
        </div>
        <div className="weather bg-cyan-300 p-5">
          <h2 className="bg-[#d3fff4] text-2xl font-bold p-10">
            This Week's Weather
          </h2>
          <div className="grid grid-flow-row grid-cols-7">
            <WeatherDay day="Saturday" rain={false} />
            <WeatherDay day="Sunday" rain={true} />
            <WeatherDay day="Monday" rain={true} />
            <WeatherDay day="Tuesday" rain={false} />
            <WeatherDay day="Wednesday" rain={true} />
            <WeatherDay day="Thursday" rain={false} />
            <WeatherDay day="Friday" rain={false} />
            
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
