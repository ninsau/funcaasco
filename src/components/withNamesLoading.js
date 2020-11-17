import React from "react";

function WithNamesLoad(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <p style={{ textAlign: "center", fontSize: "30px" }}>
        Please wait. The magic is happening...
      </p>
    );
  };
}
export default WithNamesLoad;
