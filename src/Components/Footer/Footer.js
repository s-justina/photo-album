import React from 'react'
import "./Footer.css"
import logoPixabay from "../../assets/pixabay.png"

class Footer extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='footerContainer'>
                    <p className='text'>Projekt powstał w oparciu o dane, które udostępniła strona:
                        <img src={logoPixabay} alt='logo Pixabay.com' className='logoPixa'/>
                    </p>
                </div>
            </React.Fragment>
        )
    }
}

export default Footer