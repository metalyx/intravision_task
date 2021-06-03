import React, {Component, useEffect} from 'react';
import Menu from './Menu';
import Search from './Search';
import './css/main.css';
import { fetchRequests, openChangeRequest, closeChangeRequest, getExactRequest, fetchPriorities, postNewRequest, fetchStatus, fetchUsers, putRequest} from './redux/actions';
import { connect, useDispatch, useSelector } from 'react-redux';
import { Redirect, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Mock from './components/Mock';
import Content from './Content';


const mapStateToProps = state => {
    return {
        requests: state.requests,
        // componentRequest: state.componentRequest,
        exactRequest: state.exactRequest,
        priorities: state.priorities,
        status: state.status,
        users: state.users
    }
}

const mapDispatchToProps = dispatch => ({
    fetchRequests: () => {dispatch(fetchRequests())},
    getExactRequest: (id) => {dispatch(getExactRequest(id))},
    openChangeRequest: () => {dispatch(openChangeRequest())},
    closeChangeRequest: () => {dispatch(closeChangeRequest())},
    fetchPriorities: () => {dispatch(fetchPriorities())},
    postNewRequest: (data) => {dispatch(postNewRequest(data))},
    fetchStatus: () => {dispatch(fetchStatus())},
    fetchUsers: () => {dispatch(fetchUsers())},
    putRequest: (data) => {dispatch(putRequest(data))}
})

// class Main extends Component {


    
    

//     render () {
        
//         return (
            
//                 <div className="container">
//                     <Menu className="menu"
//                      requests={this.props.requests.requests}
//                      exactRequest={this.props.exactRequest}
//                      getExactRequest={this.props.getExactRequest}
//                      openChangeRequest={this.props.openChangeRequest}
//                      closeChangeRequest={this.props.closeChangeRequest}
//                      priorities={this.props.priorities}
//                      postNewRequest={this.props.postNewRequest}
//                      status={this.props.status}
//                      users={this.props.users}
//                      putRequest={this.props.putRequest}
//                      fetchRequests={this.props.fetchRequests}
//                      fetchPriorities={this.props.fetchPriorities}
//                      fetchStatus={this.props.fetchStatus}
//                      fetchUsers={this.props.fetchUsers}/>
//                     <Search className="search" />
//                     {/* <Content className="content" /> */}
                    
//                 </div>
            
//         );
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Main);



export default function Main() {
    
    
    
    
    return (
        <div className="container">
            
            
         <Router>
         <Menu />
         <Switch>
             <Route path="/base"><Mock data={"База знаний"}/></Route>
             <Route path="/workers"><Mock data={"Сотрудники"} /></Route>
             <Route path="/clients"><Mock data={"Клиенты"} /></Route>
             <Route path="/finance"><Mock data={"Активы"} /></Route>
             <Route path="/settings"><Mock data={"Настройки"} /></Route>
             <Route path="/requests">
                 <Content 
                // requests={requests}
                // exactRequest={exactRequest}
                // getExactRequest={this.props.getExactRequest}
                // openChangeRequest={this.props.openChangeRequest}
                // closeChangeRequest={this.props.closeChangeRequest}
                // priorities={priorities}
                // postNewRequest={this.props.postNewRequest}
                // status={status}
                // users={users}
                // putRequest={this.props.putRequest}
                // fetchRequests={this.props.fetchRequests}
                // fetchPriorities={this.props.fetchPriorities}
                // fetchStatus={this.props.fetchStatus}
                // fetchUsers={this.props.fetchUsers}
                />
            </Route>
            <Redirect to="/requests"></Redirect>
        </Switch>
      </Router>
        </div>
    );
}