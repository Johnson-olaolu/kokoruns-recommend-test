import React from 'react'
import Send from './Send'

const RecommendationSend = ( { sentRecommendationRequests }) => {
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
                {sentRecommendationRequests.map(sentRecommendationRequest => {
                    return (
                        <Send key = {sentRecommendationRequest.id} sentRecommendationRequest = {sentRecommendationRequest}/>
                    )
                })}
            </tbody>
        </table>
    </section>
    )
}

export default RecommendationSend
