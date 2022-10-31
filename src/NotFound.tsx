import { useTranslation } from 'react-i18next';

function NotFound() {
    const { t, i18n } = useTranslation()

    return (
        <div id="not-found">
            <p>Ops!</p>
            <p>page not found</p>
        </div>
    )
}

export default NotFound;