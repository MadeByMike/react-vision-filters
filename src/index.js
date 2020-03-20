import React, { useState, Fragment } from "react";
import Select from "react-select";
import { FILTER_HTML, filters } from "./filters";

export const VisionFilters = ({
  children,
  filterStyles = { control: base => ({ ...base, marginBottom: 10 }) },
  placeholderText = "Select a vision filter..."
}) => {
  const [filter, setFilter] = useState();

  if (!document.getElementById("vision-filters")) {
    const filterContainer = document.createElement("div");
    filterContainer.innerHTML = FILTER_HTML.trim();
    document.body.append(filterContainer);
  }

  return (
    <Fragment>
      <Select
        styles={filterStyles}
        placeholder={placeholderText}
        onChange={data => {
          setFilter(`filter-${data.value}`);
        }}
        options={filters.map(f => ({ label: f, value: f }))}
      />
      <div style={{ filter: filter ? `url(#${filter})` : "none" }}>
        {children}
      </div>
    </Fragment>
  );
};
