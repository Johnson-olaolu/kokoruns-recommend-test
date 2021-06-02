import React from 'react'
import '../assets/tablerow.css'

const Search = () => {
    return (
        <tr className = "table-row">
        <td className = "info">
            <div className="d-flex align-items-center">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" srcset="" />
               <div>
                   <h4 className="name">John Doe</h4>
                   <h4 className="email">johndoe@email.com</h4>
                   </div> 
                
            </div>
        </td>
        <td className = "job">
            <div>
                <h4 className="description">Pharmarmacist</h4>
                <a href= "" className="company"> NET Pharmacy</a>
            </div>
        </td>
        <td className = "action">
            <a href="" className="view">View Profile</a>
            <a href="" className="recommend">Send Request</a>
        </td>
    </tr>
    )
}

export default Search
