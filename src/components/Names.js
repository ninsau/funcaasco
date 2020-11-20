import React from "react";
const Names = (props) => {
  const { names } = props;
  if (!names || names.length === 0) return <p>No names, sorry</p>;

  return (
    <>
      <div>{JSON.stringify(names)}</div>
    </>
  );
};
export default Names;
