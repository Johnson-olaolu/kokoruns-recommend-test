import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SendModal = () => {
    const titlesToggle = ()=>{
        document.querySelector(".select-title .title-menu").classList.toggle("d-none")
    }
    const titleSpanClick = (e)=>{
        document.querySelector(".select-title .title-select").innerText = e.target.innerText
        document.querySelector(".select-title .title-menu").classList.add("d-none")
    }
    return (
        <div className="send-modal">
            <div className="rmodal-title">
                <h5>Send Request</h5>
            </div>
            <div className="rmodal-body">
                <div className="select-title">
                    <h6 className = "">Title</h6>
                    <div className="">
                        <div className = "title-select">Select Title</div>
                        <div  onClick = {titlesToggle} className = "icon"><FontAwesomeIcon icon = {faChevronDown}/></div>
                        <div className="title-menu d-none">
                            <span onClick = {titleSpanClick}>Mr</span>
                            <span onClick = {titleSpanClick}>Mrs</span>
                            <span onClick = {titleSpanClick}>Dr</span>
                            <span onClick = {titleSpanClick}>Engr</span>
                            <span onClick = {titleSpanClick}>Prof</span>
                            <span onClick = {titleSpanClick}>Name</span>
                        </div>
                    </div>
                </div>
                <div className="select-name">
                    <label className ="">Name</label>
                    <input placeholder = "Enter Full Name" type="text" className="" />
                </div>
                <div className="select-position">
                    <label className ="">Position</label>
                    <input type="text" placeholder = "Enter Company Name" className="job-title mb-2" />
                    <input type="text" placeholder = "Enter Company Position" className="job-position" />
                </div>
                <div className="select-message">
                    <label className ="">Message</label>
                    <textarea name="" placeholder = "Enter Message..." id=""></textarea>
                </div>
                <div className="text-right select-submit">
                    <button className="btn btn-success btn-sm">Request</button>
                </div>            
            </div>
        </div>
    )
}

export default SendModal
