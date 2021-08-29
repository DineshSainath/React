import React from "react";

function App() {
  let time = new Date().toLocaleTimeString([], { hour12: false });
  console.log(time);

  let [clock, setTime] = React.useState(time);

  function updateTime() {
    const newTime = new Date().toLocaleTimeString([], { hour12: false });
    setTime(newTime);
  }

  setInterval(updateTime, 1000);

  return (
    <div className="container">
      <h1>{clock}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
