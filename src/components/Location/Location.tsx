import './Location.css';
import airport from './airport.png';
import wedding from './wedding.png';

import { useTranslation } from 'react-i18next';
import Map from './Map'
import Marker from './Marker'

function Location() {
    const { t } = useTranslation()

    const dimoraDiSpartivento = new google.maps.LatLng(36.8785649, 14.6960739)
    const cataniaAirport = new google.maps.LatLng(37.4732189, 15.0598244)
    const comisoAirport = new google.maps.LatLng(36.9983724, 14.6029192)
    const airportIcon = {
        url: airport,
        scaledSize: new google.maps.Size(50, 50)
    };
    const weddingIcon = {
        url: wedding,
        scaledSize: new google.maps.Size(50, 50)
    };

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
            <Map zoom={9} center={[37.1156893, 14.7667613]}>
                {/* <Marker position={dimoraDiSpartivento} title="Dimora di Spartivento" icon={weddingIcon} />
                <Marker position={cataniaAirport} title="Aereoporto di Catania" icon={airportIcon} />
                <Marker position={comisoAirport} title="Aereoporto di Comiso" icon={airportIcon} /> */}
            </Map>
        </div>
    )
}

export default Location;