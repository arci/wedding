import './RSVP.css';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

function RSVP() {
    let [scriptLoaded, setScriptLoaded] = useState<boolean>(false);

    const handleScript = (e: Event) => {
        setScriptLoaded(e.type === "load" ? true : false);
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://my.forms.app/static/iframe.js";
        script.type = "text/javascript";
        script.addEventListener("load", handleScript);
        script.addEventListener("error", handleScript);
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    useEffect(() => {
        if (scriptLoaded) {
            // @ts-ignore
            new formsapp('63642d1ce5740e14f434de70', {
                width: '100%',
                height: 'formHeight'
            });
        }
    }, [scriptLoaded]);

    const { t } = useTranslation()

    return (
        <div id="rsvp" className="page">
            <div className="page-title">{t('rsvp-title')}</div>
            { /* @ts-ignore */}
            <div formsappid="63642d1ce5740e14f434de70" />
        </div>
    )
}

export default RSVP;