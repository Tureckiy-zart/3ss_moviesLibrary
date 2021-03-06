import React from "react";
import { getDate } from "../../heplers/heplers";
import { ExternalLink } from "../../structure/stylredComponents/stiledComponents";
import {
  AdditionText,
  SenondaryText,
} from "../../structure/stylredComponents/Title.styled";
import SubNavigation from "./SubNavigation";

const InfoBlock = ({
  overview,
  vote_average,
  vote_count,
  budget,
  release_date,
  homepage,
}) => {
  return (
    <div>
      <AdditionText marginBottom="1rem">{overview}</AdditionText>
      <SenondaryText>Rating IMDB: {vote_average}</SenondaryText>
      <SenondaryText>Vote count: {vote_count}</SenondaryText>
      {budget !== 0 && (
        <SenondaryText>
          Budget: <strong> {(budget / 1000000).toFixed(1)} mln.$</strong> 
        </SenondaryText>
      )}
      {release_date && (
        <SenondaryText>Release: {getDate(release_date)}</SenondaryText>
      )}
      <SubNavigation />
      <ExternalLink href={homepage}>Visit movie page</ExternalLink>
    </div>
  );
};

export default InfoBlock;
