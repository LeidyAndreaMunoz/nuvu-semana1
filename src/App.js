import './assets/global.css'
import { Carousel } from './Carousel/Carousel';
import { Footer } from './Footer/Footer';
import { GoalGrid } from './GoalGrid/GoalGrid';
import { Header } from "./Header/Header";
import { MainCard } from "./Main-card/MainCard";
import { MainTable } from './MainTable/MainTable';
import { Portfolio } from './Portfolio/Portfolio';
import { Recomendations } from './Recomendations/Recomendations';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <MainCard/>
      <MainTable/>
      <GoalGrid/>
      <Portfolio/>
      <Carousel/>
      <Recomendations/>
      <Footer/>
      </main>
    </div>
  );
}

export default App;
