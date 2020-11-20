import axios from "axios";
import React, { useState } from "react";
import Names from "./components/Names";
import withNamesLoading from "./components/withNamesLoading";
import { useFormik } from "formik";
import * as Yup from "yup";

function App() {
  const formik = useFormik({
    initialValues: {
      search: ""
    },
    validationSchema: Yup.object({
      search: Yup.string()
        .required("required")
        .min(6, "min length is 6")
        .max(40, "max length is 40")
    }),
    onSubmit: (values) => {
      console.log(values);
      sendRequest(values.search);
    }
  });

  const ListLoading = withNamesLoading(Names);
  const [names, setNames] = useState();
  const [appState, setAppState] = useState({
    loading: false,
    names: null
  });

  const sendRequest = (query) => {
    let apiUrl = `https://namespy-api-mu7u3ykctq-lz.a.run.app/v1/web_score?input=${query}`;
    // apiUrl = `https://api.github.com/users/ninsau/repos`;

    axios
      .get(apiUrl)
      .then((names) => {
        console.log(names);
        setNames(names);
      })
      .then(() => setAppState({ loading: false }))
      .catch((err) => {
        console.error("ERROR", err);
        setAppState({ loading: false });
      });
  };

  return (
    <div className="App">
      <div className="container"></div>
      <div className="repo-container">
        <ListLoading isLoading={appState.loading} names={names} />
      </div>
      <form onSubmit={formik.handleSubmit}>
        <input
          id="search"
          name="search"
          type="search"
          {...formik.getFieldProps("search")}
        />
        {formik.touched.search && formik.errors.search ? (
          <div>{formik.errors.search}</div>
        ) : null}
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
