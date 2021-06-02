import React from 'react'
import Request from './Request'
import '../assets/table.css'
const RecommendationRequest = ( { receivedRecommendationRequests}) => {
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
                    {receivedRecommendationRequests.map(recievedRecommendationRequest => {
                        console.log(recievedRecommendationRequest)
                        return(
                            <Request key = {recievedRecommendationRequest.id} recievedRecommendationRequest = {recievedRecommendationRequest}/>
                        )
                    })}
                </tbody>
            </table>
        </section>
    )
}

export default RecommendationRequest
