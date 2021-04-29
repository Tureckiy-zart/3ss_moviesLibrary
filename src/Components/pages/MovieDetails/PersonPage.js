import React, { Component } from "react";
import { doFetch } from "../../services/API/api";
import withData from "../../services/hoc/withFetch";
import { ButtonsHistoryReturn } from "../../structure/Buttons/ButtonsHistoryReturn";
import List from "../../structure/List/List";
import {
  Image,
  ImageWrapper,
  InfoWrapper,
  StyledGalleryListItem,
} from "../../structure/stylredComponents/List.styled";
import {
  ImgWrapper,
  PageWrapper,
} from "../../structure/stylredComponents/MovieDetailsPage.styled";
import {
  ComponentWrapper,
  Container,
  StyledDiv,
} from "../../structure/stylredComponents/stiledComponents";
import Title, {
  AdditionText,
  MovieTittle,
  SenondaryText,
} from "../../structure/stylredComponents/Title.styled";

class PersonPage extends Component {
  state = {
    id: this.props.history.location.search.slice(1) || null,
    data: {},
  };

  option = { id: this.state.id };
  componentDidMount() {
    if (!this.state.id) return;
    this.props.setIsLoading(true); //spiner on

    doFetch("getPerson", this.option)
      .then((data) =>
        this.setState((prev) => {
          return {
            ...prev,
            data: data.person,
          };
        })
      )
      .catch((error) => {
        this.props.ErrorHandler(error, this.props.history);
      })
      .finally(this.props.setIsLoading(false));
  }

  render() {
    const { profile_path, name, popularity, known_for } = this.state.data;

    // console.group("DATA");
    // console.log(`data:`, this.state.data);
    // console.groupEnd("DATA");
    return (
      <>
        {name && (
          <ComponentWrapper position="relative" top="125px">
            <Container>
              <PageWrapper>
                <ButtonsHistoryReturn />
                <StyledDiv>
                  <div>
                    <ImgWrapper>
                      <Image
                        src={
                          profile_path
                            ? `https://image.tmdb.org/t/p/w154/${profile_path}`
                            : "http://ergo.slv.vic.gov.au/sites/default/files/imagecache/download/ms11553box4.jpg"
                        }
                        alt={name}
                      />
                    </ImgWrapper>
                    <MovieTittle>{name}</MovieTittle>
                    <SenondaryText>
                      Popularity: {popularity.toFixed(1)}
                    </SenondaryText>
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
