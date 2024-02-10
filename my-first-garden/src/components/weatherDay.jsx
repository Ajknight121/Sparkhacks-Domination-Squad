
import rainImg from "../images/rainhappy-blue.png";
import wateringCanImg from "../images/clip-art-watering-can.png";

export default function WeatherDay({day,rain}) {
  return (
    <div className="weather-day">
      <div className="text-center text-xl text-white">{day}</div>
      <div className="bg-cyan-400">
      <img src={rain ? rainImg : wateringCanImg} width={"280px"} height={"280px"} />

      </div>
    </div>
  );
}
