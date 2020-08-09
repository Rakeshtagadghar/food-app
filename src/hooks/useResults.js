import React, { useEffect, useState } from "react";
import yelp from "../services/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchAPI = async (searchTerm) => {
    try {
      const response = await yelp.get(`/search`, {
        params: {
          term: searchTerm,
          limit: 50,
          location: "san jose",
        },
      });
      setResults(response.data.businesses);
      setError("");
    } catch (err) {
      console.log(err);
      setError("somethign went wrong");
    }
  };
  console.log(results);

  useEffect(() => {
    searchAPI("food");
  }, []);

  return [searchAPI, results, error];
};
