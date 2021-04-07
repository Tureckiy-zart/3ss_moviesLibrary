import React from "react";
import Spiner from "react-loader-spinner";
import { useData } from "../services/Contexts/DataContext";

function Loader() {
  const [{ isLoading }] = useData();
  if (!isLoading) return null;
  return (
    <Spiner
      type="ThreeDots"
      color="#00BFFF"
      height={100}
      width={100}
      //   timeout={3000} //3 secs
    />
  );
}

export default Loader;


// import React from "react";
// import Spiner from "react-loader-spinner";
// import { useData } from "../services/Contexts/DataContext";

// function Loader() {
//   const [{ isLoading }] = useData();
//   if (!isLoading) return null;
//   return (
//     <>
//       {/* {isLoading ? ( */}
//         <Spiner
//           type="ThreeDots"
//           color="#00BFFF"
//           height={100}
//           width={100}
//           //   timeout={3000} //3 secs
//         />
//       {/*  ) : null} */}
//     </>
//   );
// }

// export default Loader;
