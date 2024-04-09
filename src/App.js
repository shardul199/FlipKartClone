import BestOfElectronics from "./components/BestOfElectronics";
import HeroSlider from "./components/HeroSlider";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <HeroSlider/>
      <h2 style={{textAlign: 'center'}}>Best of Electronics</h2>
      <BestOfElectronics />
      {/* <h1>asdasd</h1> */}
    </div>

    </Router>
  );
}

export default App;
