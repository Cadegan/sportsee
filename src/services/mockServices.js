// import axios from "axios";

async function mainData() {
  const url = "/userMainData.json";

  try {
    const data = await fetch(url);
    return await data.json();
  } catch (error) {
    console.log(`Erreur fetch :` + error.message);
  }

  //   return axios
  //     .get(url)
  //     .then((data) => data.json())
  //     .catch((err) => {
  //       console.log(`Erreur axios :` + err.message);
  //     });
}

export default mainData;
