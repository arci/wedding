import './LanguageSelector.css';

import "../../i18n/i18n";
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
    const { i18n } = useTranslation()

    return (
        <div className="lang" >
            <span onClick={() => i18n.changeLanguage("en")} className={i18n.language == "en" ? "current" : ""}>en</span>|
            <span onClick={() => i18n.changeLanguage("it")} className={i18n.language == "it" ? "current" : ""}>it</span>|
            <span onClick={() => i18n.changeLanguage("pt")} className={i18n.language == "pt" ? "current" : ""}>pt</span>
        </div>
    )
}

export default LanguageSelector;