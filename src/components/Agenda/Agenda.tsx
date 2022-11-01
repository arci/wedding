import './Agenda.css';

import { useTranslation } from 'react-i18next';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function Agenda() {
    const { t } = useTranslation()

    return (
        <div id="agenda" className="page">
            <div className="page-title">{t('agenda-title')}</div>
            <Tabs>
                <TabList>
                    <Tab>Saturday</Tab>
                    <Tab>Sunday</Tab>
                </TabList>

                <TabPanel>
                    <p>Saturday plan</p>
                </TabPanel>
                <TabPanel>
                    <p>Sunday  plan</p>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Agenda;