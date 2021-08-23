// This is our custom hook for getting values for the HomeWorld of the characters

import { useEffect, useState } from "react";
import axios from "axios";

export default function useHomeworld(urlForHomeworld) {
  const [homeworld, setHomeworld] = useState({});
  useEffect(() => {
    let source = axios.CancelToken.source();

    (async function () {
      const response = await axios.get(urlForHomeworld);

      let homeworldinState = {};

      homeworldinState = { name: response.data.name, URL: urlForHomeworld };

      setHomeworld(() => homeworldinState);
    })();
    return () => {
      source.cancel("axios call cancelled");
    };
  }, []); // We only want it once
  return homeworld;
}
