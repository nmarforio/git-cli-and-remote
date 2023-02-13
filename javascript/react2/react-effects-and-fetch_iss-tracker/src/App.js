import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    async function getISSCoords() {
      try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log(data);
        setCoords(data);
      } catch (error) {
        console.log(error);
      }
    }
    let intervalID = setInterval(getISSCoords, 5000);
    return clearInterval(intervalID);
  }, [coords]);
  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => setCoords(coords)}
      />
    </main>
  );
}
