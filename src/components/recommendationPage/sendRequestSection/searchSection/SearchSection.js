import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import SearchResultsTable from './SearchResultsTable'

const SearchSection = ({searchResults, searchUsersFunction}) => {
    const [searchText,
        setSearchText] = useState("")
    const [selectedResult, setSelectedResult] = useState([])
    const onChangeSearch = (e) => {
        const {name, value} = e.target
        setSearchText(value)
    }

    const onClickSearchBarResult = (e) =>{
    const result = []
    searchResults.forEach(item => {
            if (item.id == e.target.dataset.result) {
                result.push(item)
            }
        })
        setSelectedResult(result)
        //console.log(selectedResult)
        //console.log(result)
        document.querySelector(".recommendations-page .recommendation-search .search-reults-bar").classList.add("d-none")
    }
    

    const onSearchInputKeyUp = (e) => {
        searchUsersFunction(searchText)
        document.querySelector(".recommendations-page .recommendation-search .search-reults-bar").classList.remove("d-none")
    }

    return (
        <section className="">
            <div className="recommendation-search">
                <div className=" my-4 recommendation-search-bar-section">
                    <div className="wrapper">
                        <div className=" search-bar">
                            <input
                                onKeyUp={onSearchInputKeyUp}
                                onChange={onChangeSearch}
                                value={searchText}
                                type="text"
                                placeholder="Search For Users..."
                                className=""/>
                            <FontAwesomeIcon icon={faSearch}/>
                        </div>
                    </div>
                    <div className="search-reults-bar d-none">
                        {searchResults.map(searchResult => {
                            return (
                                <div onClick = {onClickSearchBarResult} data-result = {searchResult.id} className="search-bar-search-result d-flex align-items-center">
                                    <img src={searchResult.profile_image} alt="" srcset=""/>
                                    <div>
                                        <h4 className="name">{searchResult.last_name} {searchResult.first_name}</h4>
                                    </div>
                                    <div>
                                        <h4 className="email">{searchResult.email}</h4>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="search-results">
                    <div className="head">
                        <h4>Search Results</h4>
                    </div>
                    {searchResults.length > 0
                        ? <SearchResultsTable searchResults={selectedResult}/>
                        : <span>No Search Results Found</span>}
                </div>
            </div>
        </section>

    )
}

export default SearchSection
