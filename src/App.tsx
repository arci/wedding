import './App.css';

import { Wrapper } from "@googlemaps/react-wrapper";
import Menu from "./components/Menu/Menu";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <Wrapper apiKey={""}>
      <div className="App">
        <BrowserRouter>
          <Menu />
        </BrowserRouter>
        <LanguageSelector />
      </div>
    </Wrapper>
  );
}

export default App;
