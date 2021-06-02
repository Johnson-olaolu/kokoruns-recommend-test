import React, { useContext } from 'react'
import '../assets/tablerow.css'
import { ModalId, ModalType } from '../ModalType'


const Request = ({ recievedRecommendationRequest }) => {
    const { modalTypeText, setModalTypeText } = useContext(ModalType)
    const {modalIDText, setModalIDText} = useContext(ModalId)
    const onClickViewRequest = () =>{
        document.querySelector(".modal-background").classList.remove("d-none")
        document.querySelector("body").style.overflowY = "hidden"
        window.scrollTo(0,0)
        setModalTypeText("view request")
        setModalIDText(recievedRecommendationRequest.id)
    }

    const onClickRecommend = ()=> {
        document.querySelector(".modal-background").classList.remove("d-none")
        document.querySelector("body").style.overflowY = "hidden"
        window.scrollTo(0,0)
        setModalTypeText("recommend")
        setModalIDText(recievedRecommendationRequest.id)
    }
    return (
        <tr className = "table-row">
            <td className = "info">
                <div className="d-flex align-items-center">
                    <img src={recievedRecommendationRequest.receiver_pic} alt="" srcset="" />
                   <div>
                       <h4 className="name">{recievedRecommendationRequest.receiver_name}</h4>
                       <h4 className="email">johndoe@email.com</h4>
                       </div> 
                    
                </div>
            </td>
            <td className = "job">
                <div>
                    <h4 className="description">{recievedRecommendationRequest.receiver_job_title}</h4>
                    <a href= "" className="company">NET Pharmacy</a>
                </div>
            </td>
            <td className = "date">{ new Date(recievedRecommendationRequest.created_at).toLocaleDateString()}</td>
            <td className = "status">
                {(()=>{
                if (recievedRecommendationRequest.accepted === -1){
                    return (<span className="rejected">Rejected</span>)
                }else if (recievedRecommendationRequest.accepted === 0){
                    return (<span className="pending">Pending</span>)
                }else {
                    return (<span className="recommended">Recommended</span>)
                }
            })()}
            </td>
            <td className = "action">
                <button onClick = {onClickViewRequest}  className="view">View Request</button>
                <button onClick = {onClickRecommend}  className="recommend">Recommend</button>
            </td>
        </tr>
    )
}

export default Request
