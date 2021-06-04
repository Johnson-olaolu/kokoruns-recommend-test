import React from 'react'
import SentRequest from './SentRequest'

const SentRequestSectionTable = ({ sentRequests }) => {
    return (
        <section className ="recommendation-request">
        <table class="recommendation-table">
            <thead>
                <tr>
                    <th scope="col">From</th>
                    <th scope="col">Job Description</th>
                    <th scope="col">Date Sent </th> 
                    <th scope="col">Status</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {sentRequests.map(sentRequest => {
                    return (
                        <SentRequest sentRequest = {sentRequest}/>
                    )
                })}
            </tbody>
        </table>
    </section>
    )
}

export default SentRequestSectionTable
