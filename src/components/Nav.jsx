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
      <div className="SearchBar">
        <button
          onClick={() => {
            setDisplaySearchResult(false);
            setName("");
            setPageNumber(1);
            console.log(people);
          }}
        >
          Clear
        </button>
        <input
          placeholder="name of character"
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
          Search
        </button>
      </div>
      <div className="Previous-and-Next">
        <button
          onClick={() => {
            if (pageNumber > 1) setPageNumber(pageNumber - 1);
          }}
        >
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <button
          onClick={() => {
            if (pageNumber < 9) setPageNumber(pageNumber + 1);
          }}
        >
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
