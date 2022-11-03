import './Footer.css';
import pencil from './pencil.svg';
import code from './code.svg';

import { useTranslation } from 'react-i18next';

function Footer() {
    const { t } = useTranslation()

    return (
        <div id="footer">
            <div className='bride'>
                <img src={pencil} alt="pencil" />
                <span>{t('footer-design')}</span>
            </div>
            <div className='groom'>
                <img src={code} alt="code" />
                <span>{t('footer-code')}</span>
            </div>
        </div>
    )
}

export default Footer;