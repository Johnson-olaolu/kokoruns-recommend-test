import React, {useContext, useEffect, useState} from 'react'
import '../../../assets/modal.css'
import {ModalShow} from '../ModalDetails'
import RequestModal from './RequestModal'
import SendModal from './SendModal'
import SuccessModal from './SuccessModal'
import ViewRequestModal from './ViewRequestModal'
import ViewSentModal from './ViewSentModal'

const Modal = (props) => {
    const [modalType,
        setModalType] = useState("")
    const [modalData,
        setModalData] = useState({})
    const {showModal, setShowModal} = useContext(ModalShow)

    useEffect(() => {
        setModalType(props.modalDetails.modalType)
        setModalData(props.modalDetails.modalData)
        //document.querySelector(".modal-background").style.left = window.pageXOffset 
        document.querySelector(".modal-background").style.top = window.pageYOffset + "px"
        document.querySelector("body").style.overflowY = "hidden"
    }, [props.modalDetails.modalType, props.modalDetails.modalData])

    const modalBackgroundClick = (e) => {
        if(e.target !== document.querySelector('.rmodal-container') && document.querySelector('.rmodal-container').contains(e.target) ===false ){
            setShowModal(false)
            document.querySelector("body").style.overflowY = "auto"
        }  
    }

    const removeModal = () => {
        setShowModal(false)
        document.querySelector("body").style.overflowY = "auto"
    }

    return (
        <section onClick={modalBackgroundClick} className="modal-background ">
            <div className="rmodal-container">
                {(() => {
                    if (modalType === "view recived request") {
                        return (<ViewRequestModal
                            RejectFunction={props.rejectRecommendationRequestFunction}
                            modalData={modalData}
                            removeModal = {removeModal}/>)
                    } else if (modalType === "recommend") {
                        return (<RequestModal
                           acceptFunction={props.acceptRecommendationRequestFunction}
                            modalData={modalData}
                            removeModal = {removeModal}/>)
                    } else if (modalType === "send request") {
                        return (<SendModal
                            postFunction={props.postRecommendationRequestFunction}
                            modalData={modalData}
                            removeModal = {removeModal}/>)
                    } else if (modalType === "view sent request") {
                        return (<ViewSentModal
                            cancelFunction={props.cancelRecommendationRequestFunction}
                            modalData={modalData}
                            removeModal = {removeModal}/>)
                    } else if (modalType === "success") {
                        return (<SuccessModal 
                            successMessage={modalData}
                            removeModal = {removeModal}/>)
                    }
                })()}

            </div>
        </section>
    )
}

export default Modal
