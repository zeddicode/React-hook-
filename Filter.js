
import React from 'react';

const Filter = ({ setFilter }) => {
  const handleTitleChange = (event) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      title: event.target.value,
    }));
  };

  const handleRatingChange = (event) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      rating: parseFloat(event.target.value),
    }));
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Filter by rating"
        min="0"
        max="5"
        step="0.1"
        onChange={handleRatingChange}
      />
    </div>
  );
};

export default Filter;
