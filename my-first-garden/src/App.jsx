import { useState } from "react";
import spaceBackground from "./images/space-background.gif";
import rainImg from "./images/rainhappy-blue.png";
import wateringCanImg from "./images/clip-art-watering-can.png";
import cornerVine from "./images/vines-corner.png";
import WeatherDay from "./components/weatherDay";
import "./App.css";
import PlantOption from "./components/PlantOption";
import {NorthernIllinoisplants , CentralIllinoisplants, SouthernIllinoisplants } from "./plantData.js";
import testWeatherMiddleJSON from "./components/testWeatherMiddle.JSON";
import testWeatherNorthJSON from "./components/testWeatherNorth.JSON";
import testWeatherSouthJSON from "./components/testWeatherSouth.JSON";

let testWeatherNorth = JSON.parse(testWeatherNorthJSON);
let testWeatherSouth = JSON.parse(testWeatherSouthJSON);
let testWeatherMiddle = JSON.parse(testWeatherMiddleJSON);
var regionWeather;


function chooseZone (loc_choice) {
  if (loc_choice == 0){
  const currzone = NorthernIllinoisplants;
  regionWeather = testWeatherNorth;
  }
  else if (loc_choice == 1){
    const currzone = CentralIllinoisplants;
    regionWeather = testWeatherMiddle;
    }
  else if (loc_choice == 2){
    const currzone = SouthernIllinoisplants;
    regionWeather = testWeatherSouth;
    }
}
const plants = [
  {
    plantName: "pumpkin",
    info: ["takes up 3ft", "requires 1gal of water per day"],
    pests: ["caterpillers", "Rodents"],
  },
  {
    plantName: "Squash",
    info: ["SQUASHING", "requires 8888gal of water per day"],
    pests: ["Rodents"],
  },
  {
    plantName: "Bell Pepper",
    info: ["takes up 3ft", "requires 1gal of water per day"],
    pests: ["caterpillers", "Rodents"],
  },
];

function App() {
  const [rain, setRain] = useState(true);
  const [selected, setSelected] = useState(false);

  const [selectedOption, setSelectedOption] = useState(0);

  // Function to handle selection
  const handleSelect = (index) => {
    setSelectedOption(index);
  };

  return (
    <>
      {/* <div className='container w-full h-screen relative'>
        <img src={spaceBackground} className="background-img absolute top-0 left-0 w-full h-full object-cover"/>
      </div> */}
      <div className="dashboard w-full h-screen bg-amber-700">
        <div className="relative w-full h-20">
          <img
            src={spaceBackground}
            className="background-img top-0 left-0 w-full h-full object-cover"
          />
          <div className="text-white text-3xl absolute top-4 left-5">
            <h1>My garden dashboard</h1>
          </div>
        </div>
        <div className="weather bg-cyan-300 p-5">
          <h2 className="bg-[#d3fff4] text-2xl font-bold p-10">
          This week&apos;s watering forecast
          </h2>
          <div className="grid grid-flow-row grid-cols-7">
            <WeatherDay day="Today" rain={regionWeather.list[0].weather.main == "deeznut" ? true : false} />
            <WeatherDay day="Tomorrow" rain={true} />
            <WeatherDay day="2/12" rain={true} />
            <WeatherDay day="2/13" rain={false} />
            <WeatherDay day="2/14" rain={true} />
            <WeatherDay day="2/15" rain={false} />
            <WeatherDay day="2/16" rain={false} />
          </div>
        </div>
        <div className="my-plants bg-amber-500 h-2/3 relative">
          <img
            src={cornerVine}
            className="absolute bottom-0 left-[-27px] overflow-hidden pointer-events-none"
            width={"25%"}
          />
          <img
            src={cornerVine}
            className="absolute top-0 right-0 transform rotate-180 pointer-events-none"
            width={"25%"}
          />

          <div className="weather p-5">
            <h2 className="text-2xl font-bold p-10 bg-green-500">
              Your plants
            </h2>
            <div className="p-5">
              <div className="plants flex flex-row gap-3 w-fit pr-20 bg-yellow-400 p-5">
                {currzone.map((plant, index) => (
                  <PlantOption
                    key={index}
                    plantName={plant.plantName}
                    selected={selectedOption === index}
                    onClick={() => handleSelect(index)}
                  />
                ))}
              </div>
              <div className="plant-detail p-8 bg-yellow-400 grid grid-flow-row grid-cols-3">
                <div className="general p-7 m-2 bg-cyan-200">
                  <h2 className="p-2 text-xl">🎓General Info</h2>
                  <hr />
                  <div className="general-content text-lg">
                    {currzone[selectedOption].info.map((text, index) => (
                      <li key={index}>{text}</li>
                    ))}
                    This plant needs XX liters amount of water
                  </div>
                </div>
                <div className="general p-7 m-2 bg-green-200">
                  <h2 className="p-2 text-xl">🌱Planting Info</h2>
                  <hr />
                  <div className="planting-content text-lg">
                    To plant dig a X in hole
                  </div>
                </div>
                <div className="general p-7 m-2 bg-red-200">
                  <h2 className="p-2 text-xl">🐛Pest Info</h2>
                  <hr />
                  <div className="pest-content text-lg">
                    Be aware of rodents
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
