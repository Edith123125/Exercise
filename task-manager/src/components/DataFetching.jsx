import React, { useEffect, useState } from "react";

const DataFetching = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await fetch(
          "https://v2.jokeapi.dev/joke/Any?type=single&amount=5"
        );

        if (!response.ok) {
          throw new Error("Failed to fetch jokes");
        }

        const json = await response.json();
        setData(json.jokes || []);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data.");
        setLoading(false);
      }
    };

    fetchJokes();
  }, []);

  if (loading) {
    return <div>Loading jokes...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>Random Jokes</h2>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item.joke || "No joke available"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DataFetching;
