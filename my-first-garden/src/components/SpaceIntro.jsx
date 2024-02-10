import spaceBackground from "../images/space-background.gif";
import { useState, useEffect } from "react";
import {NorthernIllinoisplants , CentralIllinoisplants, SouthernIllinoisplants } from "../plantData";
export default function SpaceIntroduction({
  username,
  step,
  prev,
  next,
  setUsername,
  currZone,
  setZone
}) {
  const [head, setHead] = useState("Welcome,");
  const [sub, setSub] = useState("I'm Beka, your garden helper");
  const handleUsernameInput = (event) => {
    setUsername(event.target.value);
  };
  function handleLocation(zone) {
    setZone(zone)
  }

  useEffect(() => {
    if (step === 0) {
      setHead("Welcome,");
      setSub("I'm BeKa, your garden helper");
    } else if (step === 1) {
      setHead("Alright, let's get started");
      setSub("What is your name?");
    } else if (step === 2) {
      setHead(`Alright ${username}`);
      setSub("Where is your garden?");
    } else if (step === 3) {
      setSub("How big is your garden?");
    } else if (step === 4) {
      setSub("Is your garden obscured?");
    } else if (step === 5) {
      setHead("We're ready");
      setSub("");
    }
    // Add more conditions here for other steps
  }, [step, currZone]);

  return (
    <div className="space-intro relative w-screen h-screen">
      <img
        src={spaceBackground}
        className="background-img absolute top-0 left-0 w-screen h-[130%] object-cover z-0"
      />
      <div className="bg-green-800 w-1/2 h-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ">
        <h1 className="text-white text-7xl font-bold pl-8 py-8">{head}</h1>
        <div className="text-white text-5xl font-semibold pl-8">{sub}</div>
        <div className="p-20">
        {step == 1 && (
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={handleUsernameInput}
          />
        )}
        {step == 2 && (
          <div className="radio-buttons">
            <label>
              <input
                type="radio"
                name="direction"
                value="north"
                checked={currZone == NorthernIllinoisplants}
                onChange={() => handleLocation(0)}
              />
              My garden is in Northern Illinois
            </label>
            <br/>
            <label>
              <input
                type="radio"
                name="direction"
                value="south"
                checked={currZone == SouthernIllinoisplants}
                onChange={() => handleLocation(2)}
              />
              My garden is in Southern Illinois
            </label>
            <br/>
            <label>
              <input
                type="radio"
                name="direction"
                value="center"
                checked={currZone == CentralIllinoisplants}
                onChange={() => handleLocation(1)}
              />
              My garden is in Central Illinois
            </label>
          </div>
        )}

        {step == 3 && (
          <div className="dimensions-inputs">
            <label htmlFor="length">Length (ft):</label>
            <input
              id="length"
              type="number"
              min="0"
              step="any"
              placeholder="Enter length in feet"
              // Add onChange handler to update state if necessary
            />
            <br/>
            <div className="p-2"></div>
            <label htmlFor="width">Width (ft):</label>
            <input
              id="width"
              type="number"
              min="0"
              step="any"
              placeholder="Enter width in feet"
              // Add onChange handler to update state if necessary
            />
          </div>
        )}

        {step == 4 && (
          <div className="radio-buttons">
            <label>
              <input
                type="radio"
                name="direction"
                value={3}
              />
              {"Nope! lots of sunlight (>12hr)"}
            </label>
            <br/>
            <label>
              <input
                type="radio"
                name="direction"
                value={2}
              />
              {"I have a tree or two (6 - 12hr)"}
            </label>
            <br/>
            <label>
              <input
                type="radio"
                name="direction"
                value={1}
              />
              There are many shadows {"(< 6 hrs)"}
            </label>
          </div>
        )}
        </div>
        
        {step != 0 && (
        <button
          onClick={prev}
          className="text-white text-3xl absolute bottom-12 left-12"
        >
          PREVIOUS
        </button>)
        }
        
        <button
          onClick={next}
          className="text-white text-3xl absolute bottom-12 right-12"
        >
          NEXT
        </button>
      </div>
    </div>
  );
}
