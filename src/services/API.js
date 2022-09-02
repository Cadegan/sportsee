import axios from "axios";

async function mainData(userId) {
  const url = `http://localhost:3000/user/${userId}`;

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
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(`Erreur fetch :` + error.message);
  }
}

export default mainData;
