import './Location.css';

import { useTranslation } from 'react-i18next';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import Map from './Map'
import Marker from './Marker'

function Location() {
    const { t } = useTranslation()

    return (
        <div id="location" className="page">
            <div className="page-title">{t('location-title')}</div>
            <div className="location-description-1">{t('location-description-1')}</div>
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
            <Wrapper apiKey={"AIzaSyDSFescMQEuS3MYOPjToNlW0lTxJ0ciN8w"}>
                <Map zoom={5} center={[37.1156893, 14.7667613]}>
                    <Marker lat={36.8785649} lng={14.6960739} />
                </Map>
            </Wrapper>
        </div>
    )
}

export default Location;