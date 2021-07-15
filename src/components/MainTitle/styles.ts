import styled from "styled-components";

export const ContainerTitle = styled.header`
  text-align: center;
  margin: 6rem auto;
  position: relative;

  img {
    width: 10rem !important;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    z-index: -1;
    opacity: 0.5;

    @media (min-width: 767px) {
      width: 12rem !important;
    }
  }

  h1 {
    font-size: 1.5rem;
    line-height: 2rem;
    margin: 0.5rem auto;
    font-weight: bold;
    color: #293356;

    @media (min-width: 767px) {
      font-size: 3rem;
      line-height: 1;
      margin: 1.5rem auto;
    }
  }

  h2 {
    font-size: 1rem;
    line-height: 1.5rem;
    color: #858fad;
    max-width: 70%;
    text-align: center;
    margin: 0 auto;

    @media (min-width: 767px) {
      font-size: 1.25rem;
      line-height: 1.75rem;
      max-width: unset;
    }
  }
`;
