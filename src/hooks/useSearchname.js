import axios from "axios";
import { useCommonContext } from "../context/CommonContextProvider";
import { useEffect } from "react";
export function useSearchName(nameToSearch) {
  let { people, setPeople } = useCommonContext();

  useEffect(() => {
    (async function () {
      let response;

      try {
        response = await axios.get(
          `https://swapi.dev/api/people/?search=${nameToSearch}`
        );
        setPeople(response);
      } catch (error) {
        console.err(error);
      }
    })();
  }, [setPeople, nameToSearch]);
  return people;
}
