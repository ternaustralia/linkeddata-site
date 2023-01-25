import React from "react";

import { Link } from "react-router-dom";

export function VocabItem({ uri, label, description }) {
  return (
    <div className="card margin-vert--md">
      <div className="card__header">
        <h5>
          <Link to={"?uri=" + uri}>{label}</Link>
        </h5>
      </div>
      {description && (
        <div className="card__body">
          <div>{description}</div>
        </div>
      )}
    </div>
  );
}
