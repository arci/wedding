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
                        <Section name="suitcase" title="Hotel Check-In">
                            <p>If you are staying with us, you need to check-in at your arrival. You will receive your room keys and the complete schedule for the weekend.</p>
                        </Section>
                        <Section name="wine" title="Welcome Drink">
                            <p>Well, it is Summer. It is hot. Maybe it is too hot. We know.  Ease into the weekend with a refreshing drink, a granita or some bites on the gorgeous pool of La Dimora.</p>
                        </Section>
                        <Section name="rings" title="Ceremony">
                            <p>The main event! Time to greet the Groom and the Bride and toast! We don't like long and boring ceremonies, so it will be short - no more than 20 minutes.</p>
                        </Section>
                        <Section name="cheers" title="Toast and aperitivo">
                            <p>Let's catch up with old friends, meet new ones, and toast to the start of a fun weekend.</p>
                        </Section>
                        <Section name="food" title="Dinner">
                            <p>Let's catch up with old friends, meet new ones, and toast to the start of a fun weekend.</p>
                        </Section>
                        <Section name="music" title="After party">
                            <p>Open bar and DJ set. Do we need to say more?</p>
                            <p>While the dress code is cocktail attire, be sure to bring comfy shoes to show off your moves on the dance floor.</p>
                        </Section>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div className="day-plan">
                        <Section name="coffee" title="Brunch all together">
                            <p>After an evening of partying, there's nothing better than a late breakfast.</p>
                            <p>Early bird? No worries, we've got you covered. Head to the restaurant area! La Dimora's lovely staff will greet you with pastries and coffee.</p>
                        </Section>
                        <Section name="sun" title="Free time!">
                            <p>The official agenda ends here! Let's have a lazy Sunday and relax in the sun. Feel free to relax by the pool or go to a nearby beach.</p>
                        </Section>
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Agenda;