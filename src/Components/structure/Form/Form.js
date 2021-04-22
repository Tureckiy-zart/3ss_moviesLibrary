import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Form, Input } from "../stylredComponents/Form.styled";
// const queryString = require("query-string");

const SearchForm = ({ queryLocation }) => {
  const { handleSubmit, control, reset } = useForm();
  const [{ searchQuery }, setSearchQuery] = useState("");
  const history = useHistory();
  // console.log('history :>> ', history);
  //   // console.log(location.search);
  //   //=> '?foo=bar'

  //   const parsed = queryString.parse(history.location.search);
  // console.log('parsed :>> ', parsed);

  const onSubmit = (query) => {
    return setSearchQuery(query);
  };
  useEffect(() => {
    if (!searchQuery) return;
    history.push({
      pathname: `/search${queryLocation}/`,
      search: `?${searchQuery}`,
      state: { from: history.location },
    });
    return reset;
  }, [searchQuery, history, reset, queryLocation]);
  return (
    <Form className="searchForm" onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="searchQuery"
        control={control}
        defaultValue={searchQuery}
        rules={{ required: true }}
        render={({ field }) => <Input placeholder="Search..." {...field} />}
      />
      {/* <FormButton type="submit" /> */}
    </Form>
  );
};

export default SearchForm;
