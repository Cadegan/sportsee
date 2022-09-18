import axios from "axios";
import React from "react";
import Error from "../pages/Error/error";

export const getUser = async (userId) => {
  const url = `http://localhost:3000/user/${userId}`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(`Erreur user :` + error.message);
    return <Error />;
  }
};

export const getUserActivity = async (userId) => {
  const url = `http://localhost:3000/user/${userId}/activity`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(`Erreur activity :` + error.message);
    return <Error />;
  }
};

export const getUserAverageSessions = async (userId) => {
  const url = `http://localhost:3000/user/${userId}/average-sessions`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(`Erreur average-sessions :` + error.message);
    return <Error />;
  }
};

export const getUserPerformance = async (userId) => {
  const url = `http://localhost:3000/user/${userId}/performance`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(`Erreur performance :` + error.message);
    return <Error />;
  }
};

/**
 * Fetch methode
 */
//   return fetch(baseUrl)
//     .then((data) => data.json())
//     .catch(function (error) {
//       console.log(
//         "Il y a eu un problème avec l'opération fetch: " + error.message
//       );
//     });

/**
 * Axios methode
 */
