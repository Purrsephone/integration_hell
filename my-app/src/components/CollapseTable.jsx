import React from "react";
import { JsonToTable } from "react-json-to-table";
import Collapsible from "react-collapsible";

const myJson = {};

export function collapseTable(data, title) {
  if (data) {
    return (
      <Collapsible trigger={title}>
        <p>
          <JsonToTable
            json={data || myJson}
            tableClassName="table table-striped table-hover"
          />
        </p>
      </Collapsible>
    );
  }
}
