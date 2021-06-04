import React, {Component} from 'react';
import './css/menu.css';
import MenuLinks from './components/MenuLinks';
import logo from './shared/images/logo.png';

export default function Menu() {
    return (
        <>
            <section className="menu_container">
                <div className="menu_logo"><img alt="Логотип" src={logo}/></div>
                <MenuLinks />
            </section>
        </>
    );
}