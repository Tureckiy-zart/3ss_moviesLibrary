// import React, { useEffect, useState } from "react";
// import { useHistory, useLocation } from "react-router-dom";
// // import { useSearchContext } from "../../services/Contexts/SearchContext";
// import styled from "styled-components";

// // const Form = styled.section`
// //   outline: solid 1px red;
// //   margin: 0 auto;
// //   padding: 10px;
// //   width: 1440px;
// //   /* width: maxWidth; */
// // `;
// // // const StyledController = styled(Controller)`
// // //   outline: solid 1px red;
// // //   margin: 0 auto;
// // //   padding: 10px;
// // //   width: 1440px;
// // //   color: #fff;
// // //   /* width: maxWidth; */
// // // `;
// // const StyledController = (props) => (
// //   <Controller {...props} />

// // );
// // const StyledController_Styles = styled(StyledController)`
// //   background-color: red;
// //   outline: solid 1px red;
// //   width: 300px
// // `;
// const SearchForm = ({ queryLocation }) => {
//   const [inputValue, setInputValue] = useState("");
//   const [searchQuery, setSearchQuery] = useState("");
//   const history = useHistory();
//   const location = useLocation();
//   const handleSubmit = (e) => {
//       e.preventDefault();
//       setSearchQuery(inputValue);
//     },
//     onChange = ({ target }) => setInputValue(target.value);

//   // console.log('searchQuery :>> ', searchQuery);
//   useEffect(() => {
//     if (!searchQuery) return;
//     history.push({
//       pathname: `/search${queryLocation}/`,
//       search: `?${searchQuery}`,
//       state: { from: location },
//     });
//     setInputValue("");
//     setSearchQuery("");
//     // return reset;
//   }, [searchQuery]);

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         {/* <StyledController_Styles
//           name="searchQuery"
//           control={control}
//           defaultValue={searchQuery}
//           rules={{ required: true }}
//           render={({ field }) => <input placeholder="Search..." {...field} />}
//         /> */}
//         {/* <Controller
//             name="searchQuery"
//             control={control}
//             defaultValue={searchQuery}
//             rules={{ required: true }}
//             render={({ field }) => <input placeholder="Search..." {...field} />}
//           /> */}

//         <input placeholder="Search..." value={inputValue} onChange={onChange} />
//         <input type="submit" className="searchInput"></input>
//       </form>
//     </>
//   );
// };

// export default SearchForm;