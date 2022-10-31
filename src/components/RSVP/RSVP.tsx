import './RSVP.css';

import { useTranslation } from 'react-i18next';

function RSVP() {
    const { t } = useTranslation()

    return (
        <div id="rsvp" className="page">
            <div className="page-title">{t('rsvp-title')}</div>
            <p>Coming soon</p>
        </div>
    )
}

export default RSVP;