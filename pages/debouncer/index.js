"use client"
import React, { useState, useEffect } from 'react';
function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedTerm, setDebouncedTerm] = useState('');

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 1500);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedTerm) {
      fetchResults(debouncedTerm);
    }
  }, [debouncedTerm]);

  const fetchResults = (query) => {
    // Example API request
    console.log(`Fetching results for ${query}`);
    // axios.get(`/api/search?query=${query}`)
    //   .then(response => {
    //     // Handle the response data
    //   })
    //   .catch(error => {
    //     // Handle the error
    //   });
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
}

export default SearchComponent;
