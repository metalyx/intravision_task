import React, {Component, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OutputComments from './components/Request/OutputComments';
import './css/request.css';
import { closeChangeRequest } from './redux/actions';


export default function Request() {

    const dispatch = useDispatch();
    const request = useSelector(state => state.exactRequest.request);
    const initialState = {
        comment: "",
        selectedStatus: request.statusName,
        selectedExecutor: request.executorName

    };

    const [thestate, setState] = useState(initialState);
    if (request.length === 0 || request === undefined) {
        return <></>
    }
    else {
    
        
    
   
    
    function closeRequest() {
        dispatch(closeChangeRequest());
    }

    function handleComment({target: {value}}) {
        setState({
            ...thestate,
            comment: value
        });
    }

    function saveComment() {

    }

    function handleStatus({target: {value}}) {
        setState({
            ...thestate,
            selectedStatus: value
        });
    }

    function handleExecutor ({target: {value}}) {
        setState({
            ...thestate,
            selectedExecutor: value
        });
    }

    // Создать компонент OutputComments
    // Создать компонент OutputSelect
    // Создать компонент OutputExecutor
    // Создать компонент OutputTags
    // Создать компонент OutputDate
    
        return (
        
            <div className="request_grid">
                <div className="request_header">
                    <div>
                        №{request.id}
                    </div>
                    <div>
                        {request.name}
                    </div>
                    <div>
                        <button className="close_btn" onClick={() => closeRequest}>&times;</button>
                    </div>
                </div>
                <div className="request_main">
                    <div className="request_main_description">
                        <div><p>Описание</p></div>
                        <div>{request.description}</div>
                    </div>
                    <div>
                        <div>
                            <p>Добавление комментариев</p>
                            <textarea onChange={() => handleComment} value={thestate.comment}></textarea>    
                        </div>
                        <div><button onClick={() => saveComment}>Сохранить</button></div>
                    </div>
                    <div className="request_main_comments">
                        <div className="request_main_comment">
                            <OutputComments props={request} />
                        </div>
                    </div>
                </div>
                <div className="request_aside">
                    <div>
                        <div className="aside_status" style={{backgroundColor: request.statusRgb}}></div>
                        <div>
                            <form>
                                <select value={thestate.selectedStatus} onChange={() => handleStatus}>
                                    <option value={request.statusName}>{request.statusName}</option>
                                    {/* {this.outputSelect(request.statusId)} */}
                                </select>
                            </form>
                        </div>
                    </div>
                    <div>
                        <div>Заявитель</div>
                        <div></div>
                    </div>
                    <div>
                        <div>Создана</div>
                        <div>{request.initiatorName}</div>
                    </div>
                    <div>
                        <div>Исполнитель</div>
                        <div>
                            <form>
                                <select value={thestate.selectedExecutor} onChange={() => handleExecutor}>
                                    <option key={request.executorId} value={request.executorName}>{request.executorName}</option>
                                    {/* { this.outputExecutor(request.executorId)} */}
                                </select>
                            </form>
                        </div>
                    </div>
                    <div>
                        <div>Приоритет</div>
                        <div>{request.priorityName}</div>
                    </div>
                    <div>
                        <div>Срок</div>
                        {/* <div>{date}</div> */}
                    </div>
                    <div className="req_tags">
                        <div>Теги</div>
                        {/* <div>{this.outputTags(request.tags)}</div> */}
                    </div>
                </div>
            </div>
        )
    }
}


// var _id = 0;

// class Request extends Component {
//     constructor(props) {
//         super(props);

//         this.closeRequest = this.closeRequest.bind(this);
//         this.renderExactRequest = this.renderExactRequest.bind(this);
//         this.submitNewRequest = this.submitNewRequest.bind(this);
//         this.outputSelect = this.outputSelect.bind(this);
//         this.outputExecutor = this.outputExecutor.bind(this);
//         this.putRequest = this.putRequest.bind(this);
//         this.handleComment = this.handleComment.bind(this);
//         this.handleStatus = this.handleStatus.bind(this);
//         this.handleExecutor = this.handleExecutor.bind(this);
//         this.saveComment = this.saveComment.bind(this);

//         this.state = {
//             newRequestName: "",
//             newRequestDescription: "",
//             selectedStatus: this.props.request.request.statusName,
//             comment: "",
//             selectedExecutor: this.props.request.request.executorName,
//         }
//         _id = this.props.request.request.id;
//     }
   
//     componentDidUpdate() {
//         if(this.state.selectedStatus !== this.props.request.request.statusName && this.state.selectedStatus !== undefined) {
//             this.putRequest();
//         }
//         if(this.state.selectedExecutor !== this.props.request.request.executorName && this.state.selectedExecutor !== undefined) {
//             this.putRequest();
//         }
//         if(_id !== this.props.request.request.id){
            
//             _id = this.props.request.request.id;
//             this.setState({
//                 selectedStatus: this.props.request.request.statusName,
//                 comment: "",
//                 selectedExecutor: this.props.request.request.executorName,
//                 isOpen: false
//             })
//         }
//     }

//     closeRequest() {
//         this.props.closeChangeRequest();
//     }


//     


//     outputTags(tags) {
//         if(tags !== undefined) {
//             var output = tags.map((item) => {
//                 return (
//                     <div key={item.id}>{item.name}</div>
                    
//                 );
//             });
//             return output;
//         }
//         else {
//             return <></>
//         }
       
//     }
//     submitNewRequest(e) {
//         e.preventDefault();
//         var state = this.state;
//         var data = {
//             name: state.newRequestName,
//             description: state.newRequestDescription
//         }
        
//         if(data.name == "") {
//         }
//         else{
//             this.props.postNewRequest(JSON.stringify(data));
//         }
//     }
//     handleNewRequestName = ({target : { value }}) => {
//         this.setState({
//             newRequestName: value
//         })
//     }
//     handleNewRequestDescription = ({target : { value }}) => {
//         this.setState({
//             newRequestDescription: value
//         })
//     }
//     outputSelect(selectedId) {
//         const statuses = this.props.status.status;
        
    
//         let result = statuses.map((item) => {
//             if (item.id === selectedId) {
//                 return <></>
//             }
//             else{
//                 return (
//                     <option key={item.id} value={item.name}>{item.name}</option>
//                 );
//             }
//         })
        
//         return result;
//     }
//     outputExecutor(selectedId) {
//         const executors = this.props.users.users;
        
//         let result = executors.map((item) => {
//             if (item.id === selectedId) {
//                 return <></>
//             }
//             else {
//                 return (
//                     <option key={item.id} value={item.name}>{item.name}</option>
//                 );
//             }
//         })
//         return result;
//     }
//     putRequest() {
//         var status = this.state.selectedStatus;
        
//         var executor = this.state.selectedExecutor;
//         var exactRequest = this.props.request.request;

//         var users = this.props.users.users;
//         var statuses = this.props.status.status;

//         var result = {};
//         if (executor !== undefined) {
//             var executorId = users.filter((item) => item.name === executor)[0];
//             executorId = executorId.id;
//             result = {
//                 ...result,
//                 executorId: executorId
//             }
//         }
//         if(status !== undefined) {
//             var statusId = statuses.filter((item) => item.name === status)[0];
//             console.log(status);
//             statusId = statusId.id;
//             result = {
//                 ...result,
//                 statusId: statusId
//             }
//         }
//         if (result.statusId !== null || result.executorId !== null) {
//             result = {
//                 ...result,
//                 id: exactRequest.id
//             }
//             this.props.putRequest(result);   
//         }
//         else {
//             console.log("Nothing has changed")
//         }
//     }
//     handleComment({target: {value}}) {
//         this.setState({
//             comment: value
//         })
//     }
//     handleStatus({target: {value}}) {
        
//         this.setState({
//             selectedStatus: value
//         })
//     }
//     handleExecutor ({target: {value}}) {
//         this.setState({
//             selectedExecutor: value
//         })
//     }
//     saveComment () {
//         let comment = this.state.comment;
//         if (comment !== "" && comment !== undefined) {
//             let exactRequest = this.props.request.request;
            
//             let result = {
//                 comment: comment,
//                 id: exactRequest.id,
//                 statusId: this.props.request.request.statusId,
//                 executorId: this.props.request.request.executorId

//             }
//             console.log(result);
//             this.props.putRequest(result);
//             this.setState({
//                 comment: ""
//             })
//         }
//     }

//     renderExactRequest() {
        
//         const request = this.props.request.request;
//         if (request.length === 0) {
//             return (
//                 <div className="request_grid">
//                     <div className="request_header">
//                         <div>
//                             Новая заявка
//                         </div>
//                         <div>
//                         </div>
//                         <div>
//                             <button className="close_btn" onClick={this.closeRequest}>&times;</button>
//                         </div>
//                     </div>
//                     <form className="request_main">
//                         <div>
//                             <div><p>Название</p></div>
//                             <textarea className="request_new_textarea1" onChange={this.handleNewRequestName} value={this.state.newRequestName}></textarea>
//                         </div>
//                         <div>
//                             <div><p>Описание</p></div>
//                             <textarea className="request_new_textarea2" onChange={this.handleNewRequestDescription} value={this.state.newRequestDescription}></textarea>
//                         </div>
//                         <div className="request_main_button">
//                             <button onClick={this.submitNewRequest}>Сохранить</button>
//                         </div>
//                     </form>
//                 </div>
//             );
//         }
//         else {
//             var date = request.resolutionDatePlan;
//             date = new Date(date);
//             var days = date.getDate();
//             var months = date.getMonth();
//             var years = date.getFullYear();
//             if (days < 10) {
//                 days = "0" + days;
//             }
//             if (months < 10) {
//                 months = "0" + months;
//             }
//             date = days + "." + months + "." + years + "г." ;

//             return (
            // <div className="request_grid">
            //     <div className="request_header">
            //         <div>
            //             №{request.id}
            //         </div>
            //         <div>
            //             {request.name}
            //         </div>
            //         <div>
            //             <button className="close_btn" onClick={this.closeRequest}>&times;</button>
            //         </div>
            //     </div>
            //     <div className="request_main">
            //         <div className="request_main_description">
            //             <div><p>Описание</p></div>
            //             <div>{request.description}</div>
            //         </div>
            //         <div>
            //             <div>
            //                 <p>Добавление комментариев</p>
            //                 <textarea onChange={this.handleComment} value={this.state.comment}></textarea>    
            //             </div>
            //             <div><button onClick={this.saveComment}>Сохранить</button></div>
            //         </div>
            //         <div className="request_main_comments">
            //             <div className="request_main_comment">
            //                 {this.outputComments(request.lifetimeItems)}
            //             </div>
            //         </div>
            //     </div>
            //     <div className="request_aside">
            //         <div>
            //             <div className="aside_status" style={{backgroundColor: request.statusRgb}}></div>
            //             <div>
            //                 <form>
            //                     <select value={this.state.selectedStatus} onChange={this.handleStatus}>
            //                         <option value={request.statusName}>{request.statusName}</option>
            //                         {this.outputSelect(request.statusId)}
            //                     </select>
            //                 </form>
            //             </div>
            //         </div>
            //         <div>
            //             <div>Заявитель</div>
            //             <div></div>
            //         </div>
            //         <div>
            //             <div>Создана</div>
            //             <div>{request.initiatorName}</div>
            //         </div>
            //         <div>
            //             <div>Исполнитель</div>
            //             <div>
            //                 <form>
            //                     <select value={this.state.selectedExecutor} onChange={this.handleExecutor}>
            //                         <option key={request.executorId} value={request.executorName}>{request.executorName}</option>
            //                         { this.outputExecutor(request.executorId)}
            //                     </select>
            //                 </form>
            //             </div>
            //         </div>
            //         <div>
            //             <div>Приоритет</div>
            //             <div>{request.priorityName}</div>
            //         </div>
            //         <div>
            //             <div>Срок</div>
            //             <div>{date}</div>
            //         </div>
            //         <div className="req_tags">
            //             <div>Теги</div>
            //             <div>{this.outputTags(request.tags)}</div>
            //         </div>
            //     </div>
            // </div>
//             )
//         }
//     }

//     render () {
        
//         var req = this.props.request.request;
//         if (req === undefined) {
//             return <></>
//         }
//         else {
//             if(this.state.isOpen) {
//                 this.closeRequest();
//                 return (
//                     <></>
//                 );
//             }
//             else {
//                 return(
//                     <>
//                         <div key={req.id} className="content_request">
//                             {this.renderExactRequest()}
//                         </div>
//                     </>
//                 );
//             }
//         }
//     }
// }

// export default Request;