import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
// import { useSearchContext } from "../../services/Contexts/SearchContext";

const Form = ({queryLocation}) => {
  const { handleSubmit, control, reset } = useForm();
  // [{ searchQuery = '' }, setSearchQuery] = useSearchContext(null);
  const [{ searchQuery }, setSearchQuery] = useState("");
  const history = useHistory();
  const location = useLocation();
  const onSubmit = (query) => {
    return setSearchQuery(query);
  };
  // console.log('searchQuery :>> ', searchQuery);
  useEffect(() => {
    if (!searchQuery) return;
    history.push({
      pathname: `/search${queryLocation}/`,
      // pathname: "/searchMovie/",
      search: `?${searchQuery}`,
      state: { from: location },
    });
    return reset;
  }, [searchQuery]);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="searchQuery"
        control={control}
        defaultValue={searchQuery}
        rules={{ required: true }}
        render={({ field }) => <input placeholder="Search..." {...field} />}
      />
      <input type="submit"></input>
    </form>
  );
};

export default Form;
