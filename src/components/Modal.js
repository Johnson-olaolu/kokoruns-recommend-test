import React, { useContext } from 'react'
import '../assets/modal.css'
import { ModalId, ModalType } from '../ModalType'
import RequestModal from './RequestModal'
import SendModal from './SendModal'
import ViewModal from './ViewModal'

const Modal = ( props ) => {
    const {modalTypeText, setModalTypeText } = useContext(ModalType)
    const {modalIDText, setModalIDText } = useContext(ModalId)
    console.log(modalIDText);
    const removeModal = (e) => {
        if (e.target !== document.querySelector(".rmodal-container") && document.querySelector(".rmodal-container").contains(e.target) === false) {
            document.querySelector(".modal-background").classList.add("d-none")
            document.querySelector("body").style.overflowY = "auto"
        }
    }
    return (
        <section onClick={removeModal} className="modal-background d-none">
            <div className="rmodal-container">
                {(() => {
                    if (modalTypeText === "view request") {
                        return (
                          <ViewModal type = "reject" RejectFunction = {props.rejectRecommendationRequestFunction}  RequestId = {modalIDText} RequestData = {props.getRecommendationData.received_recommendation_requests}/>
                        )
                    } else if (modalTypeText === "recommend") {
                        return (
                          <RequestModal RecommendFunction = {props.acceptRecommendationRequestFunction} RequestId = {modalIDText} RequestData = {props.getRecommendationData.received_recommendation_requests} />
                        )
                    } else if (modalTypeText === "send request") {
                        return (
                          <SendModal />
                        )
                    } else if (modalTypeText === "sent request") {
                        return (
                            <ViewModal type = "cancel" CancelFunction = {props.cancelRecommendationRequestFunction}  RequestId = {modalIDText} RequestData = {props.getRecommendationData.sent_recommendation_requests}/>
                        )
                    }
                })()}

            </div>
        </section>
    )
}

export default Modal
