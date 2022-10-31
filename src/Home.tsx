import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';


function Home() {
    const { t, i18n } = useTranslation()

    return (
        <div id="home">
            <img src={logo} className="App-logo" alt="logo" />
            <div className="who">{t('who')}</div>
            <div className="where">{t('where')}</div>
            <div className="coming-soon">{t('coming-soon')}</div>
        </div>
    )
}

export default Home;