import { Button } from '@mui/material';
import { useTranslation } from 'react-i18next';
import Section from './Section';

function SaturdayPlan() {
    const { t } = useTranslation()

    return (
        <>
            <p className='section-title'>Hotel Check-In</p>
            <Section name="what">
                <p>If you are staying with us, you need to check-in at your arrival. You will receive your room keys and the complete schedule for the weekend.</p>
            </Section>
            <Section name="time">
                <p>Rooms will be ready from 2pm.</p>
                <p>Arrived too early? No problem! You can leave your luggage at the desk and chill in the pool.</p>
            </Section>
            <Section name="where">
                <p>Dimora di Spartivento<br />SS115, km 323<br />between Ragusa and Modica, Sicily.</p>
                <Button className="button-secondary" variant="outlined" target="_blank" href='https://goo.gl/maps/yce7DY31rtnVvMqz7'>Get directions</Button>
            </Section>
            <p className='section-title'>Welcome Cocktail & Granitas</p>
            <Section name="what">
                <p>Well, it is Summer. It is hot. Maybe it is too hot. We know.  Ease into the weekend with a refreshing drink, a granita or some bites on the gorgeous pool of La Dimora.</p>
            </Section>
            <Section name="dress code">
                <p>Summer Casual Chic. It is a summer wedding, we don't expect anything fancy and over the top. We want you to look and feel like your best self, but still be comfortable.</p>
            </Section>
            <Section name="time">
                <p>from 6pm to 7:30pm</p>
            </Section>
            <Section name="where">
                <p>By the Pool</p>
            </Section>
            <p className='section-title'>Cerimony</p>
            <Section name="what">
                <p>The main event! Time to greet the Groom and the Bride and toast! We don’t like long and boring cerimonies, so it will be short - no more than 20 minutes.</p>
            </Section>
            <Section name="time">
                <p>7:30pm</p>
            </Section>
            <Section name="where">
                <p>Courtyard</p>
            </Section>
            <p className='section-title'>Antipasti</p>
            <Section name="what">
                <p>Let’s catch up with old friends, meet new ones, and toast to the start of a fun weekend.</p>
            </Section>
            <Section name="time">
                <p>8 pm</p>
            </Section>
            <Section name="where">
                <p>Main House</p>
            </Section>
            <p className='section-title'>Dinner</p>
            <Section name="what">
                <p>TBD</p>
            </Section>
            <Section name="time">
                <p>9 pm</p>
            </Section>
            <Section name="where">
                <p>Courtyard</p>
            </Section>
            <p className='section-title'>AfterParty</p>
            <Section name="what">
                <p>TBD</p>
            </Section>
            <Section name="time">
                <p>22 pm - 1 am</p>
            </Section>
            <Section name="where">
                <p>Pool Side</p>
            </Section>
        </>
    )
}

export default SaturdayPlan;