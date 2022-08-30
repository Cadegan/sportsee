import React from "react";
import { useState } from "react";
import Axios from "axios";

function Home() {
  const [stats, setStats] = useState(null);

  const getStats = () => {
    Axios.get("/dataMoked.json").then((response) => {
      console.log(response.data);
    });
  };
  return (
    <div className="statSection">
      Get stats <button className="bt-test" onClick={getStats}></button>
    </div>
  );
}

export default Home;

// function Home() {
//   const [data, setData] = useState(null);
//   const [isLoading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     async function getData() {
//       try {
//         const response = await fetch("/dataMoked.json", {
//           headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           },
//         });
//         if (!response.ok) {
//           throw new Error(` - Error status ${response.status}`);
//         }
//         let actualData = await response.json();
//         setData(actualData);
//         setError(null);
//       } catch (err) {
//         setError(err.message);
//         setData(null);
//       } finally {
//         setLoading(false);
//       }
//     }
//     getData();
//   }, []);
// }
