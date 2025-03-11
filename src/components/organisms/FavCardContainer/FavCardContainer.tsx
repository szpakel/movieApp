import styled from "styled-components";
import MovieCard from "../../molecules/MovieCard/MovieCard";

const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  width: 95%;
  height: auto;
  gap: 20px;
  margin-top: 40px;
`;

function FavCardContainer() {
  return (
    <ContainerWrapper>
      <MovieCard title="ajsdk" date="aksjdkaj" imgSrc=""></MovieCard>
      <MovieCard title="ajsdk" date="aksjdkaj" imgSrc=""></MovieCard>
      <MovieCard title="ajsdk" date="aksjdkaj" imgSrc=""></MovieCard>
      <MovieCard title="ajsdk" date="aksjdkaj" imgSrc=""></MovieCard>
      <MovieCard title="ajsdk" date="aksjdkaj" imgSrc=""></MovieCard>
      <MovieCard title="ajsdk" date="aksjdkaj" imgSrc=""></MovieCard>
      <MovieCard title="ajsdk" date="aksjdkaj" imgSrc=""></MovieCard>
      <MovieCard title="ajsdk" date="aksjdkaj" imgSrc=""></MovieCard>
      <MovieCard title="ajsdk" date="aksjdkaj" imgSrc=""></MovieCard>
      <MovieCard title="ajsdk" date="aksjdkaj" imgSrc=""></MovieCard>
      <MovieCard title="ajsdk" date="aksjdkaj" imgSrc=""></MovieCard>
      <MovieCard title="ajsdk" date="aksjdkaj" imgSrc=""></MovieCard>
    </ContainerWrapper>
  )
}

export default FavCardContainer