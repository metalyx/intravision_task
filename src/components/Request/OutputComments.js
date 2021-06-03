import React from 'react';
import OutputDate from './OutputDate';


export default function OutputComments(props) {
    
    const comments = props.props.lifetimeItems;
    if (comments !== undefined){
        var output = comments.map((item) => {
            if (item.comment === null) {
                return <></>
            }
            var date = item.createdAt;
            date = new Date(date);
            return (
                <div key={item.id} className="main_comment_comment">
                    <div className="circle_comment"></div>
                    <div className="main_comment_exact">
                        <div>
                            {item.userName}
                        </div>
                        <div className="comment_date">
                            {<OutputDate date={date}/>}
                        </div>
                        <div className="comment_text">
                            {item.comment}
                        </div>
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