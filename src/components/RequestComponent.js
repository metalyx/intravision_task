import React, {Component} from 'react';
import '../css/request.css';
import ChangesSuccess from './ChangesSuccess';

var _id = 0;

class Request extends Component {
    constructor(props) {
        super(props);

        this.closeRequest = this.closeRequest.bind(this);
        this.renderExactRequest = this.renderExactRequest.bind(this);
        this.submitNewRequest = this.submitNewRequest.bind(this);
        this.outputSelect = this.outputSelect.bind(this);
        this.outputExecutor = this.outputExecutor.bind(this);
        this.putRequest = this.putRequest.bind(this);
        this.handleComment = this.handleComment.bind(this);
        this.handleStatus = this.handleStatus.bind(this);
        this.handleExecutor = this.handleExecutor.bind(this);
        this.openModal = this.openModal.bind(this);
        
        
        this.state = {
            newRequestName: "",
            newRequestDescription: "",
            selectedStatus: this.props.request.request.statusName,
            comment: "",
            selectedExecutor: this.props.request.request.executorName,
            isOpen: false,
        }
       
        _id = this.props.request.request.id;
    }
   
    
    componentDidUpdate() {
        if(_id !== this.props.request.request.id){
            _id = this.props.request.request.id;
            this.setState({
                selectedStatus: this.props.request.request.statusName,
                comment: "",
                selectedExecutor: this.props.request.request.executorName,
                isOpen: false
            })
        }
    }

    closeRequest() {
        
        this.props.closeChangeRequest();
        
        
    }

    printMonth(months) {
        
        switch(parseInt(months)) {
            case 1:
               return "января";
            case 2:
                return "февраля";
            case 3:
                return "марта";
            case 4:
                return "апреля";
            case 5:
                return "мая";
            case 6:
                return "июня";
            case 7:
                return "июля";
            case 8:
                return "августа";
            case 9:
                return "сентября";
            case 10:
                return "октября";
            case 11:
                return "ноября";
            case 12:
                return "декабря";
        }
    }

    printDate (date) {
        var days = date.getDate();
        var months = date.getMonth();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        months = this.printMonth(months);
        
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        
        var result = days + " " + months + ", " + hours + ":" + minutes + " прокомментировал";
        return result;
    }

    outputComments(comments) {
        if (comments !== undefined){
            
            var output = comments.map((item) => {
                var date = item.createdAt;
                date = new Date(date);
                // var days = date.getDate();
                // var months = date.getMonth();
                
                // var years = date.getFullYear();
                // if (days < 10) {
                //     days = "0" + days;
                // }
                // if (months < 10) {
                //     months = "0" + months;
                // }
                // date = days + "." + months + "." + years + "г." ;

                date = this.printDate(date);



                return (
                    <div className="main_comment_exact">
                        <div>
                            {item.userName}
                        </div>
                        <div className="comment_date">
                            {date}
                        </div>
                        <div className="comment_text">
                            {item.comment}
                        </div>
                    </div>
                );
            })
        }
        else {
            return <></>
        }
        
        return output;
    }

    outputTags(tags) {
        if(tags !== undefined) {
            var output = tags.map((item) => {
                return (
                    <div>{item.name}</div>
                );
            });
            return output;
        }
        else {
            return <></>
        }
       
    }

    submitNewRequest(e) {
        e.preventDefault();
        var state = this.state;
        var data = {
            name: state.newRequestName,
            description: state.newRequestDescription
        }
        
        this.props.postNewRequest(JSON.stringify(data));
        
    }

    handleNewRequestName = ({target : { value }}) => {
        this.setState({
            newRequestName: value
        })
    }

    handleNewRequestDescription = ({target : { value }}) => {
        this.setState({
            newRequestDescription: value
        })
    }

    outputSelect(selectedId) {
        const statuses = this.props.status.status;
        
    
        var result = statuses.map((item) => {
            if (item.id === selectedId) {
                return <></>
            }
            else{
                return (
                    <option value={item.name}>{item.name}</option>
                );
            }
        })
        
        return result;
    }

    outputExecutor(selectedId) {
        const executors = this.props.users.users;
        
        var result = executors.map((item) => {
            if (item.id === selectedId) {
                return <></>
            }
            else {
                return (
                    <option value={item.name}>{item.name}</option>
                );
            }
        })
        return result;
    }

