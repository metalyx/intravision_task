import React, {Component} from 'react';
import '../css/menu.css';
import logo from '../shared/images/logo.png';
import base from '../shared/images/base.png';
import req from '../shared/images/req.png';
import workers from '../shared/images/workers.png';
import clients from '../shared/images/clients.png';
import finance from '../shared/images/finance.png';
import options from '../shared/images/options.png';
import { BrowserRouter as Router,
    Switch,
    Route,
    Link, 
    Redirect} from 'react-router-dom';
import Content from './ContentComponent';

class Menu extends Component {
    

    handler(name)  {
        console.log("You clicked on " + name) ;
    }

    empty(data) {
        return (
            <>
            <h1 style={{margin: "15px"}}>{data}</h1>
            </>
        );
        
    }

    // requests={this.props.requests.requests}
    // exactRequest={this.props.exactRequest}
    // getExactRequest={this.props.getExactRequest}
    // openChangeRequest={this.props.openChangeRequest}
    // closeChangeRequest={this.props.closeChangeRequest}
    // priorities={this.props.priorities}
    // postNewRequest={this.props.postNewRequest}
    // status={this.props.status}
    // users={this.props.users}
    // putRequest={this.props.putRequest}

    render () {
        
        return(
            <Router>
            <section className="menu_container">
                
                <div className="menu_logo"><img alt="Логотип" src={logo}/></div>
                <Link style={{ textDecoration: 'none' }} to="/base"><div className="menu_base"><img alt="База знаний" src={base}/><p>База знаний</p></div></Link>
                <Link style={{ textDecoration: 'none' }} to="/requests"><div className="menu_requests"><img alt="Заявки" src={req}/><p>Заявки</p></div></Link>
                <Link style={{ textDecoration: 'none' }} to="/workers"> <div className="menu_workers"><img alt="Сотрудники" src={workers}/><p>Сотрудники</p></div></Link>
                <Link style={{ textDecoration: 'none' }} to="/clients"> <div className="menu_clients"><img alt="Клиенты" src={clients}/><p>Клиенты</p></div></Link>
                <Link style={{ textDecoration: 'none' }} to="/finance"> <div className="menu_finance"><img alt="Активы" src={finance}/><p>Активы</p></div></Link>
                <Link style={{ textDecoration: 'none' }} to="/settings"> <div className="menu_options"><img alt="Настройки" src={options}/><p>Настройки</p></div></Link>
            </section>
            <Switch>
                    <Route path="/base">{() => this.empty("База знаний")}</Route>
                    <Route path="/workers">{() => this.empty("Сотрудники")}</Route>
                    <Route path="/clients">{() => this.empty("Клиенты")}</Route>
                    <Route path="/finance">{() => this.empty("Активы")}</Route>
                    <Route path="/settings">{() => this.empty("Настройки")}</Route>
                    <Route path="/requests">
                        <Content 
                        requests={this.props.requests}
                        exactRequest={this.props.exactRequest}
                        getExactRequest={this.props.getExactRequest}
                        openChangeRequest={this.props.openChangeRequest}
                        closeChangeRequest={this.props.closeChangeRequest}
                        priorities={this.props.priorities}
                        postNewRequest={this.props.postNewRequest}
                        status={this.props.status}
                        users={this.props.users}
                        putRequest={this.props.putRequest}
                        fetchRequests={this.props.fetchRequests}
                        fetchPriorities={this.props.fetchPriorities}
                        fetchStatus={this.props.fetchStatus}
                        fetchUsers={this.props.fetchUsers}
                        />
                    </Route>
                    <Redirect to="/requests"></Redirect>
                    
                </Switch>
            </Router>
        );
    }
}

export default Menu;