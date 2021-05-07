import React, { useEffect, useState } from "react";
import {
  useHistory,
  useLocation,
  // useParams,
  // useRouteMatch,
} from "react-router-dom";
// import { useCurrentPageOptions } from "../../../Hooks/useCurrentPageOptions";
// import { useData } from "../../services/Contexts/DataContext";
import { Form, FormButton, Input } from "../stylredComponents/Form.styled";

const SearchForm = ({ queryLocation }) => {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();
  const location = useLocation();
  // const { path } = useRouteMatch();
  // console.log(`useParams()`, useRouteMatch());
  // console.log(`location`, location);
  // const apiRequestOptions = useCurrentPageOptions();

  // const [state, setState] = useData();
  // !state[apiRequestOptions.moviesCategory] ||

  // const currentSearchCategory = state[apiRequestOptions.moviesCategory];
  // console.log(`state[apiRequestOptions.moviesCategory]`, currentSearchCategory)

  // console.log(`apiRequestOptions`, apiRequestOptions);
  // const m = path.substring(1) + "s";
  // console.log(`m`, m);
  const handleSubmit = (e) => {
      e.preventDefault();
      // console.log(`state1111111111`, state);
      // setState((prev) => {
      //   return {
      //     ...prev,
      //     [m]: [],
      //     // [state[apiRequestOptions.moviesCategory]]: [],
      //   };
      // });

      setSearchQuery(inputValue.trim());
      // console.log(`state2222222`, state);
    },
    onChange = ({ target }) => setInputValue(target.value);

  useEffect(() => {
    if (!searchQuery) return;
    history.push({
      pathname: `/search${queryLocation}/`, //fix
      search: `?${searchQuery}`,
      state: { from: location },
    });
    setInputValue("");
    setSearchQuery("");
  }, [searchQuery, history, location, queryLocation]);

  return (
    <Form onSubmit={handleSubmit}>
      <Input placeholder="Search..." value={inputValue} onChange={onChange} />
      <FormButton as="input" type="submit" />
    </Form>
  );
};

export default SearchForm;
