import './Honeymoon.css';

import { useTranslation } from 'react-i18next';

function Honeymoon() {
    const { t } = useTranslation()

    return (
        <div id="honeymoon" className="page">
            <div className="page-title">{t('honeymoon-title')}</div>
            <p className='coming-soon'>{t('coming-soon')}</p>
        </div>
    )
}

export default Honeymoon;