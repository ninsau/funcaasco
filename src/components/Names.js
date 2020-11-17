import React from "react";
const Names = (props) => {
  const { names } = props;
  if (!names || names.length === 0) return <p>No names, sorry</p>;

  return (
    <ol>
      {/* {names.map((info) => {
        return (
          <li key={info.id} className="list">
            <span className="repo-text">{info.name} </span>
          </li>
        );
      })} */}
    </ol>
  );
};
export default Names;
