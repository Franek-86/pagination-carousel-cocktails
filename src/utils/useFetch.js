import { useState, useEffect } from "react";
import axios from "axios";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    setError(false);
    setLoading(true);
    try {
      axios.get(url).then((resp) => {
        const test = resp.data.drinks;
        if (test) {
          setLoading(false);
          setData(test);
        } else {
          setLoading(false);
          setError(true);
        }
      });
    } catch (err) {
      setLoading(true);
      setError(true);
    }
  }, [url]);

  return { data, loading, error };
}
export { useFetch };

// axios.get(url).then((resp) => {
//   const test = resp.data.drinks;
//   console.log("test", test);
//   console.log("ciao");
//   if (test) {
//     setData(test);
//   }
//   console.log("help", data);
// });
