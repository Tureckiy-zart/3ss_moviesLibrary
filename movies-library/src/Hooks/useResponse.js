// import React, { useEffect, useState } from "react";

// export default (get) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const d = Array.from(arguments);
//   console.log('d :>> ', d);
//   useEffect(() => {
//     // const options = {
//     //   id,
//     // };
//     // doFetch(options);
//     get()
//       .then((response) => setResponse(response))
//       .catch((error) => {
//         // setIsLoading(false);
//         // setError(error.response.data);
//         throw new Error(error.response.data);
//       });
//   }, []);

// console.log('response :>> ', response);

//   return [isLoading, response, error];
// };
