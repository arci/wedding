import './FAQs.css';

import { useTranslation } from 'react-i18next';
import { useState } from 'react';

import Accordion from './Accordion';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

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
                id="faqs-1"
                title={t("faqs-1")}
                content={
                    <>
                        {t("faqs-1-answer")}
                        <p>
                            <Link to="/rsvp">
                                <Button className="button-primary" variant="outlined">{t('rsvp')}</Button>
                            </Link>
                        </p>
                    </>
                }
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                id="faqs-2"
                title={t("faqs-2")}
                content={<>{t("faqs-2-answer")}</>}
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                id="faqs-3"
                title={t("faqs-3")}
                content={<>{t("faqs-3-answer")}</>}
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                id="faqs-4"
                title={t("faqs-4")}
                content={
                    <>
                        {t("faqs-4-answer")}
                        <p>
                            <Link to="/rsvp">
                                <Button className="button-primary" variant="outlined">{t('rsvp')}</Button>
                            </Link>
                        </p>
                    </>
                }
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                id="faqs-5"
                title={t("faqs-5")}
                content={<>{t("faqs-5-answer")}</>}
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                id="faqs-6"
                title={t("faqs-6")}
                content={<>
                    {t("faqs-6-answer")}
                    <p>
                        <Link to="/gift">
                            <Button className="button-primary" variant="outlined">{t('gift')}</Button>
                        </Link>
                    </p>
                </>}
                expanded={expanded}
                onChange={handleChange} />
            <div className="section-title">{t('faqs-getting-there-title')}</div>
            <Accordion
                id="faqs-7"
                title={t("faqs-7")}
                content={<>{t("faqs-7-answer")}</>}
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                id="faqs-8"
                title={t("faqs-8")}
                content={
                    <>
                        <span>{t("faqs-8-answer-a")}</span>
                        <p>{t("faqs-8-answer-b")}</p>
                        <p>
                            <Link to="/rsvp">
                                <Button className="button-primary" variant="outlined">{t('rsvp')}</Button>
                            </Link>
                        </p>
                    </>
                }
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                id="faqs-9"
                title={t("faqs-9")}
                content={<>{t("faqs-9-answer")}</>}
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                id="faqs-10"
                title={t("faqs-10")}
                content={
                    <>
                        <span>{t("faqs-10-answer-a")}</span>
                        <p>{t("faqs-10-answer-b")}</p>
                        <p>
                            <Link to="/rsvp">
                                <Button className="button-primary" variant="outlined">{t('rsvp')}</Button>
                            </Link>
                        </p>
                    </>
                }
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                id="faqs-11"
                title={t("faqs-11")}
                content={
                    <>
                        {t("faqs-11-answer")}
                        <p>
                            <Link to="/rsvp">
                                <Button className="button-primary" variant="outlined">{t('rsvp')}</Button>
                            </Link>
                        </p>
                    </>
                }
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                id="faqs-12"
                title={t("faqs-12")}
                content={<>{t("faqs-12-answer")}</>}
                expanded={expanded}
                onChange={handleChange} />
            <div className="section-title">{t('faqs-staying-title')}</div>
            <Accordion
                id="faqs-13"
                title={t("faqs-13")}
                content={
                    <>
                        <span>{t("faqs-13-answer-a")}</span>
                        <p>{t("faqs-13-answer-b")}</p>
                        <p>
                            <Link to="/rsvp">
                                <Button className="button-primary" variant="outlined">{t('rsvp')}</Button>
                            </Link>
                        </p>
                    </>
                }
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                id="faqs-14"
                title={t("faqs-14")}
                content={<>{t("faqs-14-answer")}</>}
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                id="faqs-15"
                title={t("faqs-15")}
                content={<>{t("faqs-15-answer")}</>}
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                id="faqs-16"
                title={t("faqs-16")}
                content={
                    <>
                        <span>{t("faqs-16-answer")}</span>
                        <p>
                            <Button
                                className="button-secondary"
                                variant="outlined"
                                target="_blank"
                                href={t("faqs-16-link-href")}>
                                {t("faqs-16-link")}
                            </Button>
                        </p>
                    </>
                }
                expanded={expanded}
                onChange={handleChange} />
            <div className="section-title">{t('faqs-suitcase-title')}</div>
            <Accordion
                id="faqs-17"
                title={t("faqs-17")}
                content={
                    <>
                        <span>{t("faqs-17-answer-a")}</span>
                        <p>{t("faqs-17-answer-b")}</p>
                        <p>{t("faqs-17-answer-c")}</p>
                        <p>{t("faqs-17-answer-d")}</p>
                    </>}
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                id="faqs-18"
                title={t("faqs-18")}
                content={
                    <>
                        <span>{t("faqs-18-answer-a")}</span>
                        <p>{t("faqs-18-answer-b")}</p>
                    </>
                }
                expanded={expanded}
                onChange={handleChange} />
            <Accordion
                id="faqs-19"
                title={t("faqs-19")}
                content={<>{t("faqs-19-answer")}</>}
                expanded={expanded}
                onChange={handleChange} />
        </div>
    )
}

export default FAQs;