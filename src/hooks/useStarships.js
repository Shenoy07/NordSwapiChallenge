import axios from "axios";
import { useEffect, useState } from "react";

export default function useStarships(urlForStarship) {
  const [starships, setStarships] = useState([]);

  useEffect(() => {
    let source = axios.CancelToken.source();
    (async function () {
      let starships = [];

      for (let i = 0; i < urlForStarship.length; i++) {
        const response = await axios.get(urlForStarship[i]);
        starships.push({ name: response.data.name, URL: urlForStarship[i] });
      }
      setStarships(() => starships);
    })();
    return () => {
      source.cancel("axios call cancelled");
    };
  }, []);
  return starships;
}
