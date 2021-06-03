import React, { useContext } from 'react'
import '../assets/tablerow.css'
import { ModalId, ModalType } from '../ModalType'

const Send = ( { sentRecommendationRequest }) => {
    const { modalTypeText, setModalTypeText } = useContext(ModalType)
    const {modalIDText, setModalIDText} = useContext(ModalId)
    const onClickCancel = () => { 
        document.querySelector(".modal-background").classList.remove("d-none")
        document.querySelector("body").style.overflowY = "hidden"
        window.scrollTo(0,0)
        setModalTypeText("sent request")
        setModalIDText(sentRecommendationRequest.id)  
    }

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
            <button onClick = {onClickCancel} className="cancel bg-danger">Cancel Request</button>
        </td>
    </tr>
    )
}

export default Send
