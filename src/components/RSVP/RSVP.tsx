import './RSVP.css';

import { useTranslation } from 'react-i18next';

function RSVP() {
    const { t } = useTranslation()

    return (
        <div id="rsvp">
            <div className="page-title">{t('rsvp-title')}</div>
            <p>TODO</p>
        </div>
    )
}

export default RSVP;