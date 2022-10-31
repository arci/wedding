import './Agenda.css';

import { useTranslation } from 'react-i18next';

function Agenda() {
    const { t } = useTranslation()

    return (
        <div id="agenda" className="page">
            <div className="page-title">{t('agenda-title')}</div>
            <p>Coming soon</p>
        </div>
    )
}

export default Agenda;