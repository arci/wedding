import './LanguageSelector.css';

import { availableLanguages } from '../../i18n/i18n';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
    const { i18n } = useTranslation()

    return (
        <div id="lang" >
            {availableLanguages.map((language) =>
            (<span key={language}
                onClick={() => i18n.changeLanguage(language)}
                className={i18n.language.includes(language) ? "current" : ""}>
                {language.toLocaleUpperCase()}
            </span>)
            )
            }
        </div>
    )
}

export default LanguageSelector;