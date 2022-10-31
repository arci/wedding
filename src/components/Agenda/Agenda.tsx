import './Agenda.css';

import { useTranslation } from 'react-i18next';

function Agenda() {
    const { t } = useTranslation()

    return (
        <div id="agenda">
            <div className="page-title">{t('agenda-title')}</div>
            <p>TODO</p>
        </div>
    )
}

export default Agenda;