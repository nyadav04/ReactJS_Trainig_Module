import React, { useState } from "react";

function withSearch(WrappedComponent) {
  return function () {
    const [searchTerm, setSearchTerm] = useState("");
    return (
      <div>
          <div className="input_box">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Type to search any item"
        />
        </div>
        <WrappedComponent searchTerm={searchTerm} />
      </div>
    );
  };
}

export default withSearch;