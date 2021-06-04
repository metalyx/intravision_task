import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NewRequest from './../components/request/NewRequest';
import OutputComments from './../components/request/OutputComments';
import OutputDate from './../components/request/OutputDate';
import OutputOptions from './../components/request/OutputOptions';
import OutputTags from './../components/request/OutputTags';
import '../css/request.css';


import { closeChangeRequest, putRequest } from '../redux/exactRequest/actions';

var _id = -1;


export default function Request() {

    const dispatch = useDispatch();
    const request = useSelector(state => state.exactRequest.request);
    const status = useSelector(state => state.status.status);
    const users = useSelector(state => state.users.users);

    
    const initialState = {
        comment: "",
        selectedStatus: request.statusName,
        selectedExecutor: request.executorName

    };
   
    const [thestate, setState] = useState(initialState);

    function  getStatusId (statusName) {
        let exactStatus = status.filter((item) => item.name === statusName)[0];
        return exactStatus.id;
     }
     function  getExecutorId (executorName) {
     let exactExecutor = users.filter((item) => item.name === executorName)[0];
     return exactExecutor.id;
     }
    
    useEffect (() => {
        setState({
            ...thestate,
            selectedStatus: request.statusName,
            selectedExecutor: request.executorName
        })
    }, [request.statusName, request.executorName]);

    useEffect(() => {
        console.log("1")
        if(thestate.selectedStatus !== request.statusName && thestate.selectedStatus !== undefined) {
            let result = {
                id: request.id,
                statusId: getStatusId(thestate.selectedStatus),
                executorId: getExecutorId(thestate.selectedExecutor)
            }
            dispatch(putRequest(result));
        }
        if(thestate.selectedExecutor !== request.executorName && thestate.selectedExecutor !== undefined) {
            let result = {
                id: request.id,
                statusId: getStatusId(thestate.selectedStatus),
                executorId: getExecutorId(thestate.selectedExecutor)
            }
            dispatch(putRequest(result));
        }   
    }, [thestate.selectedStatus, thestate.selectedExecutor])

    // if (thestate.selectedStatus === undefined) {
    //     return <Loading />
    // }
    // else {

    function saveComment() {
        let comment = thestate.comment;
            if (comment !== "" && comment !== undefined) {
                let result = {
                    comment: comment,
                    id: request.id,
                    statusId: getStatusId(thestate.selectedStatus),
                    executorId: getExecutorId(thestate.selectedExecutor)

                }
                
                dispatch(putRequest(result));
                
                setState({
                    ...thestate,
                    comment: ""
                })
            }
    }

    function handleStatus(e) {
        
        let value = e.target.value;
        setState({
            ...thestate,
            selectedStatus: value
        });
        
        
        if (thestate.selectedStatus !== request.statusName) {
            
            
        }
        
    }

    function handleExecutor ({target: {value}}) {
        setState({
            ...thestate,
            selectedExecutor: value
        });
        if (thestate.selectedExecutor !== request.executorName) {
            let result = {
                id: request.id,
                statusId: getStatusId(thestate.selectedStatus),
                executorId: getExecutorId(thestate.selectedExecutor)
            }
            dispatch(putRequest(result));
        }
    }

    function handleComment({target: {value}}) {
        setState({
            ...thestate,
            comment: value
        });
    }
    if (request.length === 0) {
            return <NewRequest />
        }
        else {
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
                            <button className="close_btn" onClick={() => dispatch(closeChangeRequest())}>&times;</button>
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
                                <textarea onChange={handleComment} value={thestate.comment}></textarea>    
                            </div>
                            <div><button onClick={() => saveComment()}>Сохранить</button></div>
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
                                    <select value={thestate.selectedStatus} onChange={handleStatus}>
                                        <option value={request.statusName}>{request.statusName}</option>
                                        <OutputOptions array={status} selectedId={request.statusId}/>
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
                                    <select value={thestate.selectedExecutor} onChange={handleExecutor}>
                                        <option key={request.executorId} value={request.executorName}>{request.executorName}</option>
                                        <OutputOptions array={users} selectedId={request.executorId} />
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
                            <div>{<OutputDate date={request.resolutionDatePlan} notComment={true} />}</div>
                        </div>
                        <div className="req_tags">
                            <div>Теги</div>
                            <div><OutputTags tags={request.tags}/></div>
                        </div>
                    </div>
                </div>
            )
        }
}
