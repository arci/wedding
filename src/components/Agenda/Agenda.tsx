import './Agenda.css';

import { useTranslation } from 'react-i18next';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Section from './Section';

function Agenda() {
    const { t } = useTranslation()

    return (
        <div id="agenda" className="page">
            <div className="page-title">{t('agenda-title')}</div>
            <Tabs>
                <TabList>
                    <Tab>{t('saturday')}</Tab>
                    <Tab>{t('sunday')}</Tab>
                </TabList>
                <TabPanel>
                    <div className="day-plan">
                        <Section name="suitcase" title={t("saturday-1")}>
                            <p>{t("saturday-1-body")}</p>
                        </Section>
                        <Section name="wine" title={t("saturday-2")}>
                            <p>{t("saturday-2-body")}</p>
                        </Section>
                        <Section name="rings" title={t("saturday-3")}>
                            <p>{t("saturday-3-body")}</p>
                        </Section>
                        <Section name="cheers" title={t("saturday-4")}>
                            <p>{t("saturday-4-body")}</p>
                        </Section>
                        <Section name="food" title={t("saturday-5")}>
                            <p>{t("saturday-5-body")}</p>
                        </Section>
                        <Section name="music" title={t("saturday-6")}>
                            <p>{t("saturday-6-body-a")}</p>
                            <p>{t("saturday-6-body-b")}</p>
                        </Section>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="day-plan">
                        <Section name="coffee" title={t("sunday-1")}>
                            <p>{t("sunday-1-body-a")}</p>
                            <p>{t("sunday-1-body-b")}</p>
                        </Section>
                        <Section name="sun" title={t("sunday-2")}>
                            <p>{t("sunday-2-body")}</p>
                        </Section>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Agenda;