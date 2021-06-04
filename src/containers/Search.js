import React from 'react';
import '../css/search.css';

export default function Search() {
    return (
        <div className="search_container">
            <div className="search_input">
                <input type="text" name="search"></input>
            </div>
        </div>
    );
}