import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { Form, FormButton, Input } from "../stylredComponents/Form.styled";
// const queryString = require("query-string");

const SearchForm = ({ queryLocation }) => {
  const history = useHistory();
  const { handleSubmit, control, reset } = useForm();
  const [{ searchQuery }, setSearchQuery] = useState("");

  const onSubmit = (query) => setSearchQuery(query);

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
      <FormButton as='input' type="submit" />
    </Form>
  );
};

export default SearchForm;
