import React, { useState } from "react";

const UnoptimizedUseTransition = () => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);

  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);

    const filtered = items.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <h3>Unoptimized Search</h3>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search items..."
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default UnoptimizedUseTransition;
