import './Location.css';
import airport from './airport.png';
import wedding from './wedding.png';

import { useTranslation } from 'react-i18next';
import Map from './Map'
import Marker from './Marker'
import { Button } from '@mui/material';

function Location() {
    const { t } = useTranslation()

    return (
        <div id="location" className="page">
            <div className="page-title">{t('location-title')}</div>
            <div className="location-description-1">{t('location-description-1')}</div>
            <div className="location-description-2">{t('location-description-2')}</div>
            <div className="location-description-3">{t('location-description-3')}</div>
            <div className="location-amenities">
                {t('location-amenities')}
                <li><span>{t('location-amenities-1')}</span></li>
                <li><span>{t('location-amenities-2')}</span></li>
                <li><span>{t('location-amenities-3')}</span></li>
                <li><span>{t('location-amenities-4')}</span></li>
                <li><span>{t('location-amenities-5')}</span></li>
            </div>
            <div className="section-title">How to get there</div>
            <div className="get-there-1">If you come by plane, we can arrange a transfer from Comiso or Catania airport.</div>
            <div className="get-there-2">If you are staying in another place nearby, we can arrange a transfer from there to La Dimora and vice-versa.</div>
            <div className="get-there-3">If you prefer to rent a car, La Dimora is a 23-minute drive from Comiso Airport and a 1h30-hour drive from Catania Airport. </div>
            <Button className="button-secondary" variant="outlined" target="_blank" href='https://goo.gl/maps/yce7DY31rtnVvMqz7'>Get directions</Button>
            <Map zoom={9} center={[37.1156893, 14.7667613]} />
        </div>
    )
}

export default Location;