import React, { useContext } from 'react'
import { ModalDetails, ModalShow } from '../../ModalDetails'

const SentRequest = ( { sentRequest }) => {
    const {showModal, setShowModal} = useContext(ModalShow)
    const {modalDetails, setModalDetails} = useContext(ModalDetails)

    const onClickCancel = () =>{
        setShowModal(true)
        setModalDetails({modalType: "view sent request", modalData : sentRequest})
    }

    return (
        <tr className = "table-row">
                        <td className = "info">
                            <div className="d-flex align-items-center">
                                <img src={sentRequest.receiver_pic} alt="" srcset="" />
                               <div>
                                   <h4 className="name">{sentRequest.receiver_name}</h4>
                                   <h4 className="email">johndoe@email.com</h4>
                                   </div> 
                                
                            </div>
                        </td>
                        <td className = "job">
                            <div>
                                <h4 className="description">{sentRequest.receiver_job_title}</h4>
                                <a href= "" className="company">{sentRequest.receiver_company}</a>
                            </div>
                        </td>
                        <td className = "date">{ new Date(sentRequest.created_at).toLocaleDateString()}</td>
                        <td className = "status"> {
                            (()=>{
                                if (sentRequest.accepted === -1){
                                    return (<span className="rejected">Rejected</span>)
                                }else if (sentRequest.accepted === 0){
                                    return (<span className="pending">Pending</span>)
                                }else {
                                    return (<span className="recommended">Recommended</span>)
                                }
                            })()
                        }</td>
                        <td className = "action">
                            <button onClick = {onClickCancel } className="cancel bg-danger">Cancel Request</button>
                        </td>
                    </tr>
    )
}

export default SentRequest
