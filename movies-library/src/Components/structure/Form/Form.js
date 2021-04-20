import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";

export const Form = styled.form`
  width: ${(props) => props.width || "60%"};
  bottom: ${(props) => props.bottom};
  border: none;
  position: relative;
`;
const Input = styled.input`
  width: 100%;
  line-height: 46px;
  font-size: 1.5em;
  color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  text-align: center;
  box-sizing: initial;
  box-shadow: rgba(0, 0, 0, 0.96) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &:active,
  &:hover,
  &:focus {
    outline: 0;
    outline-offset: 0;
  }
`;
export const FormButton = styled.input`
  position: absolute;
  line-height: 46px;
  padding: 10px 26px;
  border: none;
  background: linear-gradient(
    to right,
    rgba(30, 213, 169, 1) 0%,
    rgba(1, 180, 228, 1) 100%
  );
  border-radius: 30px;
  right: -40px;
  color: #fff;
  cursor: pointer;
  font-size: 1.5em;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  &:active,
  &:hover,
  &:focus {
    color: rgba(3, 37, 65, 1);
    outline: 0;
    outline-offset: 0;
  }
`;
const SearchForm = ({ queryLocation }) => {
  const { handleSubmit, control, reset } = useForm();
  const [{ searchQuery }, setSearchQuery] = useState("");
  const history = useHistory();
  const location = useLocation();
  const onSubmit = (query) => {
    return setSearchQuery(query);
  };
  useEffect(() => {
    if (!searchQuery) return;
    history.push({
      pathname: `/search${queryLocation}/`,
      search: `?${searchQuery}`,
      state: { from: location },
    });
    return reset;
  }, [searchQuery]);
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
