import './App.css';
import Main from './Main';
import Content from './Content';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Mock from './components/Mock';
import { useEffect } from 'react';
import { fetchPriorities, fetchRequests, fetchStatus, fetchUsers } from './redux/actions';
import Menu from './Menu';



function App() {

  

  // useEffect(async () => {
  //   dispatch(fetchRequests());
  //   dispatch(fetchStatus());
  //   dispatch(fetchUsers());
  //   dispatch(fetchPriorities());
  // }, [requests, status, users, priorities]);

  
  return (
    
    <Main />
      // <Router>
      //   <Main>
      //     <Menu />
      //     <Switch>
      //       <Route path="/base"><Mock data={"База знаний"}/></Route>
      //       <Route path="/workers"><Mock data={"Сотрудники"} /></Route>
      //       <Route path="/clients"><Mock data={"Клиенты"} /></Route>
      //       <Route path="/finance"><Mock data={"Активы"} /></Route>
      //       <Route path="/settings"><Mock data={"Настройки"} /></Route> */}
      //       <Route path="/requests">
      //           <Content 
      //           requests={requests}
      //           // exactRequest={exactRequest}
      //           // getExactRequest={this.props.getExactRequest}
      //           // openChangeRequest={this.props.openChangeRequest}
      //           // closeChangeRequest={this.props.closeChangeRequest}
      //           priorities={priorities}
      //           // postNewRequest={this.props.postNewRequest}
      //           status={status}
      //           users={users}
      //           // putRequest={this.props.putRequest}
      //           // fetchRequests={this.props.fetchRequests}
      //           // fetchPriorities={this.props.fetchPriorities}
      //           // fetchStatus={this.props.fetchStatus}
      //           // fetchUsers={this.props.fetchUsers}
      //           />
      //       </Route>
      //       <Redirect to="/requests"></Redirect>
      //   </Switch>
      //   </Main>
       
      // </Router>
    
    
  );
}

export default App;
