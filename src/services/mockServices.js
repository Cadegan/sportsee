import axios from "axios";

async function mainData() {
  const url = "/userMainData.json";

  // try {
  //   const data = await fetch(url);
  //   return await data.json();
  // } catch (error) {
  //   console.log(`Erreur fetch :` + error.message);
  // }

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.log(`Erreur fetch :` + error.message);
  }
}

export default mainData;
