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
            <div className="page-title">{t('faqs-title')}</div>
            <div className="section-title">The Wedding</div>
            <Accordion
                title="test1"
                content="test content"
                expanded={expanded === 'panel1'}
                onChange={handleChange('panel1')} />
            <Accordion
                title="test2"
                content="test content"
                expanded={expanded === 'panel2'}
                onChange={handleChange('panel2')} />
            <div className="section-title">Getting There</div>
            <Accordion
                title="test3"
                content="test content"
                expanded={expanded === 'panel3'}
                onChange={handleChange('panel3')} />
            <Accordion
                title="test4"
                content="test content"
                expanded={expanded === 'panel4'}
                onChange={handleChange('panel4')} />
        </div>
    )
}

export default FAQs;