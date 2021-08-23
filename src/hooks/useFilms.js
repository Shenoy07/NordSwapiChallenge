import { useEffect, useState } from "react";
import axios from "axios";

export default function useFilms(filmLinks) {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    let source = axios.CancelToken.source();
    (async function () {
      let films = [];
      for (let i = 0; i < filmLinks.length; i++) {
        const response = await axios.get(filmLinks[i]);
        films.push({ name: response.data.title, URL: filmLinks[i] });
      }
      setFilms(() => films);
    })();
    return () => {
      source.cancel("axios call cancelled");
    };
  }, []);
  return films;
}
