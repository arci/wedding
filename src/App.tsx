import './App.css';

import MobileMenu from "./components/MobileMenu/MobileMenu";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import { Wrapper } from "@googlemaps/react-wrapper";

function App() {
  return (
    <Wrapper apiKey={""}>
      <div className="App">
        <MobileMenu />
        <LanguageSelector />
      </div>
    </Wrapper>
  );
}

export default App;
