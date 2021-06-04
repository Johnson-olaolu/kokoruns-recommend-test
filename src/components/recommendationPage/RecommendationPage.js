import axios from 'axios'
import React, {useEffect, useState} from 'react'
import {Redirect} from 'react-router'
import getRecommendation from '../../json/getRecommendation'
import ReceivedRequestSection from './receivedRequestSection/ReceivedRequestSection'
import SendRequestSection from './sendRequestSection/SendRequestSection'
import {ModalDetails, ModalShow} from './ModalDetails'
import '../../assets/recommendation.css'
import Modal from './modals/Modal'


const RecommendationPage = () => {
    const [userData, setUserData] = useState({})
    const [recommendationData, setRecommendationData] = useState({})
    const [modalDetails, setModalDetails] = useState({})
    const [showModal, setShowModal] = useState(false)
    const [searchResults, setSearchResults] = useState([])
    

    const getRecommendationDataFunction = (user) => {
        axios
            .get(`https://kokoruns-api.herokuapp.com/api/user/recommendations?user_id=${user.user.user_id}`, {
            headers: {
                Authorization: 'Bearer ' + user.access_token //the token is a variable which holds the token
            }
        })
            .then(res => {
                console.log(res.data)
                setRecommendationData(res.data.data)
            })
            .catch(err => {
                console.error(err)
            })
    }
    useEffect(() => {
        var data = JSON.parse(localStorage.getItem('user'))
        //setUserData(data)
        axios.get(`https://kokoruns-api.herokuapp.com/api/user/recommendations?user_id=${data.user.user_id}`, {
            headers: {
                Authorization: 'Bearer ' + data.access_token //the token is a variable which holds the token
            }
        }).then(res => {
            //setUserData(data)
            console.log(res.data.data)
            setRecommendationData(res.data.data)
        }).catch(err => {
            console.error(err)
        })
        //setRecommendationData(getRecommendation.data)
    }, [])

    const postRecommendationRequestFunction = (userName, position, companyName, message, relationship, receiver_id) => {
        var user = JSON.parse(localStorage.getItem('user'))
        console.log({userName, position, companyName, message, relationship, receiver_id})
        axios.post("https://kokoruns-api.herokuapp.com/api/user/recommendation/request", {
            "receiver_id": receiver_id,
            "relationship_position": position,
            "relationship": relationship,
            "message": message
        },{
            headers: {
            Authorization: 'Bearer ' + user.access_token //the token is a variable which holds the token
        }

        })
            .then(res => {
                console.log(res.data)
                getRecommendationDataFunction(user)
                setShowModal(true)
                setModalDetails({modalType: "success", modalData : res.data.message})
            })
            .catch(err =>{
                console.error(err)
            })
    }

    const acceptRecommendationRequestFunction = (receiver_id, impression, integrity, punctuality, message, id) => {
        var user = JSON.parse(localStorage.getItem('user'))
        console.log({receiver_id, impression, integrity, punctuality, message, id})
        axios.patch(`/user/recommendation/request/accept/${id}`, {
            "receiver_id": receiver_id,
            "impression": impression,
            "honesty": integrity,
            "punctuality": punctuality,
            "message" : message
        },{headers: {
                Authorization: 'Bearer ' + user.access_token //the token is a variable which holds the token
            }} )
            .then(res => {
                console.log(res.data.message)
                getRecommendationDataFunction(user)
                setShowModal(true)
                setModalDetails({modalType: "success", modalData : res.data.message})
            })
            .catch(err => {
                console.error(err)
            })
    }

    const rejectRecommendationRequestFunction = (id) => {
        var user = JSON.parse(localStorage.getItem('user'))
        axios.patch(`https://kokoruns-api.herokuapp.com/api/user/recommendation/request/reject/${id}`,
            {headers: {
                Authorization: 'Bearer ' + user.access_token //the token is a variable which holds the token
            }})
            .then(res => {
                console.log(res.data.message)
                getRecommendationDataFunction(user)
                setShowModal(true)
                setModalDetails({modalType: "success", modalData : res.data.message})
            })
            .catch(err => {
                console.error(err)
            })
    }

    const cancelRecommendationRequestFunction = (id) => {
        var user = JSON.parse(localStorage.getItem('user'))
        axios.delete(`https://kokoruns-api.herokuapp.com/api/user/recommendation/request/cancel/${id}`,
            {headers: {
                Authorization: 'Bearer ' + user.access_token //the token is a variable which holds the token
            }})
            .then(res => {
                console.log(res.data.message)
                getRecommendationDataFunction(user)
                setShowModal(true)
                setModalDetails({modalType: "success", modalData : res.data.message})
            })
            .catch(err => {
                console.error(err)
            })

    }

    const viewRecommendationRequestFunction = (id) => {
        var user = JSON.parse(localStorage.getItem('user'))
        axios.get(`https://kokoruns-api.herokuapp.com/api/user/recommendation/request/${id}`,
        {headers: {
            Authorization: 'Bearer ' + user.access_token //the token is a variable which holds the token
        }})
            .then(res => {
                console.log(res.data.message)
                getRecommendationDataFunction()                
            })
            .catch(err => {
                console.error(err)
            })
    }

    const searchUsersFunction = (search) => {
        var user = JSON.parse(localStorage.getItem('user'))
        console.log("searching")
        axios.post(`https://kokoruns-api.herokuapp.com/api/users`,{
            search : search
        },
        {headers: {
            Authorization: 'Bearer ' + user.access_token //the token is a variable which holds the token
        }}).then(res => {
            console.log(res.data.data.data)
            setSearchResults(res.data.data.data)
        }).catch(err =>{
            console.error(err)
        })
    }

    return (
        <ModalDetails.Provider
            value={{
            modalDetails,
            setModalDetails
        }}>
            <ModalShow.Provider value={{showModal, setShowModal}}>
                <main className="recommendations-page">
                    <div className="header">
                        <h2 className="">Recommendations</h2>
                        <div className="menu">
                            <svg
                                onClick={"burgerClick"}
                                className="menu-burger"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                            <div className="menu-items hidden">
                                <ul>
                                    <a href="" className="">
                                        <li>Dashboard</li>
                                    </a>
                                    <a href="" className="">
                                        <li>Teams</li>
                                    </a>
                                    <a href="" className="">
                                        <li>Messages</li>
                                    </a>
                                    <a href="" className="">
                                        <li>JobDash</li>
                                    </a>
                                    <a href="" className="">
                                        <li>Events</li>
                                    </a>
                                    <a href="" className="">
                                        <li>All About You</li>
                                    </a>
                                    <a href="" className="">
                                        <li>Jobs Board</li>
                                    </a>
                                    <a href="" className="">
                                        <li>Recommendations</li>
                                    </a>
                                    <a href="" className="">
                                        <li>Settings</li>
                                    </a>
                                    <a href="" className="">
                                        <li>Logout</li>
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ReceivedRequestSection
                        receivedCount={recommendationData.received_count}
                        receivedRequests={recommendationData.received_recommendation_requests}/>
                    <SendRequestSection
                        searchUsersFunction = {searchUsersFunction}
                        searchResults = {searchResults}
                        sentCount={recommendationData.sent_count}
                        sentRequests={recommendationData.sent_recommendation_requests}/> 
                    {showModal && <Modal 
                    modalDetails = {modalDetails}
                    acceptRecommendationRequestFunction = {acceptRecommendationRequestFunction}
                    rejectRecommendationRequestFunction = {rejectRecommendationRequestFunction}
                    cancelRecommendationRequestFunction = {cancelRecommendationRequestFunction}
                    viewRecommendationRequestFunction = {viewRecommendationRequestFunction}
                    postRecommendationRequestFunction = {postRecommendationRequestFunction}/>}
                </main>
            </ModalShow.Provider>
        </ModalDetails.Provider>
    )
}

export default RecommendationPage
