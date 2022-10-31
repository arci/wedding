import './NotFound.css';

import { useTranslation } from 'react-i18next';

function NotFound() {
    const { t } = useTranslation()

    return (
        <div id="not-found">
            <p>Ops!</p>
            <p>page not found</p>
        </div>
    )
}

export default NotFound;