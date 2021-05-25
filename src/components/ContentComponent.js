import React, {Component} from 'react';
import '../css/content.css'
import Request from './RequestComponent';

class Content extends Component {

    constructor(props) {
        super(props);

        this.requestRef = React.createRef(<Request/>);

        this.renderRequests = this.renderRequests.bind(this);
    }

    createRequest() {
        this.props.closeChangeRequest();
        this.props.getExactRequest(-1);
        this.props.openChangeRequest();
    }

    changeRequest(id) {
        if (id !== undefined) {
            this.props.closeChangeRequest();
            this.props.getExactRequest(id);
            this.props.openChangeRequest();
        }
        else {
            return <></>
        }
    }

    openRequest(isOpen) {
        
        
        if (this.props.exactRequest !== undefined){
            if(isOpen === true) {
                
                
                return <Request 
                request={this.props.exactRequest}
                closeChangeRequest={this.props.closeChangeRequest}
                postNewRequest={this.props.postNewRequest}
                status={this.props.status}
                users={this.props.users}
                putRequest={this.props.putRequest}/>
                
            }
            else {
                return <></>
            }
        }
        
    }

    renderRequests() {
        const requests = this.props.requests.value;
        const priorities = this.props.priorities.priorities;
        if(requests !== undefined){
            var allRequests = requests.map((item) => {
                var color = priorities.filter((prio) => prio.id === item.priorityId)[0];
                color = color.rgb;
                
                
                    return (
                        <div onClick={() => {this.changeRequest(item.id)}} key={item.id}  className="content_request__card">
                            <div style={{backgroundColor: color}}></div>
                            <div>{item.id}</div>
                            <div><p>{item.name}</p></div>
                            <div><span className="request_span" style={{background: item.statusRgb}}>{item.statusName}</span></div>
                            <div>{item.executorName}</div>
                        </div>
                        
                    );
                
            })
            
           return allRequests;
           
        }
        else {
            return <></>;
        }
        
        
       

        
       
    }

    render () {
        
        return(
            <div className="content_container">
                <div className="content_new_request">
                    <button onClick={() => {this.createRequest()}}>Создать заявку</button>
                </div>
                
                    <div className="content_main">
                        <div className="content_request__card">
                            <div></div>
                            <div><p>ID</p></div>
                            <div><p>Название</p></div>
                            <div><p>Статус</p></div>
                            <div><p>Исполнитель</p></div>
                        </div>
                        {this.renderRequests()}
                        
                        
                    </div>
                    {this.openRequest(this.props.exactRequest.isOpen)}
                </div>
                
            
        );
    }
}

export default Content;