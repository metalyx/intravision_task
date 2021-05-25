import React, {Component} from 'react';
import '../css/search.css';


class Search extends Component {


    render () {
        return(
            <div className="search_container">
                <div className="search_input">
                    
                    <input type="text" name="search"></input>
                   
                </div>
            </div>
        );
    }
}

export default Search;