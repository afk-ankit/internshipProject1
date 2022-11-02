import React from 'react'
import '../styles/Newsletter.css'

function Newsletter() {
    return (
        <div className='newsLetter'>
            <h2>
                Curated stories, thought provoking pieces and art works, delivered weekly.
            </h2>
            <div className='newsLetter__input'>
                <input type="text" placeholder='youremail@gmail.com' />
                <button>Subscribe</button>
            </div>
        </div>
    )
}

export default Newsletter   