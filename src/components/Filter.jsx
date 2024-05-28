import React from "react";

function Filter({filter, setFilter, setSort}) {
  return (
    <div className="Filter">
      <h2>Filtrar:</h2>
      <div className="filter-options">
        <div>
          <p>Status:</p>
          <select value={filter} onChange={(e) => setFilter(e.target.value)} className="select-filter">
            <option  value="All">Todas</option>
            <option value="Completed">Completas</option>
            <option value="Incomplete">Incompletas</option>
          </select>
        </div>
        <div>
            <p>Ordem Alfabética:</p>
            <button  onClick={() => setSort("Asc")}className="Asc-button">Asc</button>
            <button onClick={() => setSort("Desc")}>Desc</button>
        </div>
      </div>
    </div>
  );
}

export default Filter;
