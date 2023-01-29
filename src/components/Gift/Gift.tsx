import './Gift.css';
import head from './images/head.png';
import tail from './images/tail.png';

import { useTranslation } from 'react-i18next';

function Gift() {
    const { t } = useTranslation()

    return (
        <div id="gift" className="page">
            <div className="page-title">{t('gift-title')}</div>
            <div className="gift-name">{t('gift-name')}</div>
            <div className="gift-description">{t('gift-description')}</div>

            <img className="main-img" src={head} alt="Past travels" />

            <div className="section text">
                <div className="gift-1">{t('gift-1')}</div>
                <div className="gift-2">{t('gift-2')}</div>
                <div className="gift-3">{t('gift-3')}</div>
                <div className="gift-4">{t('gift-4')}</div>
                <div className="gift-5">{t('gift-5')}</div>
            </div>

            <div className="section money">
                <div className='money-options'>
                    <div className="money-option">
                        <div className="money-title">{t('gift-money-euro-title')}</div>
                        <div>
                            <span>{t('gift-money-euro-subtitle')}</span>
                            <span className='money-detail'>{t('gift-money-euro-detail')}</span>
                        </div>
                    </div>
                    <div className="money-option">
                        <div className="money-title">{t('gift-money-real-title')}</div>
                        <div>
                            <span>{t('gift-money-real-subtitle')}</span>
                            <span className='money-detail'>{t('gift-money-real-detail')}</span>
                        </div>
                    </div>
                </div>
            </div>

            <img className="main-img tail" src={tail} alt="Future travels" />
        </div>
    )
}

export default Gift;