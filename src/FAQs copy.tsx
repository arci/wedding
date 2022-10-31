import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';


function NotFound() {
    const { t, i18n } = useTranslation()

    return (
        <div id="not-found">
            <p>Ops!</p>
            <p>Page not found</p>
        </div>
    )
}

export default NotFound;