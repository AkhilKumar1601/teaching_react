import { useEffect, useState } from "react";

function SearchFilter() {
  const fruits = [
    "Apple",
    "Banana",
    "Mango",
    "Orange",
    "Grapes",
    "Pineapple",
    "Watermelon",
  ];

  const [search, setSearch] = useState("");
  const [filteredFruits, setFilteredFruits] = useState(fruits);

  useEffect(() => {
    const filtered = fruits.filter((fruit) =>
      fruit.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredFruits(filtered);
  }, [search]);

  return (
    <div>
      <h1>Search Filter</h1>

      <input
        type="text"
        placeholder="Search fruit..."
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
      />

      <ul>
        {filteredFruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
