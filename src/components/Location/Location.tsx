import { useTranslation } from 'react-i18next';

function Location() {
    const { t } = useTranslation()

    return (
        <div id="location">
            <div className="title">{t('location-title')}</div>
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
        </div>
    )
}

export default Location;