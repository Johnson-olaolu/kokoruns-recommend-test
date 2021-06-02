import React from 'react'
import '../assets/table.css'
import Search from './Search'

const RecommendationSearch = () => {
    return (
        <section className ="recommendation-send">
            <table class="recommendation-table">
                <tbody>
                    <Search/>
                    <Search/>
                    <Search/>
                </tbody>
            </table>
        </section>
    )
}

export default RecommendationSearch
