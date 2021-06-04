import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'

const ViewRequestModal = ( { modalData, removeModal, rejectFunction } ) => {

    const onClickCancel = () => {
         rejectFunction(modalData.id)
    }
    return (
        <div className="view-modal">
            <div className="rmodal-title">
                <h5>View Request</h5>
                <FontAwesomeIcon onClick = {removeModal} icon = {faTimes}/>
            </div>
            <div className="rmodal-body">
                <div className="request-details">
                    <div>
                        <img
                            src={modalData.sender_pic}
                            alt=""/>
                    </div>
                    <div className="user-request-info">
                        <h4 className="name">{modalData.sender_name}</h4>
                        <h4 className="occupation">{modalData.sender_job_title}  at <a href=""> {modalData.sender_company}<img src="" alt=""/></a>
                        </h4>
                    </div>
                </div>
                <div className="user-request-message">
                    <label htmlFor="message">Message</label>
                    <div className = "text-output">{modalData.message}</div>
                </div>
                <div className = "text-right mt-4">
                    <button onClick = {onClickCancel} className = "btn btn-danger btn-sm">Cancel Request</button>
                </div>
            </div>
        </div>
    )
}

export default ViewRequestModal
