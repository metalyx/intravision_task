import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { closeChangeRequest, postNewRequest } from '../../redux/exactRequest/actions';
// import { closeChangeRequest, postNewRequest } from '../../redux/actions';


export default function NewRequest() {
    
    const dispatch = useDispatch();
    const initialState = {
        name: "",
        description: ""
    }
    const [newRequest, setState] = useState(initialState);

    function close() {
        setState({
            name: "",
            description: ""
        });
        dispatch(closeChangeRequest());
        
        
    }

    function handleName({target: {value}}) {
        setState({
            ...newRequest,
            name: value
        });
    }

    function handleDesc({target: {value}}) {
        setState({
            ...newRequest,
            description: value
        });
    }

    function saveRequest(e) {
        e.preventDefault();

        if (newRequest.name === "" || newRequest.name === undefined) {

        }
        else {
            dispatch(postNewRequest(JSON.stringify(newRequest)));
            close();
        }
        
    }
    return (
        <div className="request_grid">
            <div className="request_header">
                <div>
                    Новая заявка
                </div>
                <div>
                </div>
                <div>
                    <button className="close_btn" onClick={() => close()}>&times;</button>
                </div>
            </div>
            <form className="request_main">
                <div>
                    <div><p>Название</p></div>
                    <textarea className="request_new_textarea1" onChange={handleName} value={newRequest.name}></textarea>
                </div>
                <div>
                    <div><p>Описание</p></div>
                    <textarea className="request_new_textarea2" onChange={handleDesc} value={newRequest.description}></textarea>
                </div>
                <div className="request_main_button">
                    <button onClick={(e) => saveRequest(e)}>Сохранить</button>
                </div>
            </form>
        </div>
    );

}