import React from "react";
import { Link, NavLink, useRouteMatch } from "react-router-dom";

const FormBtn = () => {
//   const { url } = useRouteMatch();
  return (
    <button>
      <NavLink
        // activeStyle={activeStyle}
        // to={`searchMovie/`}
      >
        {/* <Link
        to={{
            pathname: `/serach/asdasdads`,

        //   search: `?category=${name}`,
          // hash: `#${original_title ? original_title : name}`,
          // state: { from: location },
        }}
      > */}
        ok
      </NavLink>
      {/* //   </Link> */}
    </button>
  );
};

export default FormBtn;
