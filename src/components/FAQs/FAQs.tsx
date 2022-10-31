import './FAQs.css';

import { useTranslation } from 'react-i18next';

function FAQs() {
    const { t } = useTranslation()

    return (
        <div id="faqs" className="page">
            <div className="page-title">{t('faqs-title')}</div>
            <p>Coming soon</p>
        </div>
    )
}

export default FAQs;