import './Home.css';
import logo from './images/logo.svg';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

function Home() {
    const { t } = useTranslation()

    return (
        <div id="home" className="page">
            <img src={logo} className="logo" alt="logo" />
            <div className="who">{t('who')}</div>
            <div className="when">{t('when')}</div>
            <div className="where">{t('where')}</div>
            <div className="next">{t('next')}</div>
            <Link to="/rsvp">
                <Button className="button-primary" variant="outlined">RSVP</Button>
            </Link>
        </div>
    )
}

export default Home;