import React, {Component, useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RenderRequest from './components/RenderRequest';
import './css/content.css'
import Loading from './Loading';
import { closeChangeRequest, fetchPriorities, fetchRequests, fetchStatus, fetchUsers, getExactRequest, openChangeRequest } from './redux/actions';
import Request from './Request';

// class Content extends Component {

//     constructor(props) {
//         super(props);

//         this.requestRef = React.createRef(<Request/>);

//         this.renderRequests = this.renderRequests.bind(this);
//     }

    

//     changeRequest(id) {
//         if (id !== undefined) {
//             this.props.closeChangeRequest();
//             this.props.getExactRequest(id);
//             this.props.openChangeRequest();
//         }
//         else {
//             return <></>
//         }
//     }

//     openRequest(isOpen) {
        
        
//         if (this.props.exactRequest !== undefined){
//             if(isOpen === true) {
                
                
//                 return <Request key={this.props.exactRequest.request.id} 
//                 request={this.props.exactRequest}
//                 closeChangeRequest={this.props.closeChangeRequest}
//                 postNewRequest={this.props.postNewRequest}
//                 status={this.props.status}
//                 users={this.props.users}
//                 putRequest={this.props.putRequest}
//                 fetchRequests={this.props.fetchRequests}
//                 fetchPriorities={this.props.fetchPriorities}
//                 fetchStatus={this.props.fetchStatus}
//                 fetchUsers={this.props.fetchUsers}
//                 getExactRequest={(id) => this.props.getExactRequest(id)}/>
                
//             }
//             else {
//                 return <></>
//             }
//         }
        
//     }

   

//     render () {
       
//         if(this.props.requests === undefined) {
//             return <></>
//         }
//         else {
//         return(
//             <div className="content_container">
//                 <div className="content_new_request">
//                     <button onClick={() => {this.createRequest()}}>Создать заявку</button>
//                 </div>
                
//                     <div className="content_main">
//                         <div className="content_request__card">
//                             <div></div>
//                             <div><p>ID</p></div>
//                             <div><p>Название</p></div>
//                             <div><p>Статус</p></div>
//                             <div><p>Исполнитель</p></div>
//                         </div>
//                         {this.renderRequests()}
                        
                        
//                     </div>
//                     {this.openRequest(this.props.exactRequest.isOpen)}
//                 </div>
                
            
//         );
//         }
//     }
// }

// export default Content;


export default function Content(props) {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchRequests());
        dispatch(fetchPriorities());
        dispatch(fetchStatus());
        dispatch(fetchUsers());
        
    }, []);
    const exactRequest = useSelector(state => state.exactRequest);
    const isOpen = exactRequest.isOpen;
    const openRequest = useCallback(() => {
        if (isOpen) {
            return <Request />
        }
        else {
            return <></>
        }
        
    }, [isOpen])

    function createRequest() {
        dispatch(closeChangeRequest());
        dispatch(getExactRequest(-1));
        dispatch(openChangeRequest());
    }

    
    
    const state = useSelector(state => state);

    return (
        <div className="content_container">
            <div className="content_new_request">
                <button onClick={() => {createRequest()}}>Создать заявку</button>
            </div>
            <div className="content_main">
                <div className="content_request__card">
                    <div></div>
                    <div><p>ID</p></div>
                    <div><p>Название</p></div>
                    <div><p>Статус</p></div>
                    <div><p>Исполнитель</p></div>
                </div>
                <RenderRequest props={state}/>
            </div>
            {openRequest(isOpen)}
        </div>
                
    );
}