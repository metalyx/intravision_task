import React, {Component} from 'react';
import './css/menu.css';
import MenuLinks from './components/MenuLinks';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link, 
    Redirect} from 'react-router-dom';
import Content from './Content';
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