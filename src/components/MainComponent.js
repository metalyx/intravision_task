import React, {Component} from 'react';
import Content from './ContentComponent';
import Menu from './MenuComponent';
import Search from './SearchComponent';
import '../css/main.css';
import { fetchRequests, openChangeRequest, closeChangeRequest, getExactRequest, fetchPriorities, postNewRequest, fetchStatus, fetchUsers, putRequest} from '../redux/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';


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

class Main extends Component {


    componentDidMount () {
        this.props.fetchRequests();
        this.props.fetchPriorities();
        this.props.fetchStatus();
        this.props.fetchUsers();
        console.log("componentDidMount")
    }

    render () {
        
        return (
            
                <div className="container">
                    <Menu className="menu"
                     requests={this.props.requests.requests}
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
                     fetchUsers={this.props.fetchUsers}/>
                    <Search className="search" />
                    {/* <Content className="content" /> */}
                    
                </div>
            
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);