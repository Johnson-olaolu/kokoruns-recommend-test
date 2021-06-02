import React, { useState, useEffect } from 'react'

const ViewModal = ({RequestId , RequestData}) => {
    const [requestData, setRequestData] = useState({})
    useEffect(() => {
        RequestData.forEach(request => {
            console.log({request, RequestId})
            if (request.id === RequestId){
                setRequestData(request)              
            }
        }) 
    }, [RequestData, RequestId])

    const closeViewRequest = () => {
        document.querySelector(".modal-background").classList.add("d-none")
        document.querySelector("body").style.overflowY = "auto"
    }

    return (
        <div className="view-modal">
            <div className="rmodal-title">
                <h5>View Request</h5>
            </div>
            <div className="rmodal-body">
                <div className="request-details">
                    <div>
                        <img
                            src={requestData.sender_pic}
                            alt=""/>
                    </div>
                    <div className="user-request-info">
                        <h4 className="name">{requestData.sender_name}</h4>
                        <h4 className="occupation">{requestData.sender_job_title}  at <a href=""> {requestData.sender_company}<img src="" alt=""/></a>
                        </h4>
                    </div>
                </div>
                <div className="user-request-message">
                    <label htmlFor="message">Message</label>
                    <div className = "text-output">{requestData.message}</div>
                </div>
                <div className = "text-right mt-4">
                    <button onClick = {closeViewRequest} className = "btn btn-danger btn-sm">Close</button>
                </div>
            </div>
        </div>
    )
}

export default ViewModal
