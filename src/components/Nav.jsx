import axios from "axios";
import { useCommonContext } from "../context/CommonContextProvider";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
  const cleared = () => toast("Search Cleared");
  const prevPage = () => toast("Oops! always look forward!");
  const nextPage = () => toast("Only 9 pages!");
  const search = () => toast("Enter something to Search!");

  return (
    <div className="PageNavigationAndSearchBar">
      <div className="SearchBar">
        <button
          onClick={() => {
            setDisplaySearchResult(false);
            setName("");
            setPageNumber(1);
            cleared();
          }}
        >
          <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
          />
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
            if (name === "") {
              search();
            } else {
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
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="Previous-and-Next">
        <button
          onClick={() => {
            if (pageNumber > 1) setPageNumber(pageNumber - 1);
            prevPage();
          }}
        >
          <i class="fa fa-chevron-left" aria-hidden="true"></i>
        </button>
        <button
          onClick={() => {
            if (pageNumber < 9) setPageNumber(pageNumber + 1);
            if (pageNumber === 9) {
              nextPage();
            }
          }}
        >
          <i className="fa fa-chevron-right" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
}
