import './App.css';

import { Wrapper } from "@googlemaps/react-wrapper";
import { HashRouter } from 'react-router-dom';
import Menu from "./components/Menu/Menu";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Wrapper apiKey={""}>
      <div className="App">
        <HashRouter>
          <Menu />
        </HashRouter>
        <LanguageSelector />
        <Footer />
      </div>
    </Wrapper>
  );
}

export default App;
