import React, {Component, useEffect} from 'react';
import Menu from './Menu';
import Search from './Search';
import './css/main.css';
import { fetchRequests, openChangeRequest, closeChangeRequest, getExactRequest, fetchPriorities, postNewRequest, fetchStatus, fetchUsers, putRequest} from './redux/actions';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Mock from './components/Mock';
import Content from './Content';




export default function Main() {
    return (
        <div className="container">
            
            
         <Router>
         <Menu />
         <Search />
         <Switch>
             <Route path="/base"><Mock data={"База знаний"}/></Route>
             <Route path="/workers"><Mock data={"Сотрудники"} /></Route>
             <Route path="/clients"><Mock data={"Клиенты"} /></Route>
             <Route path="/finance"><Mock data={"Активы"} /></Route>
             <Route path="/settings"><Mock data={"Настройки"} /></Route>
             <Route path="/requests"><Content/></Route>
            <Redirect to="/requests"></Redirect>
        </Switch>
      </Router>
        </div>
    );
}