    putRequest() {
        var status = this.state.selectedStatus;
        var comment = this.state.comment;
        var executor = this.state.selectedExecutor;
        var exactRequest = this.props.request.request;

        var users = this.props.users.users;
        var statuses = this.props.status.status;

        var result = {};
        if (executor !== undefined) {
            var executorId = users.filter((item) => item.name === executor)[0];
            executorId = executorId.id;
            result = {
                ...result,
                executorId: executorId
            }
        }
        
        
        if (comment !== "" && comment !== undefined) {
            result = {
                ...result,
                comment: comment
            }
        }
        
        if(status !== undefined) {
            var statusId = statuses.filter((item) => item.name === status)[0];
            statusId = statusId.id;
            result = {
                ...result,
                statusId: statusId
            }
        }
        
        
        if (result.statusId !== null || result.executorId !== null || result.comment !== undefined) {
            result = {
                ...result,
                id: exactRequest.id
            }
           
            
            this.props.putRequest(JSON.stringify(result));
            
            this.setState({
                isOpen: true
            })
            // this.props.fetchRequests();
            // this.props.fetchPriorities();
            // this.props.fetchStatus();
            // this.props.fetchUsers();
            // this.props.getExactRequest(_id);
            
            
        }
        else {
            console.log("Nothing has changed")
        }
    }

   
    openModal() {
        
        if (this.state.isOpen) {
            console.log("1")
            
            return <ChangesSuccess isOpen={this.state.isOpen}/>
           
        }
        else {
            return <></>
        }
        
        
    }

    handleComment({target: {value}}) {
        this.setState({
            comment: value
        })
        
    }

    handleStatus({target: {value}}) {
        this.setState({
            selectedStatus: value
        })
    }

    handleExecutor ({target: {value}}) {
        this.setState({
            selectedExecutor: value
        })
    }

    

    renderExactRequest() {
        
        const request = this.props.request.request;
        if (request.length === 0) {
            return (
                <div className="request_grid">
                    <div className="request_header">
                        <div>
                            Новая заявка
                        </div>
                        <div>
                            
                        </div>
                        <div>
                            <button className="close_btn" onClick={this.closeRequest}>&times;</button>
                        </div>
                    </div>
                    <form className="request_main">
                        <div>
                            <div><p>Название</p></div>
                            <textarea className="request_new_textarea1" onChange={this.handleNewRequestName} value={this.state.newRequestName}></textarea>
                        </div>
                        <div>
                            <div><p>Описание</p></div>
                            <textarea className="request_new_textarea2" onChange={this.handleNewRequestDescription} value={this.state.newRequestDescription}></textarea>
                        </div>
                        <div>
                            <div><button onClick={this.submitNewRequest}>Сохранить</button></div>
                        </div>
                    </form>
                   
        
            </div>
            );
        }
        else {
            var date = request.resolutionDatePlan;
            date = new Date(date);
            var days = date.getDate();
            var months = date.getMonth();
            
            var years = date.getFullYear();
            if (days < 10) {
                days = "0" + days;
            }
            if (months < 10) {
                months = "0" + months;
            }
            date = days + "." + months + "." + years + "г." ;

            

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
                        <button className="close_btn" onClick={this.closeRequest}>&times;</button>
                    </div>
                </div>
                <div className="request_main">
                    <div>
                        <div><p>Описание</p></div>
                        <div>{request.description}</div>
                    </div>
                    <div>
                        <div>
                            <p>Добавление комментариев</p>
                            <textarea onChange={this.handleComment} value={this.state.comment}></textarea>    
                        </div>
                        <div><button onClick={this.putRequest}>Сохранить</button></div>
                    </div>
                    <div>
                        <div></div>
                        <div className="request_main_comment">
                            {this.outputComments(request.lifetimeItems)}
                        </div>
                    </div>
                </div>
                <div className="request_aside">
                    <div>
                        <div className="aside_status" style={{backgroundColor: request.statusRgb}}></div>
                        <div>
                            {/* {request.statusName} */}
                            <form>
                                <select value={this.state.selectedStatus} onChange={this.handleStatus}>
                                    <option value={request.statusName}>{request.statusName}</option>
                                    {this.outputSelect(request.statusId)}
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
                            {/* {request.executorName} */}
                            <form>
                                <select value={this.state.selectedExecutor} onChange={this.handleExecutor}>
                                    <option value={request.executorName}>{request.executorName}</option>
                                    {this.outputExecutor(request.executorId)}
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
                        <div>{date}</div>
                    </div>
                    <div className="req_tags">
                        <div>Теги</div>
                        <div>{this.outputTags(request.tags)}</div>
                    </div>
                </div>
        
            </div>
            )
        }
    }

    render () {
        if (this.props.request.isLoading) {
            return <></>
        }
        else {
            if(this.state.isOpen) {
                this.closeRequest();
                return (
                    <ChangesSuccess isOpen={true} />
                );
            }
            else {
                return(
                    <>
                        <div className="content_request">
                            {this.renderExactRequest()}
                            {/* {this.openModal()} */}
                        </div>
                        
                    </>
                );
            }
            
        }
        
      
        
    }
}

export default Request;