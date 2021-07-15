import { Card } from "./components/Card";
import { MainTitle } from "./components/MainTitle";
import GalvLogo from "./assets/images/tgViceBlue.svg";

function App() {
  return (
    <div className='App'>
      <MainTitle />
      <Card />
      <a
        style={{ width: "10rem", margin: "2rem auto" }}
        href='https://www.thallesgalvao.com.br'
        target='_blank'
        rel='noreferrer'
      >
        <img src={GalvLogo} alt='Galv Logo' />
      </a>
    </div>
  );
}

export default App;
