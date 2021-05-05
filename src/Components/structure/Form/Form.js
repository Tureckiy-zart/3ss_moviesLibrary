import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { Form, FormButton, Input } from "../stylredComponents/Form.styled";

const SearchForm = ({ queryLocation }) => {
  const [inputValue, setInputValue] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const history = useHistory();
  const location = useLocation();
  const handleSubmit = (e) => {
      e.preventDefault();
      setSearchQuery(inputValue.trim());
    },
    onChange = ({ target }) => setInputValue(target.value);

  useEffect(() => {
    if (!searchQuery) return;
    history.push({
      pathname: `/search${queryLocation}/`,
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
