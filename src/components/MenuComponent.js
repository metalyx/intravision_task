import React, {Component} from 'react';
import '../css/menu.css';
import logo from '../shared/images/logo.png';
import base from '../shared/images/base.png';
import req from '../shared/images/req.png';
import workers from '../shared/images/workers.png';
import clients from '../shared/images/clients.png';
import finance from '../shared/images/finance.png';
import options from '../shared/images/options.png';

class Menu extends Component {
    

    handler(name)  {
        console.log("You clicked on " + name) ;
    }



    render () {
        return(
            <section className="menu_container">
                <div className="menu_logo"><img src={logo}/></div>
                <div onClick={() => this.handler("base")} className="menu_base"><img src={base}/><p>База знаний</p></div>
                <div onClick={() => this.handler("requests")} className="menu_requests"><img src={req}/><p>Заявки</p></div>
                <div onClick={() => this.handler("workers")} className="menu_workers"><img src={workers}/><p>Сотрудники</p></div>
                <div onClick={() => this.handler("clients")} className="menu_clients"><img src={clients}/><p>Клиенты</p></div>
                <div onClick={() => this.handler("finance")} className="menu_finance"><img src={finance}/><p>Активы</p></div>
                <div onClick={() => this.handler("options")} className="menu_options"><img src={options}/><p>Настройки</p></div>
            </section>
        );
    }
}

export default Menu;