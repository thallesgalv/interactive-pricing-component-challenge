import { ContainerTitle } from "./styles";
import CirclesSVG from "../../assets/images/pattern-circles.svg";

export const MainTitle: React.FC = () => {
  return (
    <>
      <ContainerTitle>
        <img src={CirclesSVG} alt='Pattern Circles' />
        <h1> Simple, traffic-based pricing</h1>
        <h2>Sign-up for our 30-day trial. No credit card required. </h2>
      </ContainerTitle>
    </>
  );
};
