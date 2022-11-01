import { useTranslation } from 'react-i18next';

function SaturdayPlan() {
    const { t } = useTranslation()

    return (
        <>
            <p className='section-title'>Hotel Check-In</p>
            <div className='section'>
                <div className='key'>what</div>
                <div className='content'>
                    <p>If you are staying with us, you need to check-in at your arrival. You will receive your room keys and the complete schedule for the weekend.</p>
                </div>
            </div>
            <p className='section-title'>Welcome Cocktail & Granitas</p>
            <div className='section'>
                <div className='key'>time</div>
                <div className='content'>
                    <p>Rooms will be ready from 2pm.</p>
                    <p>Arrived too early? No problem! You can leave your luggage at the desk and chill in the pool.</p>
                </div>
            </div>
            <p className='section-title'>Cerimony</p>
            <p className='section-title'>Antipasti</p>
            <p className='section-title'>Dinner</p>
            <p className='section-title'>AfterParty</p>
        </>
    )
}

export default SaturdayPlan;