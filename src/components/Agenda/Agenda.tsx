import './Agenda.css';

import { useTranslation } from 'react-i18next';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import SaturdayPlan from './SaturdayPlan';
import SundayPlan from './SundayPlan';

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
                        <SaturdayPlan />
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="day-plan">
                        <SundayPlan />
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Agenda;