import './Home.css';
import logo from './logo.svg';

import { useTranslation } from 'react-i18next';

function Home() {
    const { t } = useTranslation()

    return (
        <div id="home">
            <img src={logo} className="logo" alt="logo" />
            <div className="who">{t('who')}</div>
            <div className="where">{t('where')}</div>
            <div className="coming-soon">{t('coming-soon')}</div>
        </div>
    )
}

export default Home;