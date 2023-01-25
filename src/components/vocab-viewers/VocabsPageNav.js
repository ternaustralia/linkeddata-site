import React from "react";
import { Link } from "react-router-dom";

export function VocabsPageNav({ currentPage, totalPages }) {
  return (
    <div className="row">
      <div className="col col--6">
        {currentPage != 1 ? (
          <Link to={"?page=" + (currentPage - 1)}>Previous</Link>
        ) : (
          ""
        )}
      </div>
      <div className="col col--6">
        {currentPage != totalPages ? (
          <Link to={"?page=" + (currentPage + 1)} style={{ float: "right" }}>
            Next
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
