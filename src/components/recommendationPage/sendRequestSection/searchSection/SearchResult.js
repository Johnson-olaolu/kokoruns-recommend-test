import React, { useContext, useEffect } from 'react'
import { ModalDetails, ModalShow } from '../../ModalDetails'

const SearchResult = ({searchResult}) => {
    const {showModal, setShowModal} = useContext(ModalShow)
    const {modalDetails, setModalDetails} = useContext(ModalDetails)

    const onClickSendRequest = ()=>{
        setShowModal(true)
        setModalDetails({modalType: "send request", modalData : searchResult})
    }
    
    return (
        <tr className="table-row">
            <td className="info">
                <div className="d-flex align-items-center">
                    <img
                        src={searchResult.profile_image}
                        alt=""
                        srcset=""/>
                    <div>
                        <h4 className="name">{searchResult.last_name} {searchResult.first_name}</h4>
                        <h4 className="email">{searchResult.email}</h4>
                    </div>
                </div>
            </td>
            <td className="job">
                <div>
                    <h4 className="description">{searchResult.profession}</h4>
                    <a href="" className="company">
                        {searchResult.current_employer}</a>
                </div>
            </td>
            <td className="action">
                <button className="view">View Profile</button>
                <button onClick = {onClickSendRequest} className="recommend">Send Request</button>
            </td>
        </tr>
    )
}

export default SearchResult
