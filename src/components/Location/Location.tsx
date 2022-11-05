import './Location.css';
import dimora1 from './dimora.jpg';
import collage from './collage.png';

import { useTranslation } from 'react-i18next';
import { Button } from '@mui/material';
import Map from './Map'

function Location() {
    const { t } = useTranslation()

    return (
        <div id="location" className="page">
            <div className="page-title">{t('location-title')}</div>
            <div className="location-name">{t('location-name')}</div>
            <div className="location-description">{t('location-description')}</div>

            <img className="main-img" src={dimora1} />
            <div className="section">
                <div className="section-title">{t('location-stay')}</div>
                <div className="section-content">
                    <div className="location-description-1">{t('location-description-1')}</div>
                    <div className="location-description-2">{t('location-description-2')}</div>
                    <div className="location-description-3">{t('location-description-3')}</div>
                    <div className="location-description-4">{t('location-description-4')}</div>
                    <div className="location-amenities">
                        {t('location-amenities')}
                        <li><span>{t('location-amenities-1')}</span></li>
                        <li><span>{t('location-amenities-2')}</span></li>
                        <li><span>{t('location-amenities-3')}</span></li>
                        <li><span>{t('location-amenities-4')}</span></li>
                        <li><span>{t('location-amenities-5')}</span></li>
                    </div>
                </div>
            </div>

            <img className="main-img" src={collage} />
            <div className="section">
                <div className="section-title">{t('location-get-there')}</div>
                <div className="section-content">
                    <div className="location-get-there-1">{t('location-get-there-1')}</div>
                    <div className="location-get-there-2">{t('location-get-there-2')}</div>
                    <div className="location-get-there-3">{t('location-get-there-3')}</div>
                    <Button
                        className="button-secondary"
                        variant="outlined"
                        target="_blank"
                        href='https://goo.gl/maps/yce7DY31rtnVvMqz7'>
                        {t('location-get-directions')}
                    </Button>
                </div>
            </div>

            <Map zoom={9} center={[37.1156893, 14.7667613]} />
        </div>
    )
}

export default Location;