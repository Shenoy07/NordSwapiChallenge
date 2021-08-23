import axios from "axios";
import { useState, useEffect } from "react";

export default function useVehicles(urlForVehicle) {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    let source = axios.CancelToken.source();
    (async function () {
      let vehicles = [];
      for (let i = 0; i < urlForVehicle.length; i++) {
        const response = await axios.get(urlForVehicle[i]);
        vehicles.push({ name: response.data.name, URL: urlForVehicle[i] });
      }
      setVehicles(() => vehicles);
    })();
    return () => {
      source.cancel("axios call cancelled");
    };
  }, []);
  return vehicles;
}
