import React, { useCallback } from 'react';

export default function OutputOptions(props) {
    
    const array = props.array;
    const selectedId = props.selectedId;

    let result = array.map((item) => {
            if (item.id === selectedId) {
                return <></>
            }
            else{
                return (
                    <option key={item.id} value={item.name}>{item.name}</option>
                );
            }
        })
    
   
    return result;
}