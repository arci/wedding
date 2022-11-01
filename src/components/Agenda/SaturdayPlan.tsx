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
            <p className='section-title'>Welcome Cocktail & Granitas</p>
            <Section name="time">
                <p>Rooms will be ready from 2pm.</p>
                <p>Arrived too early? No problem! You can leave your luggage at the desk and chill in the pool.</p>
            </Section>
            <p className='section-title'>Cerimony</p>
            <p className='section-title'>Antipasti</p>
            <p className='section-title'>Dinner</p>
            <p className='section-title'>AfterParty</p>
        </>
    )
}

export default SaturdayPlan;