import axios from 'axios'
import React, { useEffect, useState } from 'react'

const RequestModal = ( {RequestId, RequestData, RecommendFunction} ) => {
    const [requestData, setRequestData] = useState({})
    const [message, setMessage] = useState("")
    const [impression, setImpression] = useState(0)
    const [punctuality, setPunctuality] = useState(0)
    const [integrity, setIntegrity] = useState(0)

    useEffect(() => {
        RequestData.forEach(request => {
            console.log({request, RequestId})
            if (request.id === RequestId){
                setRequestData(request)              
            }
        }) 
    }, [RequestData, RequestId])

    const onChangeMessage = (e) => {
        var {name , value} = e.target
        setMessage(value)
    }

    const onImpressionChange = (e) => {
        var {name , value} = e.target
        setImpression(value)
    }

    const onIntegrityChange = (e) => {
        var {name , value} = e.target
        setIntegrity(value)
    }

    const onPunctualityChange = (e) => {
        var {name , value} = e.target
        setPunctuality(value)
    }
    
    const onClickRecommend = ()=>{
        //RequestId
        //recieverid = requestData.reciever_id
        console.log(requestData)
        //console.log({reciever_id : requestData.receiver_id, impression, integrity, punctuality, message, RequestId})
        if (integrity !== 0 && punctuality !== 0 && impression !== 0 && message !== ""){
            RecommendFunction(requestData.receiver_id, impression, integrity, punctuality, message, requestData.id)
        }else {
            var error_mes = ""
            if(integrity === 0) {
                error_mes = error_mes + `
                Please select an integrity rating
                `
            }
            if(punctuality === 0) {
                error_mes = error_mes + `
                Please select a Punctuality rating
                `
            }
            if(impression === 0) {
                error_mes = error_mes + `
                Please select a First Impression rating 
                `
            }
            if(message === "") {
                error_mes = error_mes +`
                Please input a recommendation message
                `
            }
            alert(error_mes)
        }
        //axios.patch(`/user/recommendation/request/accept/:${RequestId}`, {})
        
    }

    return (
        <div className="request-modal">
            <div className="rmodal-title">
                <h5>View Request</h5>
            </div>
            <div className="rmodal-body">
                <div className="user-details">
                    <div>
                        <img
                            src={requestData.sender_pic}
                            alt=""/>
                    </div>
                    <div className="user-info">
                        <h4 className="name">{requestData.sender_name}</h4>
                        <h4 className="occupation">{requestData.sender_job_title} at <a href=""> {requestData.sender_company}<img src="" alt=""/></a>
                        </h4>
                    </div>
                </div>
                <div className="user-message">
                    <div className="message">
                        <label htmlFor="message">Message</label>
                        <textarea name="message" value = {message} id="" onChange = {onChangeMessage} placeholder="Write Your Message"></textarea>
                    </div>
                    <div className="impression">
                        <div className="first-impression">
                            <h6 className="">First Impression</h6>
                            <div className="slider-container">
                                <div class="slider">
                                    <input onChange = {onImpressionChange} type="radio" name="first-impression" id="first-impression-1" value="1" required/>
                                    <label for="first-impression-1" data-ranking="1"></label>
                                    <input onChange = {onImpressionChange} type="radio" name="first-impression" id="first-impression-2" value="2" required/>
                                    <label for="first-impression-2" data-ranking="2"></label>
                                    <input onChange = {onImpressionChange} type="radio" name="first-impression" id="first-impression-3" value="3" required/>
                                    <label for="first-impression-3" data-ranking="3"></label>
                                    <input onChange = {onImpressionChange} type="radio" name="first-impression" id="first-impression-4" value="4" required/>
                                    <label for="first-impression-4" data-ranking="4"></label>
                                    <input onChange = {onImpressionChange} type="radio" name="first-impression" id="first-impression-5" value="5" required/>
                                    <label for="first-impression-5" data-ranking="5"></label>
                                    <input onChange = {onImpressionChange} type="radio" name="first-impression" id="first-impression-6" value="6" required/>
                                    <label for="first-impression-6" data-ranking="6"></label>
                                    <input onChange = {onImpressionChange} type="radio" name="first-impression" id="first-impression-7" value="7" required/>
                                    <label for="first-impression-7" data-ranking="7"></label>
                                    <input onChange = {onImpressionChange} type="radio" name="first-impression" id="first-impression-8" value="8" required/>
                                    <label for="first-impression-8" data-ranking="8"></label>
                                    <input onChange = {onImpressionChange} type="radio" name="first-impression" id="first-impression-9" value="9" required/>
                                    <label for="first-impression-9" data-ranking="9"></label>
                                    <input onChange = {onImpressionChange} type="radio" name="first-impression" id="first-impression-10" value="10" required/>
                                    <label for="first-impression-10" data-ranking="10"></label>
                                    <div class="position"></div>
                                </div>
                            </div>
                        </div>
                        <div className="integrity">
                            <h6 className="">Integrity</h6>
                            <div className="slider-container">
                                <div class="slider">
                                    <input onChange = {onIntegrityChange} type="radio" name="integrity" id="integrity-1" value="1" required/>
                                    <label for="integrity-1" data-ranking="1"></label>
                                    <input onChange = {onIntegrityChange} type="radio" name="integrity" id="integrity-2" value="2" required/>
                                    <label for="integrity-2" data-ranking="2"></label>
                                    <input onChange = {onIntegrityChange} type="radio" name="integrity" id="integrity-3" value="3" required/>
                                    <label for="integrity-3" data-ranking="3"></label>
                                    <input onChange = {onIntegrityChange} type="radio" name="integrity" id="integrity-4" value="4" required/>
                                    <label for="integrity-4" data-ranking="4"></label>
                                    <input onChange = {onIntegrityChange} type="radio" name="integrity" id="integrity-5" value="5" required/>
                                    <label for="integrity-5" data-ranking="5"></label>
                                    <input onChange = {onIntegrityChange} type="radio" name="integrity" id="integrity-6" value="6" required/>
                                    <label for="integrity-6" data-ranking="6"></label>
                                    <input onChange = {onIntegrityChange} type="radio" name="integrity" id="integrity-7" value="7" required/>
                                    <label for="integrity-7" data-ranking="7"></label>
                                    <input onChange = {onIntegrityChange} type="radio" name="integrity" id="integrity-8" value="8" required/>
                                    <label for="integrity-8" data-ranking="8"></label>
                                    <input onChange = {onIntegrityChange} type="radio" name="integrity" id="integrity-9" value="9" required/>
                                    <label for="integrity-9" data-ranking="9"></label>
                                    <input onChange = {onIntegrityChange} type="radio" name="integrity" id="integrity-10" value="10" required/>
                                    <label for="integrity-10" data-ranking="10"></label>
                                    <div class="position"></div>
                                </div>
                            </div>
                        </div>
                        <div className="punctuality">
                            <h6 className="">Punctuality</h6>
                            <div className="slider-container">
                                <div class="slider">
                                    <input onChange = {onPunctualityChange} type="radio" name="punctuality" id="1" value="1" required/>
                                    <label for="1" data-ranking="1"></label>
                                    <input onChange = {onPunctualityChange} type="radio" name="punctuality" id="2" value="2" required/>
                                    <label for="2" data-ranking="2"></label>
                                    <input onChange = {onPunctualityChange} type="radio" name="punctuality" id="3" value="3" required/>
                                    <label for="3" data-ranking="3"></label>
                                    <input onChange = {onPunctualityChange} type="radio" name="punctuality" id="4" value="4" required/>
                                    <label for="4" data-ranking="4"></label>
                                    <input onChange = {onPunctualityChange} type="radio" name="punctuality" id="5" value="5" required/>
                                    <label for="5" data-ranking="5"></label>
                                    <input onChange = {onPunctualityChange} type="radio" name="punctuality" id="6" value="6" required/>
                                    <label for="6" data-ranking="6"></label>
                                    <input onChange = {onPunctualityChange} type="radio" name="punctuality" id="7" value="7" required/>
                                    <label for="7" data-ranking="7"></label>
                                    <input onChange = {onPunctualityChange} type="radio" name="punctuality" id="8" value="8" required/>
                                    <label for="8" data-ranking="8"></label>
                                    <input onChange = {onPunctualityChange} type="radio" name="punctuality" id="9" value="9" required/>
                                    <label for="9" data-ranking="9"></label>
                                    <input onChange = {onPunctualityChange} type="radio" name="punctuality" id="10" value="10" required/>
                                    <label for="10" data-ranking="10"></label>
                                    <div class="position"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className = "text-right mt-4">
                    <button onClick = {onClickRecommend} className = "btn btn-success btn-sm">Recommend</button>
                </div>
            </div>
        </div>
    )
}

export default RequestModal
