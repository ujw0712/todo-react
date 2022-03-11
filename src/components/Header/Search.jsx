import React from "react"

const Search: React.FC = () => {
  return (
    <div className="kanban__header-search">
      <div className="search-icon">
        <i className="material-icons">search</i>
      </div>
      <input
        className="input-text"
        type="text"
        // placeholder="Search"
      />
    </div>
  )
}

export default Search;
