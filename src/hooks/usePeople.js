import axios from "axios";
import { useEffect } from "react";
import { useCommonContext } from "../context/CommonContextProvider";
export function usePeople() {
  let { setPeople, pageNumber, displaySearchResult } = useCommonContext();

  useEffect(() => {
    console.log("Initiating PageNumber", pageNumber);
    let source = axios.CancelToken.source();

    if (!displaySearchResult) {
      (async function () {
        let response;
        //-->loading on

        try {
          response = await axios.get(
            `https://swapi.dev/api/people/?page=${pageNumber}`
          );

          setPeople(response.data.results);
        } catch (error) {
          console.log(error);
        }
        //-->Loading off
      })();
    }

    return () => {
      source.cancel("axios call cancelled");
    };
  }, [pageNumber, displaySearchResult]);
}
