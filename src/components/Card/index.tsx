import { useState, useEffect } from "react";
import {
  Button,
  Container,
  FlexContainer,
  InfoContainer,
  PageViews,
  PriceContainer,
} from "./styles";
import CheckSVG from "../../assets/images/icon-check.svg";

export interface RangeProps {
  value: number;
  discount: boolean;
}

export const Card: React.FC = () => {
  const [pageView, setPageView] = useState("100k");
  const [price, setPrice] = useState(16);
  const [slideNumber, setSlideNumber] = useState(3);
  const [discount, setDiscount] = useState(false);

  useEffect(() => {
    function observe() {
      switch (slideNumber) {
        case 1:
          setPrice(8);
          setPageView("10k");
          break;
        case 2:
          setPrice(12);
          setPageView("50k");
          break;
        case 3:
          setPrice(16);
          setPageView("100k");
          break;
        case 4:
          setPrice(24);
          setPageView("500k");
          break;
        case 5:
          setPrice(36);
          setPageView("1M");
          break;
      }
    }
    observe();
  }, [slideNumber]);

  return (
    <Container value={slideNumber} discount={discount}>
      <InfoContainer>
        <PageViews>{pageView} PageViews</PageViews>
        <input
          type='range'
          min='1'
          max='5'
          onChange={(event) => setSlideNumber(+event.target.value)}
          value={slideNumber}
        />
        <PriceContainer>
          <p>${discount ? price * 0.75 : price}.00</p>
        </PriceContainer>
      </InfoContainer>

      <label htmlFor='billing'>
        Monthly Billing
        <input
          type='checkbox'
          name='billing'
          checked={discount}
          onChange={() => setDiscount(!discount)}
        />
        Yearly Billing
      </label>

      <FlexContainer>
        <ul>
          <li>
            {discount && <img src={CheckSVG} alt='Check Icon' />}
            Unlimited websites
          </li>
          <li>
            {discount && <img src={CheckSVG} alt='Check Icon' />}
            100% data ownership
          </li>
          <li>
            {discount && <img src={CheckSVG} alt='Check Icon' />}
            Email reports
          </li>
        </ul>
        <Button>Start my trial</Button>
      </FlexContainer>
    </Container>
  );
};
