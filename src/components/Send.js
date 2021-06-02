import React from 'react'
import '../assets/tablerow.css'

const Send = ( { sentRecommendationRequest }) => {

    return (
        <tr className = "table-row">
        <td className = "info">
            <div className="d-flex align-items-center">
                <img src={sentRecommendationRequest.receiver_pic} alt="" srcset="" />
               <div>
                   <h4 className="name">{sentRecommendationRequest.receiver_name}</h4>
                   <h4 className="email">johndoe@email.com</h4>
                   </div> 
                
            </div>
        </td>
        <td className = "job">
            <div>
                <h4 className="description">{sentRecommendationRequest.receiver_job_title}</h4>
                <a href= "" className="company">{sentRecommendationRequest.receiver_company}</a>
            </div>
        </td>
        <td className = "date">{ new Date(sentRecommendationRequest.created_at).toLocaleDateString()}</td>
        <td className = "status"> {
            (()=>{
                if (sentRecommendationRequest.accepted === -1){
                    return (<span className="rejected">Rejected</span>)
                }else if (sentRecommendationRequest.accepted === 0){
                    return (<span className="pending">Pending</span>)
                }else {
                    return (<span className="recommended">Recommended</span>)
                }
            })()
        }</td>
        <td className = "action">
            <a href="" className="cancel">Cancel Request</a>
        </td>
    </tr>
    )
}

export default Send
