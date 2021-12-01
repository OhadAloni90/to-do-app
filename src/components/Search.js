import React from 'react'
import { MdSearch } from 'react-icons/md';

export const Search = ({handleSearchNote}) => {
    return (
        <div>
            <div className="search">
            <MdSearch className="search-icons" size="1.3rem"/>
            <input onChange={(e)=>handleSearchNote(e.target.value)} type="text" placeholder="Type to search a note"/>
            </div>
        </div>
    )
}

export default Search;