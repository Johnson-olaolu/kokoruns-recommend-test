import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

const SendModal = ( {modalData, postFunction}) => {
    const [relationship, setRelationship] = useState("")
    const [position, setPosition] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [message, setMessage] = useState("")
    const [userName, setUserName] = useState("")



    const relationshipToggle = ()=>{
        document.querySelector(".select-relationship .relationship-menu").classList.toggle("d-none")
    }
    const relationshipSpanClick = (e)=>{
        document.querySelector(".select-relationship .relationship-select").innerText = e.target.innerText
        document.querySelector(".select-relationship .relationship-menu").classList.add("d-none")
        setRelationship(e.target.innerText)
    }

    const onChangeName = (e)=> {
            const {name, value} = e.target
            setUserName(value)
    }

    const onChangeCompany = (e) => {
        const {name, value} = e.target
        setCompanyName(value)
    }

    const onChangePosition = (e) => {
        const {name,value} = e.target
        setPosition(value)
    }

    const onChangeMessage = (e) => {
        const {name, value} = e.target
        setMessage(value)
    }

    const onClickRequest = () => {
        if(userName !== "" && position !== "" && companyName !== "" && message !=="" && relationship !== ""){
            console.log({userName, position, companyName, message, relationship})
            postFunction(userName, position, companyName, message, relationship, modalData.user_id )
        }else {
            var error_msg = ""
            if (userName === ""){
                error_msg = error_msg + `
                Please Input User Name
                `
            }
            if (position === "") {
                error_msg = error_msg + `
                Please Input Position
                `
            }
            if (companyName === "") {
                error_msg = error_msg + `
                Please Input Company
                `
            }
            if(message === "") {
                error_msg = error_msg + `
                Please Input Message
                `
            }
            if (relationship === "") {
                error_msg = error_msg + `
                Please Select Relationship
                `
            }

            alert(error_msg)
        }
        
    }
    const closeModal = () => {
        document.querySelector(".modal-background").classList.add("d-none")
        document.querySelector("body").style.overflowY = "auto"
    }


    return (
        <div className="send-modal">
            <div className="rmodal-title">
                <h5>Send Request</h5>
                <FontAwesomeIcon onClick = {closeModal} icon = {faTimes}/>
            </div>
            <div className="rmodal-body">
                <div className="select-relationship">
                    <h6 className = "">Relationship</h6>
                    <div className="">
                        <div className = "relationship-select">Select Relationship</div>
                        <div  onClick = {relationshipToggle} className = "icon"><FontAwesomeIcon icon = {faChevronDown}/></div>
                        <div className="relationship-menu d-none">
                            <span onClick = {relationshipSpanClick} data-relationship = "Colleague">Colleague</span>
                            <span onClick = {relationshipSpanClick} data-relationship = "Friend">Friend</span>
                            <span onClick = {relationshipSpanClick} data-relationship = "Classmate">Classmate</span>
                            <span onClick = {relationshipSpanClick} data-relationship = "Relation">Relation</span>
                            <span onClick = {relationshipSpanClick} data-relationship = "No Relationship">No Relationship</span>
                        </div>
                    </div>
                </div>
                <div className="select-name">
                    <label className ="">Name</label>
                    <input onChange = {onChangeName} value = {userName} placeholder = "Enter Full Name" type="text" className="" />
                </div>
                <div className="select-position">
                    <label className ="">Position</label>
                    <input onChange = {onChangeCompany} value = {companyName} type="text" placeholder = "Enter Company Name" className="job-title mb-2" />
                    <input onChange = {onChangePosition} value = {position} type="text" placeholder = "Enter Company Position" className="job-position" />
                </div>
                <div className="select-message">
                    <label className ="">Message</label>
                    <textarea onChange ={onChangeMessage} value ={message} placeholder = "Enter Message..." id=""></textarea>
                </div>
                <div className="text-right select-submit">
                    <button onClick = {onClickRequest} className="btn btn-success btn-sm">Request</button>
                </div>            
            </div>
        </div>
    )
}

export default SendModal
