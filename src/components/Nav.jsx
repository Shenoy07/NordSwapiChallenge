import axios from "axios";
import { useCommonContext } from "../context/CommonContextProvider";
import { useState } from "react";

export default function Nav() {
  let {
    people,
    setPeople,
    pageNumber,
    setPageNumber,
    displaySearchResult,
    setDisplaySearchResult
  } = useCommonContext();
  let [name, setName] = useState("");

  console.log(people);
  console.log(pageNumber);
  console.log(displaySearchResult);

  return (
    <div className="PageNavigationAndSearchBar">
      <div>
        <button
          onClick={() => {
            setDisplaySearchResult(false);
            setName("");
            setPageNumber(1);
            console.log(people);
          }}
        >
          ClearSearch
        </button>
        <input
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setDisplaySearchResult(true);
            (async function () {
              let response;

              try {
                response = await axios.get(
                  `https://swapi.dev/api/people/?search=${name}`
                );
                setPeople(response.data.results);
              } catch (error) {
                console.error(error);
              }
            })();
          }}
        >
          Go
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            if (pageNumber > 1) setPageNumber(pageNumber - 1);
          }}
        >
          previousPage
        </button>
        <button
          onClick={() => {
            if (pageNumber < 9) setPageNumber(pageNumber + 1);
          }}
        >
          nextPage
        </button>
      </div>
    </div>
  );
}
