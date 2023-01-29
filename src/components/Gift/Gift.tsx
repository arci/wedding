import './Gift.css';
import head from './images/head.png';
import tail from './images/tail.png';

import { useTranslation } from 'react-i18next';
import { Tooltip } from '@mui/material';

function Gift() {
    const { t } = useTranslation()

    const setClipboard = (text: string) => {
        navigator.clipboard.writeText(text)
    }

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
                        <div className="money-content">
                            <span>{t('gift-money-euro-subtitle')}&nbsp;</span>
                            <Tooltip title={t('gift-copy')} disableTouchListener>
                                <span className='money-detail' onClick={() => setClipboard(t('gift-money-euro-detail'))}>{t('gift-money-euro-detail')} </span>
                            </Tooltip>
                        </div>
                    </div>
                    <div className="money-option">
                        <div className="money-title">{t('gift-money-real-title')}</div>
                        <div className="money-content">
                            <span>{t('gift-money-real-subtitle')}&nbsp;</span>
                            <Tooltip title={t('gift-copy')} disableTouchListener>
                                <span className='money-detail' onClick={() => setClipboard(t('gift-money-real-detail'))}>{t('gift-money-real-detail')}</span>
                            </Tooltip>
                        </div>
                    </div>
                </div>
            </div>

            <img className="main-img tail" src={tail} alt="Future travels" />
        </div>
    )
}

export default Gift;