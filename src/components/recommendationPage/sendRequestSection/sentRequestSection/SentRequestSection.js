import {faMailBulk} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import SentRequestSectionTable from './SentRequestSectionTable'

const SentRequestSection = ({ sentCount, sentRequests }) => {
    return (
        <section className="recommendation-your-requests">
            <div className="head">
                <h4>Your Requests</h4>
                <div className="num-recommendations">
                    <FontAwesomeIcon className="icon" icon={faMailBulk}/>
                    <span>{sentCount}</span>
                </div>
            </div>
            {sentCount > 0
                ? <SentRequestSectionTable
                        sentRequests={sentRequests}/>
                : <span>No Request Found</span>}
        </section>

    )
}

export default SentRequestSection
