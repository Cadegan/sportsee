import mockedData from "../data/mockedData.json";
import { useState, useEffect } from "react";
import axios from "axios";

export function useAxios(endpoint) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const userId = 12;
  const isMockedData = true;

  useEffect(() => {
    if (!endpoint) {
      return setLoading(true);
    }

    function getMockedData(endpoint) {
      const data = mockedData;
      switch (endpoint) {
        case "/":
          setData(data.userMainData);
          break;
        case "/activity":
          setData(data["userActivity"]);
          break;
        case "/average-sessions":
          setData(data["userAverageSessions"]);
          break;
        case "/performance":
          setData(data["userPerformance"]);
          break;
        default:
          setError(true);
          setData({});
      }
    }

    async function fetchData(endpoint) {
      try {
        const response = await axios.get(
          `http://localhost:3000/user/${userId}${endpoint}`
        );
        const data = await response.data;
        setData(data.data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    isMockedData ? getMockedData(endpoint) : fetchData(endpoint);
  }, [endpoint, isMockedData]);
  return { data, isLoading, error };
}
