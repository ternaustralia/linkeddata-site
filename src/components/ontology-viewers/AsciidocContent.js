import React from "react";

import Asciidoctor from "@asciidoctor/core";

export const AsciidocContent = ({ children }) => {
  const asciidoctor = Asciidoctor();
  const result = asciidoctor.convert(children);
  return <div dangerouslySetInnerHTML={{ __html: String(result) }}></div>;
};
