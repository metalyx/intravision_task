import React from 'react';
import { Link } from 'react-router-dom';


import base from '../shared/images/base.png';
import req from '../shared/images/req.png';
import workers from '../shared/images/workers.png';
import clients from '../shared/images/clients.png';
import finance from '../shared/images/finance.png';
import options from '../shared/images/options.png';

export default function MenuLinks() {
    return (
        <>
            <Link style={{ textDecoration: 'none' }} to="/base"><div className="menu_base"><img alt="База знаний" src={base}/><p>База знаний</p></div></Link>
            <Link style={{ textDecoration: 'none' }} to="/requests"><div className="menu_requests"><img alt="Заявки" src={req}/><p>Заявки</p></div></Link>
            <Link style={{ textDecoration: 'none' }} to="/workers"> <div className="menu_workers"><img alt="Сотрудники" src={workers}/><p>Сотрудники</p></div></Link>
            <Link style={{ textDecoration: 'none' }} to="/clients"> <div className="menu_clients"><img alt="Клиенты" src={clients}/><p>Клиенты</p></div></Link>
            <Link style={{ textDecoration: 'none' }} to="/finance"> <div className="menu_finance"><img alt="Активы" src={finance}/><p>Активы</p></div></Link>
            <Link style={{ textDecoration: 'none' }} to="/settings"> <div className="menu_options"><img alt="Настройки" src={options}/><p>Настройки</p></div></Link>
        </>
    )
}