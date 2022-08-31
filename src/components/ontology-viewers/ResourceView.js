import React from "react";
import useSWR from "swr";
import CodeBlock from "@theme/CodeBlock";
import { Table } from "react-bootstrap";

import { fetcher } from "../../data/dataFetcher";
import { getFetchOptions, getRdfsLabel } from "../../data/utils";
import IRIField from "../IRIField";
import ClassConstraints from "./ClassConstraints";
import styles from "./viewer.module.css";
import { AsciidocContent } from "./AsciidocContent";

function ResourceLabel({ children }) {
  return <h1>{children}</h1>;
}

function SuperClassConstraints({ resourceUri, settings }) {
  const { endpoint, queries } = settings;
  const sparqlQuery = queries.getSuperClasses(resourceUri);
  const fetchOptions = getFetchOptions(sparqlQuery);
  const { data, error } = useSWR(
    resourceUri ? [endpoint, JSON.stringify(fetchOptions)] : null,
    fetcher
  );

  if (error)
    return (
      <tr>
        <td>Failed to load</td>
      </tr>
    );
  if (!data && !resourceUri)
    return (
      <tr>
        <td>No class selected</td>
      </tr>
    );
  if (!data)
    return (
      <tr>
        <td>Loading...</td>
      </tr>
    );

  const superclasses = data.results.bindings;
  {
    /* <ClassConstraints resourceUri={resourceUri} settings={settings} */
  }
  return (
    <>
      {superclasses.map((superclass) => (
        <ClassConstraints
          key={superclass.superclass.value}
          resourceUri={superclass.superclass.value}
          settings={settings}
        />
      ))}
    </>
  );
}

export default function ResourceView({ resourceUri, settings }) {
  const { endpoint, queries } = settings;
  const sparqlQuery = queries.getResource(resourceUri);
  const fetchOptions = getFetchOptions(sparqlQuery);
  const { data, error } = useSWR(
    resourceUri ? [endpoint, JSON.stringify(fetchOptions)] : null,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data && !resourceUri) return <div>No class selected</div>;
  if (!data) return <div>Loading...</div>;

  const label = getRdfsLabel(data);

  // TODO: Refactor this property values into its own component.
  // TODO: Render a different component based on the value.type.
  //   E.g., IRI, String (lang), Number, Bool, etc.
  const propertyValues = {};
  for (const row of data.results.bindings) {
    const p = row.p.value;
    const o = row.o;
    if (propertyValues.hasOwnProperty(row.p.value)) {
      propertyValues[p].push(o);
    } else {
      propertyValues[p] = [o];
    }
  }

  let rdfTypes = [];
  const properties = [];
  for (const property in propertyValues) {
    properties.push({
      property: property,
      values: propertyValues[property],
    });

    if (property === "http://www.w3.org/1999/02/22-rdf-syntax-ns#type") {
      rdfTypes = rdfTypes.concat(propertyValues[property]);
    }
  }

  return (
    <>
      <div className="margin-left--md padding--sm">
        <span
          className={styles.badge + " badge badge--primary"}
          onClick={() =>
            window
              .open(
                `https://lodview-proxy.deta.dev/api/v1/lodview?IRI=${resourceUri}&sparql=${settings.endpoint}&output=text/turtle`,
                "_blank"
              )
              .focus()
          }
        >
          View as Turtle
        </span>
        <ResourceLabel>{label ? label : resourceUri}</ResourceLabel>
        <CodeBlock>{resourceUri}</CodeBlock>

        {properties.map((property) => (
          <div key={property.property}>
            <strong>
              <IRIField value={property.property} settings={settings} />
            </strong>
            <ul>
              {property.values.map((value) => {
                if (value.type === "uri") {
                  return (
                    <li key={value.value}>
                      <IRIField
                        key={value.value}
                        value={value.value}
                        settings={settings}
                      />
                    </li>
                  );
                } else {
                  return (
                    <li key={value.value}>
                      <AsciidocContent>{value.value}</AsciidocContent>
                    </li>
                  );
                }
              })}
            </ul>
          </div>
        ))}

        {properties.length > 0 ? "" : "Not found."}

        {rdfTypes.some(
          (c) => c.value === "http://www.w3.org/ns/shacl#NodeShape"
        ) ? (
          <Constraints resourceUri={resourceUri} settings={settings} />
        ) : (
          ""
        )}
      </div>
    </>
  );
}

function Constraints({ resourceUri, settings }) {
  return (
    <Table hover>
      <thead>
        <tr>
          <th>Property</th>
          <th>Description</th>
          <th>Cardinality</th>
          <th>Expected value types</th>
          <th>Expected value class types</th>
          <th>Expected values</th>
        </tr>
      </thead>
      <tbody>
        {/* Only render ClassConstraints if it is a sh:NodeShape */}
        <ClassConstraints resourceUri={resourceUri} settings={settings} />
        {/* Same as above */}
        <SuperClassConstraints resourceUri={resourceUri} settings={settings} />
      </tbody>
    </Table>
  );
}
