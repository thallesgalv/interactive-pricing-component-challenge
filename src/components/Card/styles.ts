import styled, { css } from "styled-components";
import { RangeProps } from ".";

export const Container = styled.section<RangeProps>`
  padding: 3rem 1rem;
  background: #fff;
  width: calc(min(80%, 30rem));
  margin: 0 auto;
  border-radius: 0.75rem;
  box-shadow: 5px 5px 15px 0px rgba(44, 44, 44, 0.15);
  color: #858fad;

  animation: show.5s forwards;

  @keyframes show {
    from {
      transform: translate3d(0, 100px, 0);
      opacity: 0;
    }
    to {
      transform: translate3d(0, 0, 0);
      opacity: 1;
    }
  }

  @media (min-width: 767px) {
    padding: 4rem;
    border-radius: 1rem;
  }

  input[type="range"] {
    -webkit-appearance: none;
    appearance: none;
    background: #10d5c2;
    width: 100%;
    margin: 2rem auto;
    cursor: pointer;
    opacity: 1;
    border-radius: 0.5rem;
    height: 0.5rem;

    ${({ value }) => {
      switch (value) {
        case 1:
          return css`
            background: #eaeefb;
          `;
        case 2:
          return css`
            background: linear-gradient(
              to right,
              #5deadc 0%,
              #5deadc 25%,
              #eaeefb 25%,
              #eaeefb 100%
            );
          `;
        case 3:
          return css`
            background: linear-gradient(
              to right,
              #5deadc 0%,
              #5deadc 50%,
              #eaeefb 50%,
              #eaeefb 100%
            );
          `;
        case 4:
          return css`
            background: linear-gradient(
              to right,
              #5deadc 0%,
              #5deadc 75%,
              #eaeefb 75%,
              #eaeefb 100%
            );
          `;
        case 5:
          return css`
            background: #5deadc;
          `;
      }
    }}

    &:focus {
      outline: none;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 50%;
      background: no-repeat center/50% url("https://i.imgur.com/l84bIu6.png");
      background-color: #25ada1;
      border: none;
      transition: all 0.2s ease-in-out;

      &:hover,
      &:active {
        background: no-repeat center/50% url("https://i.imgur.com/l84bIu6.png");
        background-color: #5deadc;
      }
    }
    &::-moz-range-thumb {
      -webkit-appearance: none;
      height: 2.5rem;
      width: 2.5rem;
      border-radius: 50%;
      background: no-repeat center/50% url("https://i.imgur.com/l84bIu6.png");
      background-color: #25ada1;
      border: none;
      transition: all 0.2s ease-in-out;

      &:hover,
      &:active {
        background: no-repeat center/50% url("https://i.imgur.com/l84bIu6.png");
        background-color: #5deadc;
      }
    }

    &::-moz-range-progress {
      background: #5deadc;
      height: 0.5rem;
    }

    @media (min-width: 767px) {
      order: 1;
    }
  }

  label {
    width: fit-content;
    word-break: keep-all;
    margin: 2rem auto;
    margin-left: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 0.75rem;
    line-height: 1rem;

    @media (min-width: 767px) {
      font-size: 1rem;
      line-height: 1.5rem;
    }

    &:after {
      content: "-25%";
      position: absolute;
      top: 0;
      bottom: 0;
      margin: auto;
      left: calc(100% + 0.25rem);
      width: fit-content;
      white-space: nowrap;
      height: 70%;
      background: #feece7;
      padding: 0 0.75rem;
      font-size: 0.6rem;

      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 2rem;
      color: #ff8c66;
      font-weight: 800;

      @media (min-width: 767px) {
        content: "25% discount";
        padding: 0.5rem;
        left: calc(100% + 1rem);
      }
    }
  }

  input[type="checkbox"] {
    -webkit-appearance: none;
    appearance: none;
    width: 40px;
    height: 20px;
    margin: 0 0.5rem;
    background-color: #cdd7ee;
    border-radius: 2rem;
    position: relative;
    cursor: pointer;

    @media (min-width: 767px) {
      margin: 0 1rem;
      width: 50px;
      height: 25px;
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 5px;
      bottom: 0;
      margin: auto;
      width: 14px;
      height: 14px;
      background-color: #fff;
      border-radius: 50%;
    }

    &:checked {
      &:after {
        left: unset;
        right: 5px;
      }
    }
  }

  ul {
    margin: 0 auto;
    li {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.75rem;
      text-decoration: ${(props) => (props.discount ? "none" : "line-through")};

      @media (min-width: 767px) {
        justify-content: unset;
    }

      img {
        width: fit-content;
      }
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;

  @media (min-width: 767px) {
    justify-content: space-between;
  }
`;

export const PageViews = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  font-weight: 800;

  @media (min-width: 767px) {
    justify-content: space-between;
    font-size: 1rem;
    line-height: 1.5rem;
  }
`;

export const PriceContainer = styled.div`
  > p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #293356;
    font-weight: 800;
    font-size: 2.25rem;
    line-height: 2.5rem;

    @media (min-width: 767px) {
      font-size: 3rem;
      line-height: 1;
    }

    &:after {
      content: " / month";
      font-size: 0.875rem;
      line-height: 1.25rem;
      margin-left: 0.5rem;
      letter-spacing: 0.15rem;
      color: #858fad;
      font-weight: 600;

      @media (min-width: 767px) {
        justify-content: space-between;
        font-size: 1rem;
        line-height: 1.5rem;
      }
    }
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  border-top: 1px solid rgba(133, 143, 173, 0.5);
  margin-top: 2rem;
  padding-top: 2rem;
  gap: 2rem;

  @media (min-width: 767px) {
    justify-content: space-between;
  }
`;

export const Button = styled.a`
  background-color: #293356;
  width: fit-content;
  padding: 1rem 4rem;
  border-radius: 2rem;
  color: #bdccff;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;
