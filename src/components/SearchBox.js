import React from 'react';

const SearchBox = ({searchfield,searchChange}) => {
    return (
        <div>        
            <input className='p3 h2 ba b--green bg-lightest-blue tc'
             type = 'search' 
             placeholder='search robots'
             onChange ={searchChange}
             />
        </div>
    );
}
export default SearchBox;