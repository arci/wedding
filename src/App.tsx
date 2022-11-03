import './App.css';

import { Wrapper } from "@googlemaps/react-wrapper";
import Menu from "./components/Menu/Menu";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";

function App() {
  return (
    <Wrapper apiKey={""}>
      <div className="App">
        <Menu />
        <LanguageSelector />
      </div>
    </Wrapper>
  );
}

export default App;
