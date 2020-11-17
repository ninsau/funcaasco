import axios from "axios";
import React, { useEffect, useState } from "react";
import Names from "./components/Names";
import withNamesLoading from "./components/withNamesLoading";

function App() {
  const ListLoading = withNamesLoading(Names);
  const [search, setSearch] = useState("");
  const [appState, setAppState] = useState({
    loading: false,
    names: null
  });

  const sendRequest = (query) => {
    const apiUrl = `https://namespy-api-mu7u3ykctq-lz.a.run.app/v1/web_score?input=${query}`;

    setAppState({ loading: true });

    axios
      .get(apiUrl)
      .then((names) => {
        const allnames = names.data;
        setAppState({ loading: false, names: allnames });
        console.log(allnames);
      })
      .catch((err) => console.error("ERROR", err));
  };

  const handleInput = (event) => {
    setSearch(event.target.value);
  };

  const handleSearch = (event) => {
    event.preventDefault();


    sendRequest(search);
  };

  return (
    <div className="App">
      <div className="container"></div>
      <div className="repo-container">
        <ListLoading isLoading={appState.loading} names={appState.names} />
      </div>
      <h1>{search}</h1>
      <form onSubmit={handleSearch}>
        <input type="search" value={search} onChange={handleInput} />
        <button type="submit">Search</button>
      </form>
      <footer>
        <div className="footer">
          Built{" "}
          <span role="img" aria-label="love">
            💚
          </span>{" "}
          with by Ninsau
        </div>
      </footer>
    </div>
  );
}
export default App;
