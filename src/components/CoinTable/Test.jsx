import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

function Test() {
  const { data, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const result = await axios.get("https://fakestoreapi.com/products");
      return result.data;
    },
  });

  useEffect(() => {
    console.log(data);
  }, [data]);
  if (isLoading) return <p>Loading...</p>;
}

export default Test;
