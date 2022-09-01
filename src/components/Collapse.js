import React, { useState } from "react";
import { Collapse as ReactstrapCollapse } from "reactstrap";

export function Collapse({ id, label, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <h3 className="padding-vert--md">
        {label}
        <button
          className="button button--outline button--secondary margin-left--sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Collapse" : "Expand"}
        </button>
      </h3>
      <ReactstrapCollapse id={id} isOpen={isOpen}>{children}</ReactstrapCollapse>
    </>
  );
}
