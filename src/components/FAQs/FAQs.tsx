import './FAQs.css';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import Accordion from './Accordion';

function FAQs() {
    const { t } = useTranslation()

    const [expanded, setExpanded] = useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (

        <div id="faqs" className="page">
            <div className="section-title">{t('faqs-wedding-title')}</div>
            <Accordion
                faqKey="faqs-1"
                expanded={expanded === 'faqs-1'}
                onChange={handleChange('faqs-1')} />
            <Accordion
                faqKey="faqs-2"
                expanded={expanded === 'faqs-2'}
                onChange={handleChange('faqs-2')} />
            <Accordion
                faqKey="faqs-3"
                expanded={expanded === 'faqs-3'}
                onChange={handleChange('faqs-3')} />
            <Accordion
                faqKey="faqs-4"
                expanded={expanded === 'faqs-4'}
                onChange={handleChange('faqs-4')} />
            <Accordion
                faqKey="faqs-5"
                expanded={expanded === 'faqs-5'}
                onChange={handleChange('faqs-5')} />
            <Accordion
                faqKey="faqs-6"
                expanded={expanded === 'faqs-6'}
                onChange={handleChange('faqs-6')} />
            <div className="section-title">{t('faqs-getting-there-title')}</div>
            <Accordion
                faqKey="faqs-7"
                expanded={expanded === 'faqs-7'}
                onChange={handleChange('faqs-7')} />
            <Accordion
                faqKey="faqs-8"
                expanded={expanded === 'faqs-8'}
                onChange={handleChange('faqs-8')} />
            <Accordion
                faqKey="faqs-9"
                expanded={expanded === 'faqs-9'}
                onChange={handleChange('faqs-9')} />
            <Accordion
                faqKey="faqs-10"
                expanded={expanded === 'faqs-10'}
                onChange={handleChange('faqs-10')} />
            <Accordion
                faqKey="faqs-11"
                expanded={expanded === 'faqs-11'}
                onChange={handleChange('faqs-11')} />
            <Accordion
                faqKey="faqs-12"
                expanded={expanded === 'faqs-12'}
                onChange={handleChange('faqs-12')} />
            <div className="section-title">{t('faqs-staying-title')}</div>
            <Accordion
                faqKey="faqs-13"
                expanded={expanded === 'faqs-13'}
                onChange={handleChange('faqs-13')} />
            <Accordion
                faqKey="faqs-14"
                expanded={expanded === 'faqs-14'}
                onChange={handleChange('faqs-14')} />
            <Accordion
                faqKey="faqs-15"
                expanded={expanded === 'faqs-15'}
                onChange={handleChange('faqs-15')} />
            <Accordion
                faqKey="faqs-16"
                expanded={expanded === 'faqs-16'}
                onChange={handleChange('faqs-16')} />
            <div className="section-title">{t('faqs-suitcase-title')}</div>
            <Accordion
                faqKey="faqs-17"
                expanded={expanded === 'faqs-17'}
                onChange={handleChange('faqs-17')} />
            <Accordion
                faqKey="faqs-18"
                expanded={expanded === 'faqs-18'}
                onChange={handleChange('faqs-18')} />
            <Accordion
                faqKey="faqs-19"
                expanded={expanded === 'faqs-19'}
                onChange={handleChange('faqs-19')} />
        </div>
    )
}

export default FAQs;