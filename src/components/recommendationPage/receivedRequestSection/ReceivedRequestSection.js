import {faMailBulk} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import React from 'react'
import ReceivedRequestTable from './ReceivedRequestTable'

const ReceivedRequestSection = ({receivedCount, receivedRequests}) => {
    return (
        <div className="recieved">
            <div className="head">
                <h4>Received Requests</h4>
                <div className="num-recommendations">
                    <FontAwesomeIcon className="icon" icon={faMailBulk}/>
                    <span>{receivedCount}</span>
                </div>
            </div>
            <div className="recieved-table">
                {receivedCount > 0
                    ?<ReceivedRequestTable receivedRequests={receivedRequests}/>
                    : <span>No Request Found</span>}
                    
            </div>
        </div>
    )
}

export default ReceivedRequestSection
