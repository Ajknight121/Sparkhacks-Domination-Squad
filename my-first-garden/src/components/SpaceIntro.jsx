import spaceBackground from "../images/space-background.gif";

export default function SpaceIntroduction({next}) {
  return (
    <div className="space-intro relative w-screen h-screen">
      <img
        src={spaceBackground}
        className="background-img absolute top-0 left-0 w-screen h-[130%] object-cover z-0"
      />
      <div className="bg-green-800 w-1/2 h-1/2 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 ">
        <h1 className="text-white text-7xl font-bold pl-8 pt-8">Welcome,</h1>
        <div className="text-white text-6xl font-semibold pl-8">
          I'm Beka, your garden helper
        </div>
        <button onClick={next} className="text-white text-3xl">
            NEXT
        </button>
      </div>
    </div>
  );
}
