// import mockedData from "../data/mockedData.json";
import {
  getUserInfos,
  getUserActivity,
  getUserAverageSessions,
  getUserPerformance,
} from "../data/dataMocked";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function useAxios(endpoint) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();
  const isMockedData = false;

  useEffect(() => {
    if (!endpoint) {
      return setLoading(true);
    }

    const getMockedData = async (endpoint) => {
      let data = [];
      switch (endpoint) {
        case `/`:
          data = await getUserInfos(id);
          break;
        case "/activity":
          data = await getUserActivity(id);
          break;
        case "/average-sessions":
          data = await getUserAverageSessions(id);
          break;
        case "/performance":
          data = await getUserPerformance(id);
          break;
        default:
          setError(true);
          setData(data);
      }
      setLoading(false);
    };

    async function fetchData(endpoint) {
      try {
        const response = await axios.get(
          `http://localhost:3000/user/${id}${endpoint}`
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
