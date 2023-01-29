import './Gift.css';
import head from './images/head.png';
import tail from './images/tail.png';

import { useTranslation } from 'react-i18next';

function Gift() {
    const { t } = useTranslation()

    return (
        <div id="gift" className="page">
            <div className="page-title">{t('gift-title')}</div>
            <div className="gift-name">{t('gift-name')}</div>
            <div className="gift-description">{t('gift-description')}</div>

            <img className="main-img" src={head} alt="Past travels"/>

            <div className="section">
                <div className="location-description-1">{t('location-description-1')}</div>
                <div className="location-description-2">{t('location-description-2')}</div>
                <div className="location-description-3">{t('location-description-3')}</div>
                <div className="location-description-4">{t('location-description-4')}</div>
                <div className="location-description-4">{t('location-description-4')}</div>
            </div>

            <img className="main-img" src={tail} alt="Future travels"/>

            <div className="section">
                <div className="location-description-1">{t('location-description-1')}</div>
            </div>
        </div>
    )
}

export default Gift;