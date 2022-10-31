import './App.css';

import MobileMenu from "./components/MobileMenu/MobileMenu";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";

function App() {
  return (
    <div className="App">
      <MobileMenu />
      <LanguageSelector/>
    </div>
  );
}

export default App;
