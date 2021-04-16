import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { useHistory, useLocation } from "react-router-dom";
import styled from "styled-components";

export const FormWrapper = styled.div`
  width:  ${(props) => props.width};
  bottom:  ${(props) => props.bottom};
  position: relative;
`;
const Input = styled.input`
  position: absolute;
  width: 100%;
  height: 46px;
  line-height: 46px;
  font-size: 1.1em;
  color: rgba(0, 0, 0, 0.5);
  border: none;
  border-radius: 30px;
  padding: 10px 20px;
  text-align: center;
  box-sizing: initial;
  left: 0;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
`;

export const FormButton = styled.input`
  position: absolute;
  height: 46px;
  line-height: 46px;
  padding: 10px 26px;
  border: none;
  background: linear-gradient(
    to right,
    rgba(30, 213, 169, 1) 0%,
    rgba(1, 180, 228, 1) 100%
  );
  border-radius: 30px;
  /* top: 0; */
  right: -40px;
  color: #fff;
  cursor: pointer;
  box-sizing: initial;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  &:hover {
    color: rgba(3, 37, 65, 1);
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
    <label htmlFor="searchForm">
      <form className="searchForm" onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="searchQuery"
          control={control}
          defaultValue={searchQuery}
          rules={{ required: true }}
          render={({ field }) => <Input placeholder="Search..." {...field} />}
        />
        <FormButton type="submit" className="searchInput" />
      </form>
    </label>
  );
};

export default SearchForm;
