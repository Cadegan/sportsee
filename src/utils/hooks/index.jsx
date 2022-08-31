import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";

function useFetch() {
  const [userMainData, setUserMainData] = useState([]);
  const [userActivity, setUserActivity] = useState([]);
  const [userAverageSessions, setUserAverageSessions] = useState([]);
  const [userPerformance, setUserPerformance] = useState([]);
  //   const { id } = useParams();

  const fetchData = () => {
    const usersMainData = "/userMainData.json";
    const usersActivityData = "/userActivity.json";
    const usersAverageSessionsData = "/userAverageSessions.json";
    const usersPerformanceData = "/userPerformance.json";

    const getUsersMainData = axios.get(usersMainData);
    const getUsersActivityData = axios.get(usersActivityData);
    const getUsersAverageSessionsData = axios.get(usersAverageSessionsData);
    const getUsersPerformanceData = axios.get(usersPerformanceData);

    axios
      .all([
        getUsersMainData,
        getUsersActivityData,
        getUsersAverageSessionsData,
        getUsersPerformanceData,
      ])
      .then(
        axios.spread((...alldata) => {
          const allDataUsersMain = alldata[0];
          const allDataUsersActivity = alldata[1];
          const allDataAverageSessions = alldata[2];
          const allDataUsersPerformanc = alldata[3];

          // console.log(allDataUsersMain);
          // console.log(allDataUsersActivity);
          // console.log(allDataAverageSessions);
          // console.log(allDataUsersPerformanc);

          setUserMainData(allDataUsersMain);
          setUserActivity(allDataUsersActivity);
          setUserAverageSessions(allDataAverageSessions);
          setUserPerformance(allDataUsersPerformanc);
        })
      );
  };

  useEffect(() => {
    fetchData();
  }, []);

  function profile() {
    const getUserById = (id) => data.find((e) => e.id === id);
    let user = getUserById(12);

    return <div className="UsersMain">{user.firstName}</div>;
  }

  return <div>{userMainData}</div>;

  // useEffect(() => {
  //   const getStats = () => {
  //     const response = Axios.get("/dataMoked.json").then((response) => {
  //       console.log(response);
  //     });
  //     setData(response);
  //   };
  //   getStats();
  // }, []);

  // const getUserById = (id) => data.find((e) => e.id === id);
  // return getUserById;
}

export default useFetch;
