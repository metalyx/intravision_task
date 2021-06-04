import React from 'react';
import { useDispatch } from 'react-redux';
import Loading from '../Loading';
import { closeChangeRequest, getExactRequest, openChangeRequest } from '../redux/exactRequest/actions';
// import { closeChangeRequest, getExactRequest, openChangeRequest } from '../redux/actions';

export default function RenderRequest(props) {
    
    console.log(props)
    props = props.props;
    const dispatch = useDispatch();

    function openExactRequest (id) {
        dispatch(closeChangeRequest());
        dispatch(getExactRequest(id));
        dispatch(openChangeRequest());
    }

    if (props.requests) { 
        const requests = props.requests.requests.value;
        const priorities = props.priorities.priorities;
        if(requests !== undefined){
            var allRequests = requests.map((item) => {
                var color = priorities.filter((prio) => prio.id === item.priorityId)[0];
                if(color === undefined) {
                    return <></>
                }
                else {
                    color = color.rgb;
                    return (
                        <div onClick={() => openExactRequest(item.id)} key={item.id}  className="content_request__card">
                            <div style={{backgroundColor: color}}></div>
                            <div>{item.id}</div>
                            <div><p>{item.name}</p></div>
                            <div><span className="request_span" style={{background: item.statusRgb}}>{item.statusName}</span></div>
                            <div>{item.executorName}</div>
                        </div>
                    );
                }
            }); 
           return allRequests;
        }
        else {
            return <Loading />;
        }   
    }
    else {
        return <Loading />;
    }  
    
}

// function renderRequests() {
        
//     const requests = this.props.requests.value;
//     const priorities = this.props.priorities.priorities;
//     if(requests !== undefined){
//         var allRequests = requests.map((item) => {
//             var color = priorities.filter((prio) => prio.id === item.priorityId)[0];
//             if(color === undefined) {
//                 return <></>
//             }
//             else {
//                 color = color.rgb;
            
            
//                 return (
//                     <div onClick={() => {this.changeRequest(item.id)}} key={item.id}  className="content_request__card">
//                         <div style={{backgroundColor: color}}></div>
//                         <div>{item.id}</div>
//                         <div><p>{item.name}</p></div>
//                         <div><span className="request_span" style={{background: item.statusRgb}}>{item.statusName}</span></div>
//                         <div>{item.executorName}</div>
//                     </div>
                    
//                 );
//             }
//         }); 
//        return allRequests;
//     }
//     else {
//         return <Loading />;
//     }   
// }