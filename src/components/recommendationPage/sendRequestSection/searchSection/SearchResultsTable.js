import React from 'react'
import SearchResult from './SearchResult'

const SearchResultsTable = ({searchResults}) => {
    return (
        <section className ="recommendation-send">
            <table class="recommendation-table">
                <tbody>
                    {searchResults.map(searchResult => {
                        return (
                            <SearchResult searchResult = {searchResult}/>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}

export default SearchResultsTable
