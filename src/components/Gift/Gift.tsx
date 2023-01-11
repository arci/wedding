import './Gift.css';

import { useTranslation } from 'react-i18next';

function Gift() {
    const { t } = useTranslation()

    return (
        <div id="gift" className="page">
            <div className="page-title">{t('gift-title')}</div>
            <p className='coming-soon'>{t('coming-soon')}</p>
        </div>
    )
}

export default Gift;