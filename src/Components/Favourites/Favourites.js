import React, {Component} from 'react'
import './Favourites.css'
import {Link} from "react-router-dom";
import Section from "../Section/Section";
import logoText from "../../assets/love-cat.svg";
import logoImage from "../../assets/cat-logo.svg";

class Favourites extends Component {
    state = {
        catImages: [],
    }

    render() {

        return (
            <React.Fragment>
                <div>
                    <div className="clearfix center">
                        <div className="column">
                            <img src={logoText} alt="logo-txt" className="logotxt"/>
                        </div>
                        <div className="column left">
                            <img src={logoImage} alt="logo" className="logotxt lowerLogo"/>
                        </div>
                    </div>
                    <Link to="/" className='pathToHome'>Home</Link>

                </div>
                {/*<Section catImages={this.state.catImages}></Section>*/}
                <h2 className='title'>Twoje ulubione</h2>
            </React.Fragment>

        )
    }

}

export default Favourites