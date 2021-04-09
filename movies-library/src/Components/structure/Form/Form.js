import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useSearchContext } from "../../services/Contexts/SearchContext";

const Form = () => {
  const { handleSubmit, control, reset } = useForm(),
    [{ searchQuery }, setSearchQuery] = useSearchContext(null);
  const history = useHistory();
  const onSubmit = (query) => {
    return setSearchQuery(query);
  };

  useEffect(() => {
    if (!searchQuery) return;
    history.push({ pathname: "/searchMovie", search: `${searchQuery}` });
    // history.pushState(null, null , "/searchMovie")
    // history.replace("/searchMovie");
    // <Redirect to='searchMovie'/>
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
