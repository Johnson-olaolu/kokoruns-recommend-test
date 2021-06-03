import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'

const ViewModal = ({RequestId , RequestData, CancelFunction, RejectFunction , type}) => {
    const [requestData, setRequestData] = useState({})
    useEffect(() => {
        RequestData.forEach(request => {
            console.log({request, RequestId})
            if (request.id === RequestId){
                setRequestData(request)              
            }
        }) 
    }, [RequestData, RequestId])

    const closeModal = () => {
        document.querySelector(".modal-background").classList.add("d-none")
        document.querySelector("body").style.overflowY = "auto"
    }

    const onClickCancel = () => {
         if (type === "reject"){
            RejectFunction(requestData.id)
         }else if (type === "cancel") {
            CancelFunction(requestData.id)
         }
    }
    return (
        <div className="view-modal">
            <div className="rmodal-title">
                <h5>View Request</h5>
                <FontAwesomeIcon onClick = {closeModal} icon = {faTimes}/>
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
                    <button onClick = {onClickCancel} className = "btn btn-danger btn-sm">Cancel Request</button>
                </div>
            </div>
        </div>
    )
}

export default ViewModal
