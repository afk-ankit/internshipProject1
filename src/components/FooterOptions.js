import '../styles/FooterOptions.css'
function FooterOptions({ first, second, third, hover }) {
    if (hover) {
        return (
            <div className='FooterOptions'>
                <h3>{first}</h3>
                <p id='footer__options-phone'>{second}</p>
                <p id='footer__options-email'>{third}</p>
            </div>
        )
    }
    else {
        return (
            <div className='FooterOptions'>
                <h3>{first}</h3>
                <p >{second}</p>
                <p >{third}</p>
            </div>
        )
    }

}

export default FooterOptions