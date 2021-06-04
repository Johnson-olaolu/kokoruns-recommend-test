import React, { useContext } from 'react'
import { ModalDetails, ModalShow } from '../ModalDetails'

const RecievedRequest = ({receivedRequest}) => {
    const {showModal, setShowModal} = useContext(ModalShow)
    const {modalDetails, setModalDetails} = useContext(ModalDetails)


    const onClickViewRequest = () =>{
        setShowModal(true)
        setModalDetails({modalType: "view recived request", modalData : receivedRequest})
    }

    const onClickRecommend = () => {
        setShowModal(true)
        setModalDetails({modalType: "recommend", modalData : receivedRequest})
    }

    return (
        <tr className="table-row">
            <td className="info">
                <div className="d-flex align-items-center">
                    <img src={receivedRequest.receiver_pic} alt="" srcset=""/>
                    <div>
                        <h4 className="name">{receivedRequest.receiver_name}</h4>
                        <h4 className="email">johndoe@email.com</h4>
                    </div>

                </div>
            </td>
            <td className="job">
                <div>
                    <h4 className="description">{receivedRequest.receiver_job_title}</h4>
                    <a href="" className="company">NET Pharmacy</a>
                </div>
            </td>
            <td className="date">{new Date(receivedRequest.created_at).toLocaleDateString()}</td>
            <td className="status">
                {(() => {
                    if (receivedRequest.accepted === -1) {
                        return (
                            <span className="rejected">Rejected</span>
                        )
                    } else if (receivedRequest.accepted === 0) {
                        return (
                            <span className="pending">Pending</span>
                        )
                    } else {
                        return (
                            <span className="recommended">Recommended</span>
                        )
                    }
                })()}
            </td>
            <td className="action">
                <button onClick={onClickViewRequest} className="view">View Request</button>
                <button onClick={onClickRecommend} className="recommend">Recommend</button>
            </td>
        </tr>
    )
}

export default RecievedRequest
