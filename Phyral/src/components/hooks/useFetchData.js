import { useEffect, useState } from "react";

export const useFetchData = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        "http://phyralbk.test/api/events",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Error al obtener datos");
      }

      const posts = await response.json();
      setData(posts);
      setIsLoading(false);
    } catch (error) {
      console.log("Error en la solicitud:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return {
    data,
    isLoading,
  };
};
