import React from "react";
import { useQuery } from "@apollo/react-hooks";

const Query = ({ children, query, class_num }) => {
  const { data, loading, error } = useQuery(query, {
    variables: { 
      class_num: class_num
     }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {JSON.stringify(error)}</p>;
  return children({ data });
};

export default Query;