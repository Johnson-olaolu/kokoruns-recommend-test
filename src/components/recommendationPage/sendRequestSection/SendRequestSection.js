import React from 'react'
import SearchSection from './searchSection/SearchSection'
import SentRequestSection from './sentRequestSection/SentRequestSection'

const SendRequestSection = ( {sentCount, sentRequests, searchUsersFunction, searchResults} ) => {
    return (
        <section className="send-request-section">
            <div className="head">
                <h4>Send Requests</h4>
            </div>
            <SearchSection searchUsersFunction = {searchUsersFunction} searchResults = {searchResults}/>
            <SentRequestSection sentCount = {sentCount}  sentRequests = {sentRequests}/>
        </section>
    )
}

export default SendRequestSection
