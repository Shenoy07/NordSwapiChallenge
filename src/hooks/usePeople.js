import axios from "axios";
import { useEffect } from "react";
import { useCommonContext } from "../context/CommonContextProvider";
export function usePeople(setIsLoading) {
  let { setPeople, pageNumber, displaySearchResult } = useCommonContext();

  useEffect(() => {
    setIsLoading(true); //-->loading on

    let source = axios.CancelToken.source();

    if (!displaySearchResult) {
      (async function () {
        let response;

        try {
          response = await axios.get(
            `https://swapi.dev/api/people/?page=${pageNumber}`
          );

          setPeople(response.data.results);
        } catch (error) {
          console.log(error);
        }
        setIsLoading(false);
        //-->Loading off
      })();
    }

    return () => {
      source.cancel("axios call cancelled");
    };
  }, [pageNumber, displaySearchResult]);
}
