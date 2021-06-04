import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import SearchResultsTable from './SearchResultsTable'

const SearchSection = ( {searchResults, searchUsersFunction} ) => {
    const [searchText, setSearchText] = useState("")
    //const searchResults = [1,2,3]
    const onChangeSearch = (e) => {
        const {name, value} = e.target
        setSearchText(value)
    }
    const onClickSearch = () =>{
        searchUsersFunction(searchText)
    }
    const onSearchInputKeyUp = (e) =>{
        if(e.which === 13){
            searchUsersFunction(searchText)
        }
    }

    return (
        <section className="">
            <div className="recommendation-search">
                <div className=" py-4">
                    <div className="wrapper">
                        <div className=" search-bar">
                            <input onKeyUp = {onSearchInputKeyUp}  onChange = {onChangeSearch} value = {searchText} type="text" placeholder="Search For Users..." className=""/>
                            <FontAwesomeIcon onClick={onClickSearch} icon={faSearch}/>
                        </div>
                    </div>
                </div>
                <div className="search-results">
                    <div className="head">
                        <h4>Search Results</h4>
                    </div>
                    {searchResults.length > 0
                        ? <SearchResultsTable searchResults = {searchResults}/>
                        : <span>No Search Results Found</span>}
                </div>
            </div>
        </section>

    )
}

export default SearchSection
