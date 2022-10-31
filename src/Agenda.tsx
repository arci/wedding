import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import logo from './logo.svg';


function Agenda() {
    const { t, i18n } = useTranslation()

    return (
        <div id="agenda">
            <p>TODO</p>
        </div>
    )
}

export default Agenda;