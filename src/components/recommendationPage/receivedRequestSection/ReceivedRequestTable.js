import React from 'react'
import '../../../assets/table.css'
import RecievedRequest from './RecievedRequest'

const ReceivedRequestTable = ( {receivedRequests} ) => {
    return (
        <section className="recommendation-request">    
            <table class="recommendation-table">
                <thead>
                    <tr>
                        <th scope="col">From</th>
                        <th scope="col">Job Description</th>
                        <th scope="col">Date Sent
                        </th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {receivedRequests.map(receivedRequest => {
                        return (
                            <RecievedRequest receivedRequest = {receivedRequest}/>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}

export default ReceivedRequestTable
