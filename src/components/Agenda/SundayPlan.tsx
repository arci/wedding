import { useTranslation } from 'react-i18next';
import Section from './Section';

function SundayPlan() {
    const { t } = useTranslation()

    return (
        <>
            <p className='section-title'>Brunch all together</p>
            <Section name="what">
                <p>After an evening of partying, there's nothing better than a late breakfast.</p>
                <p>Early bird? No worries, we've got you covered. Head to the restaurant area! La Dimora's lovely staff will greet you with pastries and coffee.</p>
                <p className='note'><b>OBS</b>: If you decided to stay just one night, you'll need to check-out by 10am, before heading to the brunch. You can leave your luggage by the reception.</p>
            </Section>
            <Section name="dress code">
                <p>Whatever you want. Don't worry  about dressing up. We will just wear t-shirts and shorts or a light summer dress, with flip-flops.</p>
            </Section>
            <Section name="time">
                <p>from 11am to 12:30 pm</p>
            </Section>
            <Section name="where">
                <p>Dinner hall</p>
            </Section>
            <p className='section-title'>Free time!</p>
            <Section name="what">
                <p>The offical agenda ends here!Let's have a lazy Sunday and relax in the sun. Feel free to relax by the pool or go to a nearby beach.</p>
                <p>Not sure what to do?<br />Check out our activities guide</p>
            </Section>
            <Section name="time">
                <p>from 13pm</p>
            </Section>
            <Section name="where">
                <p>By the Pool</p>
            </Section>
        </>
    )
}

export default SundayPlan;