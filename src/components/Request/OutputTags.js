import React from 'react';

export default function OutputTags (props) {
    const tags = props.tags;
    
    if(tags !== undefined) {
        var output = tags.map((item) => {
            return (
                <div key={item.id}>{item.name}</div>
            );
        });
        return output;
    }
    else {
        return <></>
    }
               
}