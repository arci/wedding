import './NotFound.css';

import { useTranslation } from 'react-i18next';

function NotFound() {
    const { t } = useTranslation()

    return (
        <div id="not-found" className="page">
            <div className="page-title">Ops!</div>
            <p>{t('not-found')} ¯\_(ツ)_/¯</p>
        </div>
    )
}

export default NotFound;