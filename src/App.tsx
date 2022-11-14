import './App.css';

import { Wrapper } from "@googlemaps/react-wrapper";
import { HashRouter } from 'react-router-dom';
import Menu from "./components/Menu/Menu";
import LanguageSelector from "./components/LanguageSelector/LanguageSelector";
import Footer from './components/Footer/Footer';
import { useAnalytics } from './analytics/analytics';
import AnalyticsWrapper from './analytics/AnalyticsWrapper';

function App() {

  const { initialized } = useAnalytics()

  return (
    <Wrapper apiKey={""}>
      <div className="App">
        <HashRouter>
          <AnalyticsWrapper initialized={initialized}>
            <Menu />
          </AnalyticsWrapper>
        </HashRouter>
        <LanguageSelector />
        <Footer />
      </div>
    </Wrapper>
  );
}

export default App;
