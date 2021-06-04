import React, {Component, useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import RenderRequest from './RenderRequest';
import '../css/content.css'
import { closeChangeRequest, getExactRequest, openChangeRequest } from '../redux/exactRequest/actions';
import { fetchPriorities } from '../redux/priorities/actions';
import { fetchRequests } from '../redux/requests/actions';
import { fetchStatus } from '../redux/status/actions';
import { fetchUsers } from '../redux/users/actions';

import Request from './Request';


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