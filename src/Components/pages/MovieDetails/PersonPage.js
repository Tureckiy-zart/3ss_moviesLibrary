import React, { Component } from "react";
import { doFetch } from "../../services/API/api";
import withData from "../../services/hoc/withFetch";
import { ButtonsHistoryReturn } from "../../structure/Buttons/ButtonsHistoryReturn";
import ProfileImage from "../../structure/ImageComponents/ProfileImage";
import List from "../../structure/List/List";
import { PageWrapper } from "../../structure/stylredComponents/MovieDetailsPage.styled";
import {
  ComponentWrapper,
  Container,
  StyledDiv,
} from "../../structure/stylredComponents/stiledComponents";
import {
  AdditionText,
  MovieTittle,
  SenondaryText,
} from "../../structure/stylredComponents/Title.styled";

class PersonPage extends Component {
  state = {
    id: this.props.history.location.search.slice(1) || null,
    data: { person: {} },
  };

  option = { id: this.state.id };

  componentDidMount() {
    if (!this.state.id) return;
    this.props.setIsLoading(true); //spiner on

    doFetch("getPerson", this.option)
      .then((data) => {
        console.log(`data`, data);
        this.setState((prev) => {
          return {
            ...prev,
            // data: data.job,
            data,
          };
        });
      })
      .catch((error) => {
        this.props.ErrorHandler(error, this.props.history);
      })
      .finally(this.props.setIsLoading(false));
  }

  render() {
    const {
      profile_path,
      name,
      popularity,
      known_for,
    } = this.state.data?.person;
    return (
      <>
        {name && (
          <ComponentWrapper position="relative" top="125px">
            <Container>
              <PageWrapper>
                <ButtonsHistoryReturn />
                <StyledDiv>
                  <div>
                    <ProfileImage profile_path={profile_path} name={name} />

                    <MovieTittle>{name}</MovieTittle>
                    {this.state.data.media.character && (
                      <AdditionText>
                        Character: {this.state.data.media.character}
                      </AdditionText>
                    )}
                    <SenondaryText>
                      Popularity: {popularity.toFixed(1)}
                    </SenondaryText>

                    {this.state.data.job &&
                      !this.state.data.media.character && (
                        <SenondaryText>
                          Job: {this.state.data.job}
                        </SenondaryText>
                      )}
                  </div>
                  <div>
                    <AdditionText>Known for:</AdditionText>
                    <List dataMovies={known_for} />
                  </div>
                </StyledDiv>
              </PageWrapper>
            </Container>
          </ComponentWrapper>
        )}
      </>
    );
  }
}
export default withData(PersonPage);
