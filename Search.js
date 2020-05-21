import React from 'react';

const Search =({searchemail, isEmailValid, emailfield}) =>{
    return(
        <div className="pa2">
            <input
                className="pa3 ba b--green bg-lightest-blue" 
                type='search' 
                placeholder='search robots with email'
                onChange={searchemail}
            />
            <button className="pa3 ba b--green bg-lightest-blue">Search</button>
            <span>{isEmailValid ? '' : emailfield ? 'Not a valid email' : ''}</span>
        </div>
    );
}

export default Search;