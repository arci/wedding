import './FAQs.css';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import Accordion from './Accordion';

function FAQs() {
    const { t } = useTranslation()

    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panelId: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panelId : false);
    };

    return (
        <div id="faqs" className="page">
            <div className="section-title">{t('faqs-wedding-title')}</div>
            <Accordion
                faqKey="faqs-1"
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                faqKey="faqs-2"
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                faqKey="faqs-3"
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                faqKey="faqs-4"
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                faqKey="faqs-5"
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                faqKey="faqs-6"
                expanded={expanded}
                onChange={handleChange} />
            <div className="section-title">{t('faqs-getting-there-title')}</div>
            <Accordion
                faqKey="faqs-7"
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                faqKey="faqs-8"
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                faqKey="faqs-9"
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                faqKey="faqs-10"
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                faqKey="faqs-11"
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                faqKey="faqs-12"
                expanded={expanded}
                onChange={handleChange} />
            <div className="section-title">{t('faqs-staying-title')}</div>
            <Accordion
                faqKey="faqs-13"
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                faqKey="faqs-14"
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                faqKey="faqs-15"
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                faqKey="faqs-16"
                expanded={expanded}
                onChange={handleChange} />
            <div className="section-title">{t('faqs-suitcase-title')}</div>
            <Accordion
                faqKey="faqs-17"
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                faqKey="faqs-18"
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                faqKey="faqs-19"
                expanded={expanded}
                onChange={handleChange} />
        </div>
    )
}

export default FAQs;