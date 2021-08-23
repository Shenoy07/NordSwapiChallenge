import axios from "axios";
import { useState, useEffect } from "react";

export default function useSpecies(urlForSpecies) {
  const [species, setSpecies] = useState({});

  useEffect(() => {
    let source = axios.CancelToken.source();
    (async function () {
      const response = await axios.get(urlForSpecies);
      let specie = {};
      specie = { name: response.data.name, URL: urlForSpecies };
      setSpecies(() => specie);
    })();
    return () => {
      source.cancel("axios call cancelled");
    };
  }, []);

  return species;
}
