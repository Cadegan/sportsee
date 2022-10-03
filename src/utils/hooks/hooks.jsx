import mockedData from "../data/data.json";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function useAxios(endpoint) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { id } = useParams();

  /* 
  A boolean that determines whether to use mocked data or not. 
  Set "true" if you want to use the mocked data
  Set "false" if you want to use the API data
  */
  const isMockedData = false;

  useEffect(
    () => {
      if (!endpoint) {
        return setLoading(true);
      }

      const getMockedData = async (endpoint) => {
        let data = mockedData;
        switch (endpoint) {
          case "/":
            setData(data.data);
            break;
          case "/activity":
            setData(data["activity"]);
            break;
          case "/average-sessions":
            setData(data["average-sessions"]);
            break;
          case "/performance":
            setData(data["performance"]);
            break;
          default:
            setError(true);
            setData({});
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
    },
    [endpoint, isMockedData]
    // console.log("Data is mocked? :", isMockedData)
  );
  return { data, isLoading, error };
}
