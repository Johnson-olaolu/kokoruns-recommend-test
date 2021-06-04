
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState, useEffect } from 'react'

const SuccessModal = ({ successMessage, removeModal }) => {
    useEffect(()=>{
        setTimeout(()=>{
            removeModal()
        }, 3000)
    })
    
    return (
        <div className="success-modal">
            <div className="rmodal-title">
                <h5>View Request</h5>
                <FontAwesomeIcon onClick = {removeModal} icon = {faTimes}/>
            </div>
            <div className="rmodal-body">
                <h4 className="">{successMessage}</h4>
            </div>
        </div>
    )
    
}

export default SuccessModal
