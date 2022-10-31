import './FAQs.css';

import { useTranslation } from 'react-i18next';

function FAQs() {
    const { t } = useTranslation()

    return (
        <div id="faqs">
            <div className="page-title">{t('faqs-title')}</div>
            <p>TODO</p>
        </div>
    )
}

export default FAQs;