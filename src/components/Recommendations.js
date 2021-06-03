import {faMailBulk, faSearch} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {React, useState, useEffect, useContext} from 'react'
import '../assets/recommendation.css'
import Modal from './Modal'
import RecommendationRequest from './RecommendationRequest'
import RecommendationSearch from './RecommendationSearch'
import RecommendationSend from './RecommendationSend'

import {UserContext, UserLoggedIn} from '../User'
import axios from 'axios'
import {ModalId, ModalType} from '../ModalType'
import { Redirect } from 'react-router'

const Recommendations = () => {
    
    //const [numRecommendations, setNumRecommendations] = useState(0)
    const {user, setUser} = useContext(UserContext)
    const {loggedIn, setLoggedIn} = useContext(UserLoggedIn)

    const [recommendationData, setRecommendationData] = useState({})
    const [modalTypeText, setModalTypeText] = useState(ModalType)
    const [modalIDText, setModalIDText] = useState(ModalId)
    
    
    const getRecommendationDataFunction = () =>{
        axios.get(`https://kokoruns-api.herokuapp.com/api/user/recommendations?user_id=${user.user.user_id}`, {
            headers: {
                Authorization: 'Bearer ' + user.access_token //the token is a variable which holds the token
            }
        }).then(res => {
            console.log(res.data)
            setRecommendationData(res.data.data)
        }).catch(err => {
            console.error(err)
        })
    }
    useEffect(() => {
        //console.log({user: user.user.user_id, token : user.access_token})
        if(loggedIn === true) {
            getRecommendationDataFunction()
            
        }
    });

    if(loggedIn !== true ) {
        return (
             <Redirect to ="/"/> 
        )
    }

    
    const postRecommendationRequestFunction = (reciver_id, sender_id, relationship_position, relationship) => {
        axios
            .post("https://kokoruns-api.herokuapp.com/api/user/recommendation/request", {
            reciver_id: reciver_id,
            sender_id: sender_id,
            relationship_position: relationship_position,
            relationship: relationship
        })
            .then(res => {
                console.log(res.data)
            })
    }

    const acceptRecommendationRequestFunction = (receiver_id, impression, integrity, punctuality, message, id) => {
        console.log({receiver_id, impression, integrity, punctuality, message, id})
        axios.patch(`/user/recommendation/request/accept/${id}`, {
            receiver_id: receiver_id,
            impression: impression,
            honesty: integrity,
            punctuality: punctuality,
            message : message
        },{headers: {
                Authorization: 'Bearer ' + user.access_token //the token is a variable which holds the token
            }} )
            .then(res => {
                console.log(res.data)
                getRecommendationDataFunction()
            })
            .catch(err => {
                console.error(err)
            })
    }

    const rejectRecommendationRequestFunction = (id) => {
        axios.patch(`https://kokoruns-api.herokuapp.com/api/user/recommendation/request/reject/${id}`,
            {headers: {
                Authorization: 'Bearer ' + user.access_token //the token is a variable which holds the token
            }})
            .then(res => {
                console.log(res.data)
                getRecommendationDataFunction()
            })
            .catch(err => {
                console.error(err)
            })
    }

    const cancelRecommendationRequestFunction = (id) => {
        axios.delete(`https://kokoruns-api.herokuapp.com/api/user/recommendation/request/cancel/${id}`,
            {headers: {
                Authorization: 'Bearer ' + user.access_token //the token is a variable which holds the token
            }})
            .then(res => {
                console.log(res.data)
                getRecommendationDataFunction()
            })
            .catch(err => {
                console.error(err)
            })

    }

    const viewRecommendationRequestFunction = (id) => {
        axios.get(`https://kokoruns-api.herokuapp.com/api/user/recommendation/request/${id}`,
        {headers: {
            Authorization: 'Bearer ' + user.access_token //the token is a variable which holds the token
        }})
            .then(res => {
                console.log(res.data);
                getRecommendationDataFunction()
            })
            .catch(err => {
                console.error(err)
            })
    }
    /*
    document.addEventListener('click', function (e) {
            if (e.target !== document.querySelector(".menu-items") && document.querySelector(".menu-items").contains(e.target) === false) {
                if (e.target === document.querySelector(".menu-burger") || document.querySelector(".menu-burger").contains(e.target) !== false) {
                    document.querySelector(".menu-items").classList.toggle("hidden")
                } else {
                    document.querySelector(".menu-items").classList.add("hidden")
                }

            }

        })
        */
    const burgerClick = () => {
        document.querySelector(".menu-items").classList.toggle("hidden")
    }

    return (
        <ModalType.Provider
            value={{
            modalTypeText,
            setModalTypeText
        }}>
            <ModalId.Provider
                value={{
                modalIDText,
                setModalIDText
            }}>
                <main className="recommendations-page">
                    <div className="header">
                        <h2 className="">Recommendations</h2>
                        <div className="menu">
                            <svg
                                onClick={burgerClick}
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

                    <div className="recieved">
                        <div className="head">
                            <h4>Received Requests</h4>
                            <div className="num-recommendations">
                                <FontAwesomeIcon className="icon" icon={faMailBulk}/>
                                <span>{recommendationData.received_count}</span>
                            </div>
                        </div>
                        {recommendationData.received_count > 0
                            ? <RecommendationRequest
                                    postRecommendationRequestFunction={postRecommendationRequestFunction}
                                    receivedRecommendationRequests={recommendationData.received_recommendation_requests}/>
                            : <span>No Request Found</span>}
                    </div>

                    <div className="send">
                        <div className="head">
                            <h4>Send Requests</h4>
                        </div>
                        <div className="recommendation-search">
                            <div className=" py-4">
                                <div className="wrapper">
                                    <div className=" search-bar">
                                        <input type="text" placeholder="Search For Users..." className=""/>
                                        <FontAwesomeIcon icon={faSearch}/>
                                    </div>

                                </div>
                            </div>
                            <div className="search-results">
                                <div className="head">
                                    <h4>Search Results</h4>
                                </div>
                                {true
                                    ? <RecommendationSearch/>
                                    : <span>No Search Result Found</span>}
                            </div>

                        </div>

                        <section className="recommendation-your-requests">
                            <div className="head">
                                <h4>Your Requests</h4>
                                <div className="num-recommendations">
                                    <FontAwesomeIcon className="icon" icon={faMailBulk}/>
                                    <span>{recommendationData.sent_count}</span>
                                </div>
                            </div>
                            {recommendationData.sent_count > 0
                                ? <RecommendationSend
                                        sentRecommendationRequests={recommendationData.sent_recommendation_requests}/>
                                : <span>No Request Found</span>}
                        </section>

                    </div>
                    <Modal getRecommendationData={recommendationData}
                    viewRecommendationRequestFunction = {viewRecommendationRequestFunction}
                    rejectRecommendationRequestFunction = {rejectRecommendationRequestFunction}
                    acceptRecommendationRequestFunction = {acceptRecommendationRequestFunction}
                    cancelRecommendationRequestFunction = {cancelRecommendationRequestFunction}/>
                </main>
            </ModalId.Provider>
        </ModalType.Provider>
    )
}

export default Recommendations
